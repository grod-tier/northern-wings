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
import rateLimit from 'express-rate-limit';
import {
  isStripeConfigured,
  createCheckoutSession,
  constructWebhookEvent,
  sendOrderNotification,
  sendCustomerReceipt,
} from './lib/checkout.js';
import { injectNav } from './lib/injectNav.js';
import { getJournalPosts, getJournalPost, getGalleryPhotos, imageUrl, sanityWrite } from './lib/sanity.js';
import multer from 'multer';
import crypto from 'crypto';

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

function makeAdminToken(password) {
  return crypto.createHmac('sha256', password + '_nw_admin').update(password).digest('hex');
}
function checkAdmin(req, res) {
  const token = req.headers['x-admin-token'];
  const expected = makeAdminToken(process.env.ADMIN_PASSWORD || '');
  if (!token || token !== expected) { res.status(401).json({ error: 'Unauthorized' }); return false; }
  return true;
}

async function sendPage(res, filePath) {
  try {
    const html = await readFile(filePath, 'utf8');
    res.type('html').send(await injectNav(html));
  } catch {
    res.status(404).send('Page not found');
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Capture the raw request body too — needed for Stripe webhook signature verification.
app.use(express.json({ limit: '20mb', verify: (req, res, buf) => { req.rawBody = buf; } }));
// Serve pages with shared navbar injection before static fallback
app.get('/', (req, res) => sendPage(res, join(__dirname, 'public/index.html')));
app.get('/plight', (req, res) => sendPage(res, join(__dirname, 'public/plight.html')));
app.get('/waystation', (req, res) => sendPage(res, join(__dirname, 'public/waystation.html')));
app.get('/checkout/success', (req, res) => sendPage(res, join(__dirname, 'public/checkout-success.html')));
app.get('/privacy', (req, res) => sendPage(res, join(__dirname, 'public/privacy.html')));
app.get('/terms', (req, res) => sendPage(res, join(__dirname, 'public/terms.html')));
app.get('/contact', (req, res) => sendPage(res, join(__dirname, 'public/contact.html')));
app.get('/admin', (req, res) => res.sendFile(join(__dirname, 'public/admin.html')));

// ─── Admin API ────────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body || {};
  if (password === process.env.ADMIN_PASSWORD) {
    res.json({ token: makeAdminToken(password) });
  } else {
    res.status(401).json({ error: 'Incorrect password' });
  }
});

app.post('/api/admin/upload-photo', upload.single('image'), async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!req.file) return res.status(400).json({ error: 'No image file' });
  if (!sanityWrite) return res.status(500).json({ error: 'Sanity write client not configured' });
  try {
    const asset = await sanityWrite.assets.upload('image', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });
    const doc = {
      _type: 'galleryPhoto',
      image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      caption: req.body.caption || '',
      location: req.body.location || '',
      takenAt: req.body.date || new Date().toISOString().slice(0, 10),
    };
    await sanityWrite.create(doc);
    res.json({ ok: true });
  } catch (err) {
    console.error('Photo upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/create-post', upload.single('cover'), async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!sanityWrite) return res.status(500).json({ error: 'Sanity write client not configured' });
  const { title, excerpt, body, date } = req.body || {};
  if (!title) return res.status(400).json({ error: 'Title required' });
  try {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
    let coverRef = null;
    if (req.file) {
      const asset = await sanityWrite.assets.upload('image', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
      });
      coverRef = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    }
    const bodyBlocks = (body || '').split(/\n\n+/).filter(Boolean).map((para, i) => ({
      _type: 'block',
      _key: `block${i}`,
      style: 'normal',
      children: [{ _type: 'span', _key: `span${i}`, text: para.trim(), marks: [] }],
      markDefs: [],
    }));
    const doc = {
      _type: 'journalPost',
      title,
      slug: { _type: 'slug', current: slug },
      publishedAt: date ? new Date(date).toISOString() : new Date().toISOString(),
      excerpt: excerpt || '',
      ...(coverRef && { mainImage: coverRef }),
      body: bodyBlocks,
    };
    await sanityWrite.create(doc);
    res.json({ ok: true, slug });
  } catch (err) {
    console.error('Post create error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ─── Journal (Sanity-backed blog) ─────────────────────────────────────────────
app.get('/journal', async (req, res) => {
  try {
    const posts = await getJournalPosts();
    const cards = posts.map(p => `
      <article class="post-card">
        ${p.mainImage ? `<a href="/journal/${p.slug.current}" class="post-card__img-wrap">
          <img class="post-card__img" src="${imageUrl(p.mainImage, 800)}" alt="${p.title}" loading="lazy">
        </a>` : ''}
        <div class="post-card__body">
          <p class="post-card__tag">Journal</p>
          <h2 class="post-card__title"><a href="/journal/${p.slug.current}">${p.title}</a></h2>
          ${p.excerpt ? `<p class="post-card__excerpt">${p.excerpt}</p>` : ''}
          <p class="post-card__meta">${p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</p>
        </div>
      </article>`).join('');
    const html = journalListingHtml(cards, posts.length);
    res.type('html').send(await injectNav(html));
  } catch (err) {
    console.error('Journal listing error:', err);
    res.status(500).send(err.message);
  }
});

app.get('/journal/:slug', async (req, res) => {
  try {
    const post = await getJournalPost(req.params.slug);
    if (!post) return res.status(404).send('<h1>Post not found</h1>');
    const bodyHtml = renderPortableText(post.body || []);
    const html = journalPostHtml(post, bodyHtml);
    res.type('html').send(await injectNav(html));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ─── Gallery (Sanity-backed photo dump) ───────────────────────────────────────
app.get('/gallery', async (req, res) => {
  try {
    const photos = await getGalleryPhotos();
    const items = photos.map(p => `
      <figure class="gallery-item">
        <img src="${imageUrl(p.image, 1200)}" alt="${p.caption || ''}" loading="lazy">
        ${p.caption ? `<figcaption>${p.caption}${p.location ? ` · <span class="gallery-location">${p.location}</span>` : ''}${p.takenAt ? ` · <span class="gallery-date">${new Date(p.takenAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>` : ''}</figcaption>` : ''}
      </figure>`).join('');
    const html = galleryPageHtml(items, photos.length);
    res.type('html').send(await injectNav(html));
  } catch (err) {
    console.error('Gallery error:', err);
    res.status(500).send(err.message);
  }
});

app.use(express.static(join(__dirname, 'public')));

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body || {};
  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }
  try {
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transporter.sendMail({
      from: `"Northern Wings Website" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Contact] ${subject || 'New message'} — ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><hr><p>${message.replace(/\n/g, '<br>')}</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message. Please email us directly.' });
  }
});

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

// ─── Shop / checkout routes ────────────────────────────────────────────────

const checkoutRateLimit = rateLimit({
  windowMs: 60 * 1000,      // 1 minute window
  max: 5,                    // max 5 sessions per IP per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many checkout attempts. Please wait a moment and try again.' },
});

/**
 * POST /api/checkout/create-session
 * Create a Stripe Checkout Session for the Pollinator Garden Kit and return its URL.
 * Body: { quantity?: number } (defaults to 1, max 10)
 */
app.post('/api/checkout/create-session', checkoutRateLimit, async (req, res) => {
  if (!isStripeConfigured()) {
    return res.status(503).json({ error: 'Checkout is not configured yet. Set STRIPE_SECRET_KEY in .env.' });
  }
  try {
    const { quantity } = req.body || {};
    const siteUrl = process.env.SITE_URL || `${req.protocol}://${req.get('host')}`;
    const session = await createCheckoutSession({ quantity, siteUrl });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Checkout session error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/stripe/webhook
 * Stripe sends payment events here. On checkout.session.completed, sends an
 * order notification email (if SMTP + ORDER_NOTIFICATION_EMAIL are configured).
 * Must receive the raw request body for signature verification (see express.json `verify` above).
 */
app.post('/api/stripe/webhook', async (req, res) => {
  let event;
  try {
    event = constructWebhookEvent(req.rawBody, req.headers['stripe-signature']);
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    await Promise.allSettled([
      sendCustomerReceipt(session).catch(err => console.error('Customer receipt error:', err)),
      sendOrderNotification(session).catch(err => console.error('Order notification error:', err)),
    ]);
  }

  res.json({ received: true });
});

app.get('/checkout/cancel', (req, res) => res.redirect('/#kits'));

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

app.get('/api/blog/posts', async (req, res) => {
  try {
    const posts = await listPosts();
    res.json({ posts: posts.map(p => ({ slug: p.slug, title: p.title, keyword_seed: p.keyword_seed, publishedAt: p.publishedAt, readingTime: p.readingTime })) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── Page template helpers ────────────────────────────────────────────────────

const PAGE_CSS = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">
<style>
:root{--leaf-deep:oklch(38% 0.06 145);--leaf:oklch(46% 0.085 145);--leaf-mid:oklch(58% 0.09 142);--leaf-soft:oklch(72% 0.07 138);--cream:oklch(96% 0.018 95);--cream-warm:oklch(92% 0.035 88);--ink:oklch(22% 0.025 145);--ink-soft:oklch(34% 0.03 145);--monarch:oklch(68% 0.18 50);--monarch-deep:oklch(56% 0.19 42);--space-xs:8px;--space-sm:12px;--space-md:16px;--space-lg:24px;--space-xl:32px;--space-2xl:48px;--space-3xl:64px;--space-4xl:96px;--display:'Fraunces',Georgia,serif;--body:'Newsreader',Georgia,serif;--ease-out:cubic-bezier(0.25,1,0.5,1)}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
body{font-family:var(--body);font-size:18px;line-height:1.65;color:var(--ink);background:var(--cream);-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{max-width:100%;display:block}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:var(--space-md) var(--space-2xl);display:flex;justify-content:space-between;align-items:center;background:oklch(96% 0.018 95/.92);backdrop-filter:blur(12px);border-bottom:1px solid oklch(46% 0.085 145/.12)}
.brand{display:flex;align-items:center;gap:var(--space-sm);font-family:var(--display);font-weight:600;font-size:20px;color:var(--leaf-deep);letter-spacing:-.01em;text-decoration:none}
.brand-mark{width:36px;height:36px;display:grid;place-items:center;color:var(--monarch)}
.brand small{display:block;font-family:var(--body);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--leaf-mid);font-weight:500;margin-top:2px}
.nav-links{display:flex;gap:var(--space-xl);align-items:center;list-style:none}
.nav-links a{color:var(--ink-soft);text-decoration:none;font-size:15px;font-weight:500;transition:color 150ms var(--ease-out)}
.nav-links a:hover{color:var(--leaf-deep)}
.nav-cta{background:var(--monarch-deep);color:var(--cream)!important;padding:10px 18px;border-radius:999px;font-size:14px;font-weight:500;transition:transform 150ms var(--ease-out),background 150ms var(--ease-out)}
.nav-cta:hover{background:var(--leaf-deep)!important;transform:translateY(-1px)}
.page-header{padding:130px var(--space-2xl) var(--space-3xl);background:radial-gradient(ellipse at 80% 10%,oklch(72% 0.07 138/.25),transparent 55%),var(--cream)}
.page-header-inner{max-width:1100px;margin:0 auto}
.eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--leaf);font-weight:500;margin-bottom:var(--space-lg)}
.page-header h1{font-family:var(--display);font-weight:500;font-size:clamp(36px,5vw,58px);line-height:1.05;letter-spacing:-.025em;color:var(--ink);margin-bottom:var(--space-md)}
.page-header h1 em{font-style:italic;color:var(--monarch-deep);font-weight:400}
.page-header .lede{font-size:19px;line-height:1.55;color:var(--ink-soft);max-width:600px}
/* Journal listing */
.post-grid{max-width:1100px;margin:0 auto;padding:var(--space-4xl) var(--space-2xl);display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-2xl)}
.post-card{display:flex;flex-direction:column}
.post-card__img-wrap{display:block;aspect-ratio:3/2;overflow:hidden;border-radius:8px;margin-bottom:var(--space-md)}
.post-card__img{width:100%;height:100%;object-fit:cover;transition:transform 400ms var(--ease-out)}
.post-card__img-wrap:hover .post-card__img{transform:scale(1.03)}
.post-card__body{flex:1;display:flex;flex-direction:column}
.post-card__tag{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--leaf);font-weight:500;margin-bottom:var(--space-xs)}
.post-card__title{font-family:var(--display);font-size:22px;font-weight:500;letter-spacing:-.015em;line-height:1.2;margin-bottom:var(--space-sm)}
.post-card__title a{color:var(--ink);text-decoration:none;transition:color 150ms}
.post-card__title a:hover{color:var(--leaf-deep)}
.post-card__excerpt{font-size:16px;color:var(--ink-soft);line-height:1.55;margin-bottom:var(--space-sm);flex:1}
.post-card__meta{font-size:14px;color:var(--leaf-mid)}
.empty-state{max-width:1100px;margin:0 auto;padding:var(--space-4xl) var(--space-2xl);text-align:center;color:var(--ink-soft)}
/* Journal post */
.post-wrap{max-width:740px;margin:0 auto;padding:var(--space-4xl) var(--space-2xl)}
.post-cover{width:100%;aspect-ratio:16/7;object-fit:cover;border-radius:8px;margin-bottom:var(--space-3xl)}
.post-meta{font-size:14px;color:var(--leaf-mid);margin-bottom:var(--space-md);letter-spacing:.04em}
.post-wrap h1{font-family:var(--display);font-size:clamp(32px,4.5vw,52px);font-weight:500;line-height:1.08;letter-spacing:-.025em;margin-bottom:var(--space-xl)}
.post-body p{color:var(--ink-soft);margin-bottom:var(--space-md)}
.post-body h2{font-family:var(--display);font-size:26px;font-weight:500;letter-spacing:-.015em;margin:var(--space-2xl) 0 var(--space-md)}
.post-body h3{font-family:var(--display);font-size:20px;font-weight:500;margin:var(--space-xl) 0 var(--space-sm)}
.post-body ul,.post-body ol{margin:var(--space-md) 0 var(--space-md) var(--space-xl);color:var(--ink-soft)}
.post-body li{margin-bottom:var(--space-xs)}
.post-body img{border-radius:6px;margin:var(--space-xl) 0}
.post-body figcaption{font-size:14px;color:var(--ink-soft);text-align:center;margin-top:calc(-1*var(--space-sm))}
.post-back{display:inline-flex;align-items:center;gap:6px;font-size:15px;color:var(--leaf-deep);text-decoration:none;margin-bottom:var(--space-2xl)}
.post-back:hover{text-decoration:underline}
/* Gallery */
.gallery-grid{max-width:1200px;margin:0 auto;padding:var(--space-lg) var(--space-2xl) var(--space-4xl);columns:3;column-gap:var(--space-md)}
.gallery-item{break-inside:avoid;margin-bottom:var(--space-md)}
.gallery-item img{width:100%;border-radius:6px;display:block}
.gallery-item figcaption{font-size:14px;color:var(--ink-soft);padding:var(--space-xs) 0 var(--space-sm);line-height:1.4}
.gallery-location,.gallery-date{color:var(--leaf-mid)}
/* Footer */
footer{background:var(--ink);color:oklch(78% 0.02 145);padding:var(--space-2xl);border-top:1px solid oklch(34% 0.03 145);font-size:14px;text-align:center}
footer .brand{color:var(--cream);justify-content:center;margin-bottom:var(--space-md)}
footer .footer-links{margin-top:var(--space-sm);display:flex;justify-content:center;gap:var(--space-lg);flex-wrap:wrap}
footer .footer-links a{color:oklch(78% 0.02 145);text-decoration:none;transition:color 150ms}
footer .footer-links a:hover{color:var(--cream)}
@media(max-width:900px){.nav{padding:var(--space-sm) var(--space-md)}.nav-links{gap:var(--space-md)}.nav-links a:not(.nav-cta){display:none}.page-header{padding:110px var(--space-md) var(--space-2xl)}.post-grid{grid-template-columns:1fr;padding:var(--space-3xl) var(--space-md)}.gallery-grid{columns:2;padding:var(--space-3xl) var(--space-md)}.post-wrap{padding:var(--space-3xl) var(--space-md)}}
@media(max-width:600px){.gallery-grid{columns:1}}
</style>`;

const PAGE_FOOTER = `<footer>
  <div class="brand">
    <img src="/logo.png" alt="" aria-hidden="true" class="brand-mark" style="width:36px;height:36px;object-fit:contain;border-radius:50%;">
    <span>Northern Wings</span>
  </div>
  <p>© 2025 Northern Wings · Monarch Waystation #54310 · A youth-led conservation enterprise</p>
  <div class="footer-links">
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms &amp; Conditions</a>
  </div>
</footer>`;

function journalListingHtml(cards, count) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Journal — Northern Wings</title>${PAGE_CSS}</head><body>
<!-- NAVBAR -->
<header class="page-header">
  <div class="page-header-inner">
    <div class="eyebrow">Northern Wings · Field Notes</div>
    <h1>The <em>journal.</em></h1>
    <p class="lede">Updates from the waystation — planting milestones, monarch sightings, and seasonal notes from the field.</p>
  </div>
</header>
${count > 0
  ? `<section class="post-grid">${cards}</section>`
  : `<div class="empty-state"><p>No posts yet — check back soon.</p></div>`}
${PAGE_FOOTER}</body></html>`;
}

function journalPostHtml(post, bodyHtml) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${post.title} — Northern Wings Journal</title>${PAGE_CSS}</head><body>
<!-- NAVBAR -->
<div class="post-wrap">
  <a href="/journal" class="post-back">← Back to Journal</a>
  ${post.mainImage ? `<img class="post-cover" src="${imageUrl(post.mainImage, 1400)}" alt="${post.title}">` : ''}
  ${date ? `<p class="post-meta">${date}</p>` : ''}
  <h1>${post.title}</h1>
  <div class="post-body">${bodyHtml}</div>
</div>
${PAGE_FOOTER}</body></html>`;
}

function galleryPageHtml(items, count) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Photo Gallery — Northern Wings</title>${PAGE_CSS}</head><body>
<!-- NAVBAR -->
<header class="page-header">
  <div class="page-header-inner">
    <div class="eyebrow">Northern Wings · Field Photos</div>
    <h1>From the <em>field.</em></h1>
    <p class="lede">Photos from the waystation — milkweed, monarchs, and the seasons in between.</p>
  </div>
</header>
${count > 0
  ? `<section class="gallery-grid">${items}</section>`
  : `<div class="empty-state"><p>No photos yet — check back soon.</p></div>`}
${PAGE_FOOTER}</body></html>`;
}

function renderPortableText(blocks) {
  if (!blocks || !blocks.length) return '';
  return blocks.map(block => {
    if (block._type === 'image') {
      const src = imageUrl(block.asset?._ref, 1200);
      return `<figure><img src="${src}" alt="${block.alt || ''}"><figcaption>${block.caption || ''}</figcaption></figure>`;
    }
    if (block._type !== 'block') return '';
    const tag = { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', blockquote: 'blockquote', normal: 'p' }[block.style] || 'p';
    const text = (block.children || []).map(span => {
      let t = (span.text || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      if (span.marks?.includes('strong')) t = `<strong>${t}</strong>`;
      if (span.marks?.includes('em')) t = `<em>${t}</em>`;
      return t;
    }).join('');
    if (block.listItem === 'bullet') return `<li>${text}</li>`;
    return `<${tag}>${text}</${tag}>`;
  }).join('\n');
}

// Local dev: start the server. On Vercel the default export is used instead.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n🚀 Site Redesigner running at http://localhost:${PORT}\n`);
  });
}

export default app;
