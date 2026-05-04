import { config } from 'dotenv';
import { fileURLToPath as _fup } from 'url';
import { dirname as _dn, join as _jn } from 'path';
config({ path: _jn(_dn(_fup(import.meta.url)), '.env'), override: true });
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';
import { searchBusinesses } from './lib/search.js';
import { scrapeHomepage } from './lib/scrape.js';
import { redesignHomepage } from './lib/redesign.js';
import {
  submitArvowBatch,
  handleArvowWebhook,
  scrapeCompetitorKeywords,
  listPosts,
  getPost,
  renderListingPage,
} from './lib/blog.js';
import { researchKeywords } from './lib/keywords.js';
import { generatePostsBatch } from './lib/generate.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.static(join(__dirname, 'public')));

app.post('/api/search', async (req, res) => {
  const { zipcode, niche } = req.body;
  if (!zipcode || !niche) return res.status(400).json({ error: 'zipcode and niche are required' });
  try {
    const results = await searchBusinesses(zipcode, niche);
    const message = results.length === 0 ? 'No businesses with websites found.' : undefined;
    res.json({ results, ...(message ? { message } : {}) });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/scrape', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'url is required' });
  try {
    res.json(await scrapeHomepage(url));
  } catch (err) {
    console.error('Scrape error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/redesign', async (req, res) => {
  const { screenshot, content, businessName } = req.body;
  if (!screenshot || !content) return res.status(400).json({ error: 'screenshot and content are required' });
  try {
    res.json(await redesignHomepage({ screenshot, content, businessName }));
  } catch (err) {
    console.error('Redesign error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ─── Blog routes ─────────────────────────────────────────────────────────────

/**
 * GET /blog
 * Render the blog listing page with all published posts.
 * Pass ?brand=JSON to inject brand context (name, hue, etc.)
 */
app.get('/blog', async (req, res) => {
  try {
    const brand = req.query.brand ? JSON.parse(req.query.brand) : {};
    const posts = await listPosts();
    if (posts.length === 0) {
      return res.send('<h1>No posts yet.</h1><p>Use POST /api/blog/generate to create some.</p>');
    }
    const html = await renderListingPage(posts, brand);
    res.type('html').send(html);
  } catch (err) {
    console.error('Blog listing error:', err);
    res.status(500).send(err.message);
  }
});

/**
 * GET /blog/:slug
 * Serve a rendered blog post HTML file.
 */
app.get('/blog/:slug', async (req, res) => {
  try {
    const { readFile } = await import('fs/promises');
    const { join } = await import('path');
    const { fileURLToPath } = await import('url');
    const { dirname } = await import('path');
    const __dir = dirname(fileURLToPath(import.meta.url));
    const htmlPath = join(__dir, 'data/posts', `${req.params.slug}.html`);
    const html = await readFile(htmlPath, 'utf8').catch(() => null);
    if (!html) return res.status(404).send('<h1>Post not found</h1>');
    res.type('html').send(html);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * POST /api/blog/keywords
 * Full keyword research pipeline: Claude seeds → autocomplete expansion → Trends → LLM ranking.
 * Optionally auto-submits top keywords to Arvow.
 *
 * Body: {
 *   businessName: string,
 *   niche: string,
 *   location?: string,
 *   headings?: [],        — from scrapeHomepage content
 *   paragraphs?: [],
 *   competitorUrl?: string,   — if set, scrapes competitor keywords first
 *   autoGenerate?: boolean,   — if true, immediately submits top keywords to Arvow
 *   webhookUrl?: string,      — required if autoGenerate: true
 *   limit?: number,           — how many blog posts to generate (default 3)
 * }
 */
app.post('/api/blog/keywords', async (req, res) => {
  const {
    businessName, niche, location,
    headings, paragraphs,
    competitorUrl,
    autoGenerate = false,
    webhookUrl,
    limit = 3,
  } = req.body;

  if (!businessName || !niche) {
    return res.status(400).json({ error: 'businessName and niche are required' });
  }

  try {
    // Optionally scrape competitor keywords first
    let competitorKeywords = [];
    if (competitorUrl) {
      competitorKeywords = await scrapeCompetitorKeywords(competitorUrl, 20);
    }

    // Run full keyword research pipeline
    const result = await researchKeywords({
      businessName, niche, location,
      headings, paragraphs, competitorKeywords,
      onStep: (step, detail) => console.log(`  [keywords] ${step}: ${detail}`),
    });

    // If autoGenerate, send top `limit` keywords to whichever generator is available
    let generateResult = null;
    if (autoGenerate) {
      const topKeywords = result.keywords
        .slice(0, limit)
        .map(k => ({ keyword: k.keyword }));

      if (topKeywords.length) {
        if (process.env.ARVOW_API_KEY) {
          const hook = webhookUrl || `${req.protocol}://${req.get('host')}/api/blog/webhook`;
          generateResult = { generator: 'arvow', ...await submitArvowBatch({ keywords: topKeywords, webhookUrl: hook }) };
        } else {
          const posts = await generatePostsBatch(
            topKeywords,
            { businessName, niche, location },
            (i, total, kw) => console.log(`  [generate] ${i + 1}/${total}: "${kw}"`),
          );
          const saved = [];
          for (const post of posts) {
            const r = await handleArvowWebhook(post, { name: businessName });
            saved.push({ slug: r.slug, url: `/blog/${r.slug}`, title: post.title });
          }
          generateResult = { generator: 'claude', posts: saved };
        }
      }
    }

    res.json({ ...result, ...(generateResult ? { generated: generateResult } : {}) });
  } catch (err) {
    console.error('Keyword research error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/blog/competitors
 * Scrape a competitor's blog to find keyword opportunities.
 * Body: { url: "https://competitor.com", limit?: 20 }
 */
app.post('/api/blog/competitors', async (req, res) => {
  const { url, limit = 20 } = req.body;
  if (!url) return res.status(400).json({ error: 'url is required' });
  try {
    const keywords = await scrapeCompetitorKeywords(url, limit);
    res.json({ keywords });
  } catch (err) {
    console.error('Competitor scrape error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/blog/generate
 * Generate blog posts from keywords.
 * Auto-detects generator: Arvow if ARVOW_API_KEY is set, Claude otherwise.
 *
 * Body: {
 *   keywords: ["keyword 1", "keyword 2"] | [{keyword, title?}],
 *   businessName?: string,   — required for Claude generator
 *   niche?: string,          — required for Claude generator
 *   location?: string,
 *   webhookUrl?: string,     — Arvow only: where to deliver articles
 *   formula?: {},            — Arvow only: formula overrides
 *   brand?: {}               — Claude only: brand context for templates
 * }
 */
app.post('/api/blog/generate', async (req, res) => {
  const { keywords, businessName, niche, location, webhookUrl, formula, brand } = req.body;
  if (!keywords?.length) return res.status(400).json({ error: 'keywords array is required' });

  const useArvow = Boolean(process.env.ARVOW_API_KEY);

  try {
    if (useArvow) {
      // ── Arvow path: async, articles arrive via webhook ──────────────────
      const hook = webhookUrl || `${req.protocol}://${req.get('host')}/api/blog/webhook`;
      const result = await submitArvowBatch({ keywords, webhookUrl: hook, formula });
      res.json({
        generator: 'arvow',
        ...result,
        webhookUrl: hook,
        keywordCount: keywords.length,
        message: `Arvow is generating ${keywords.length} article(s). They will appear at /blog when ready.`,
      });
    } else {
      // ── Claude path: synchronous, articles saved immediately ─────────────
      if (!businessName || !niche) {
        return res.status(400).json({ error: 'businessName and niche are required when using Claude generator' });
      }

      // Stream progress to console, return when all done
      const posts = await generatePostsBatch(
        keywords,
        { businessName, niche, location },
        (i, total, keyword) => console.log(`  [generate] ${i + 1}/${total}: "${keyword}"`),
      );

      // Save each post using the same handler as the Arvow webhook
      const saved = [];
      for (const post of posts) {
        const result = await handleArvowWebhook(post, brand || { name: businessName });
        saved.push({ slug: result.slug, url: `/blog/${result.slug}`, title: post.title });
      }

      res.json({
        generator: 'claude',
        posts: saved,
        message: `Generated ${saved.length} article(s) with Claude. Visit /blog to see them.`,
      });
    }
  } catch (err) {
    console.error('Generate error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/blog/webhook
 * Arvow posts completed articles here.
 * Body: Arvow webhook payload
 * Optional header X-Brand-Context: base64-encoded JSON brand context
 */
app.post('/api/blog/webhook', async (req, res) => {
  try {
    const payload = req.body;
    if (!payload?.title && !payload?.keyword_seed) {
      return res.status(400).json({ error: 'Invalid Arvow webhook payload' });
    }
    let brand = {};
    const brandHeader = req.headers['x-brand-context'];
    if (brandHeader) {
      try { brand = JSON.parse(Buffer.from(brandHeader, 'base64').toString()); } catch {}
    }
    const result = await handleArvowWebhook(payload, brand);
    console.log(`📝 New post saved: /blog/${result.slug}`);
    res.json({ ok: true, ...result });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/blog/posts
 * List all published posts (JSON).
 */
// Serve homepage — express.static above handles public/index.html for /
// This fallback fires only if index.html doesn't exist yet.
app.get('/', async (req, res) => {
  res.status(404).send('<h1>No homepage redesign generated yet. Run the redesign pipeline first.</h1>');
});

// Static inner pages (no .html extension in URL)
app.get('/plight', (req, res) => res.sendFile(join(__dirname, 'public/plight.html')));
app.get('/waystation', (req, res) => res.sendFile(join(__dirname, 'public/waystation.html')));

app.get('/api/blog/posts', async (req, res) => {
  try {
    const posts = await listPosts();
    res.json({ posts: posts.map(p => ({ slug: p.slug, title: p.title, keyword_seed: p.keyword_seed, publishedAt: p.publishedAt, readingTime: p.readingTime })) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Local dev: start the server. On Vercel the default export is used instead.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n🚀 Site Redesigner running at http://localhost:${PORT}\n`);
  });
}

export default app;
