/**
 * lib/blog.js
 *
 * Two responsibilities:
 *  1. Arvow API client — submit keyword batches, receive webhook payloads
 *  2. Competitor scraper — crawl a competitor's blog/sitemap to surface
 *     what they're ranking for, so we can send those keywords to Arvow
 *
 * Arvow API reference: https://arvow.com/developers-and-ai-agents
 *  - POST https://api.arvow.com/api/v1/batch
 *  - Webhook delivers: { id, title, contentHTML, content_markdown,
 *      metadescription, thumbnail, thumbnail_alt_text, keyword_seed,
 *      language_code }
 *  - Requires Agency plan for external API access
 *  - Requires Business plan for webhooks
 */

import './env.js';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { injectBrandStylesIntoPage } from './brandStyles.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = join(__dirname, '../data/posts');

const ARVOW_BASE = 'https://api.arvow.com';

// ─── Ensure data directory exists ─────────────────────────────────────────────

async function ensurePostsDir() {
  await mkdir(POSTS_DIR, { recursive: true });
}

// ─── Arvow API client ─────────────────────────────────────────────────────────

/**
 * Submit a batch of keywords to Arvow for content generation.
 *
 * @param {object} opts
 * @param {Array<{keyword: string, title?: string}>} opts.keywords
 * @param {string} opts.webhookUrl  — your public URL that Arvow will POST articles to
 * @param {object} [opts.formula]  — overrides/extensions to the base formula
 * @returns {Promise<{batchId: string}>}
 */
export async function submitArvowBatch({ keywords, webhookUrl, formula = {} }) {
  const apiKey = process.env.ARVOW_API_KEY;
  if (!apiKey) throw new Error('ARVOW_API_KEY not set in environment');

  const body = {
    webhookUrl,
    formula: {
      entries: keywords.map(k =>
        typeof k === 'string' ? { keyword: k } : k
      ),
      languageCode: 'en',
      countryCode:  'us',
      serp:         true,   // pull live top-10 SERP results for each keyword
      creativity:   0.2,    // slightly factual — good for SEO content
      bold:         true,
      italics:      true,
      tables:       true,
      lists:        true,
      ...formula,
    },
  };

  const res = await fetch(`${ARVOW_BASE}/api/v1/batch`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type':  'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Arvow API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return { batchId: data.id || data.batchId || data.batch_id };
}

/**
 * Process an incoming Arvow webhook payload and save the article.
 *
 * Arvow webhook shape:
 *   id, title, contentHTML, content_markdown, metadescription,
 *   thumbnail, thumbnail_alt_text, keyword_seed, language_code
 *
 * @param {object} payload — raw webhook body from Arvow
 * @param {object} [brandContext] — brand name, hue, accent hue, nav CTA for template tokens
 * @returns {Promise<{slug: string, path: string}>}
 */
export async function handleArvowWebhook(payload, brandContext = {}, customPostsDir = null) {
  const dir = customPostsDir || POSTS_DIR;
  await mkdir(dir, { recursive: true });

  const {
    id,
    title,
    contentHTML,
    content_markdown,
    metadescription,
    thumbnail,
    thumbnail_alt_text,
    keyword_seed,
    language_code = 'en',
  } = payload;

  const slug = slugify(title || keyword_seed || id);
  const now  = new Date();

  // Estimate reading time (avg 238 words/min)
  const wordCount   = (contentHTML || '').replace(/<[^>]+>/g, '').split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 238));

  const article = {
    id,
    slug,
    title,
    contentHTML,
    content_markdown,
    metadescription,
    thumbnail,
    thumbnail_alt_text,
    keyword_seed,
    language_code,
    readingTime,
    publishedAt: now.toISOString(),
    publishedAtDisplay: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  };

  // Persist article JSON
  const jsonPath = join(dir, `${slug}.json`);
  await writeFile(jsonPath, JSON.stringify(article, null, 2));

  // Render to HTML using the detail template
  const html = await renderDetailPage(article, brandContext, brandContext._brandStyles || null);
  const htmlPath = join(dir, `${slug}.html`);
  await writeFile(htmlPath, html);

  return { slug, jsonPath, htmlPath };
}

/**
 * List all saved articles (newest first).
 */
export async function listPosts() {
  await ensurePostsDir();
  const { readdir } = await import('fs/promises');
  const files = (await readdir(POSTS_DIR)).filter(f => f.endsWith('.json'));
  const posts = await Promise.all(
    files.map(f => readFile(join(POSTS_DIR, f), 'utf8').then(JSON.parse))
  );
  return posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

/**
 * Get a single saved article by slug.
 */
export async function getPost(slug) {
  const jsonPath = join(POSTS_DIR, `${slug}.json`);
  const raw = await readFile(jsonPath, 'utf8').catch(() => null);
  return raw ? JSON.parse(raw) : null;
}

// ─── Brand styles loader ──────────────────────────────────────────────────────

async function loadBrandStyles(customPath = null) {
  try {
    const path = customPath || join(__dirname, '../data/brand-styles.json');
    const raw = await readFile(path, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null; // no homepage redesign done yet — fall back to template defaults
  }
}

// ─── Template renderer ────────────────────────────────────────────────────────

/**
 * Inject an article into the blog-detail.html template.
 * Pass brandStyles directly to skip the file lookup (for multi-site pipelines).
 */
async function renderDetailPage(article, brand = {}, brandStyles = undefined) {
  const templatePath = join(__dirname, '../templates/blog-detail.html');
  let html = await readFile(templatePath, 'utf8');
  if (brandStyles === undefined) brandStyles = await loadBrandStyles();

  const tokens = {
    '{{BRAND_NAME}}':        brand.name        || 'Brand',
    '{{NAV_CTA}}':           brand.navCta       || 'Get Started',
    '{{BRAND_HUE}}':         brand.hue          || '240',
    '{{ACCENT_HUE}}':        brand.accentHue    || '160',
    '{{POST_TITLE}}':        article.title      || '',
    '{{POST_META_DESC}}':    article.metadescription || '',
    '{{POST_TAG}}':          article.keyword_seed   || 'Article',
    '{{POST_KEYWORD}}':      article.keyword_seed   || '',
    '{{POST_AUTHOR}}':       brand.author       || brand.name || 'The Team',
    '{{AUTHOR_AVATAR}}':     brand.authorAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.author || 'Team')}&background=random`,
    '{{AUTHOR_ROLE}}':       brand.authorRole   || 'Content Team',
    '{{AUTHOR_BIO}}':        brand.authorBio    || `The ${brand.name || ''} team writes about industry trends, tips, and insights to help you succeed.`,
    '{{POST_DATE_ISO}}':     article.publishedAt,
    '{{POST_DATE}}':         article.publishedAtDisplay,
    '{{POST_READ_TIME}}':    String(article.readingTime),
    '{{POST_THUMBNAIL}}':    article.thumbnail  || '',
    '{{POST_THUMBNAIL_ALT}}': article.thumbnail_alt_text || article.title || '',
    '{{POST_IMAGE_CAPTION}}': '',
    '{{POST_CONTENT_HTML}}': article.contentHTML || '',
    '{{YEAR}}':              String(new Date().getFullYear()),
    '<!-- RELATED_POSTS_PLACEHOLDER -->': buildRelatedPostsHtml([]),
  };

  for (const [token, value] of Object.entries(tokens)) {
    html = html.replaceAll(token, value);
  }

  if (brandStyles) html = injectBrandStylesIntoPage(html, brandStyles);
  return html;
}

/**
 * Build the listing page HTML for all posts (populates blog-listing.html).
 */
export async function renderListingPage(posts, brand = {}) {
  const templatePath = join(__dirname, '../templates/blog-listing.html');
  let html = await readFile(templatePath, 'utf8');
  const brandStyles = await loadBrandStyles();

  const [featured, ...rest] = posts;

  const tokens = {
    '{{BRAND_NAME}}':    brand.name    || 'Brand',
    '{{NAV_CTA}}':       brand.navCta  || 'Get Started',
    '{{BRAND_HUE}}':     brand.hue     || '240',
    '{{ACCENT_HUE}}':    brand.accentHue || '160',
    '{{BLOG_META_DESC}}': brand.blogDesc || 'Insights, tips, and resources from our team.',
    '{{YEAR}}':          String(new Date().getFullYear()),

    // Featured post
    '{{FEATURED_IMAGE}}':     featured?.thumbnail || '',
    '{{FEATURED_IMAGE_ALT}}': featured?.thumbnail_alt_text || '',
    '{{FEATURED_TAG}}':       featured?.keyword_seed || 'Featured',
    '{{FEATURED_TITLE}}':     featured?.title || '',
    '{{FEATURED_EXCERPT}}':   featured?.metadescription || '',
    '{{FEATURED_SLUG}}':      featured?.slug || '',
    '{{FEATURED_AUTHOR}}':    brand.author || brand.name || 'The Team',
    '{{FEATURED_DATE}}':      featured?.publishedAtDisplay || '',
    '{{FEATURED_READ_TIME}}': String(featured?.readingTime || 5),

    // Tags
    '<!-- TAGS_PLACEHOLDER -->': buildTagsHtml(posts),

    // Post cards
    '<!-- POST_CARDS_PLACEHOLDER -->': rest.map(buildPostCardHtml).join('\n'),
  };

  for (const [token, value] of Object.entries(tokens)) {
    html = html.replaceAll(token, value);
  }

  if (brandStyles) html = injectBrandStylesIntoPage(html, brandStyles);
  return html;
}

function buildTagsHtml(posts) {
  const tags = [...new Set(posts.map(p => p.keyword_seed).filter(Boolean))].slice(0, 8);
  return tags.map(t =>
    `<button class="tag" data-tag="${escHtml(t)}">${escHtml(t)}</button>`
  ).join('\n');
}

function buildPostCardHtml(post) {
  return `
<article class="post-card" data-tag="${escHtml(post.keyword_seed || '')}">
  <div class="post-card__img-wrap">
    <a href="/blog/${escHtml(post.slug)}">
      <img class="post-card__img" src="${escHtml(post.thumbnail || '')}" alt="${escHtml(post.thumbnail_alt_text || post.title || '')}" loading="lazy">
    </a>
  </div>
  <p class="post-card__tag">${escHtml(post.keyword_seed || 'Article')}</p>
  <h2 class="post-card__title"><a href="/blog/${escHtml(post.slug)}">${escHtml(post.title || '')}</a></h2>
  <p class="post-card__excerpt">${escHtml(post.metadescription || '')}</p>
  <div class="post-card__meta">
    <span>${escHtml(post.publishedAtDisplay || '')}</span>
    <span class="post-card__meta-dot">●</span>
    <span>${escHtml(String(post.readingTime || 5))} min read</span>
  </div>
</article>`.trim();
}

function buildRelatedPostsHtml(posts) {
  if (!posts.length) return '<!-- no related posts yet -->';
  return posts.slice(0, 3).map(buildPostCardHtml).join('\n');
}

// ─── Competitor scraper ───────────────────────────────────────────────────────

/**
 * Scrape a competitor's blog to surface their top keywords/topics.
 *
 * Strategy (in priority order):
 *  1. Try XML sitemap (/sitemap.xml, /sitemap_index.xml, /blog-sitemap.xml)
 *  2. Fall back to crawling their /blog page and extracting post links + titles
 *  3. Derive keyword candidates from headings, titles, and URL slugs
 *
 * @param {string} competitorUrl — e.g. "https://competitor.com"
 * @param {number} [limit=20]   — max keywords to return
 * @returns {Promise<Array<{keyword: string, source: string, url: string}>>}
 */
export async function scrapeCompetitorKeywords(competitorUrl, limit = 20) {
  const base = new URL(competitorUrl).origin;
  let keywords = [];

  // Try sitemap first (cheaper than full browser)
  try {
    keywords = await extractFromSitemap(base, limit);
  } catch {
    // sitemap not available or unparseable
  }

  // Fall back to Puppeteer blog crawl
  if (keywords.length < 5) {
    try {
      const blogKeywords = await extractFromBlog(base, limit);
      keywords = [...keywords, ...blogKeywords];
    } catch {
      // best-effort
    }
  }

  // Deduplicate and score
  const seen = new Set();
  return keywords
    .filter(k => {
      if (!k.keyword || seen.has(k.keyword.toLowerCase())) return false;
      seen.add(k.keyword.toLowerCase());
      return true;
    })
    .slice(0, limit);
}

async function extractFromSitemap(base, limit) {
  const sitemapUrls = [
    `${base}/sitemap.xml`,
    `${base}/sitemap_index.xml`,
    `${base}/blog-sitemap.xml`,
    `${base}/post-sitemap.xml`,
    `${base}/sitemap/`,
  ];

  for (const url of sitemapUrls) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;
      const xml = await res.text();
      if (!xml.includes('<url>') && !xml.includes('<sitemap>')) continue;

      const $ = cheerio.load(xml, { xmlMode: true });

      // If it's an index, find blog-related child sitemaps
      const childSitemaps = [];
      $('sitemap loc').each((_, el) => {
        const loc = $(el).text().trim();
        if (/blog|post|article/i.test(loc)) childSitemaps.push(loc);
      });

      let locs = [];
      if (childSitemaps.length) {
        // Fetch first child sitemap
        const childRes = await fetch(childSitemaps[0], { signal: AbortSignal.timeout(8000) });
        const childXml = await childRes.text();
        const $child = cheerio.load(childXml, { xmlMode: true });
        $child('url loc').each((_, el) => locs.push($child(el).text().trim()));
      } else {
        $('url loc').each((_, el) => {
          const loc = $(el).text().trim();
          if (/blog|post|article|news/i.test(loc)) locs.push(loc);
        });
      }

      return locs.slice(0, limit).map(loc => ({
        url:     loc,
        keyword: slugToKeyword(new URL(loc).pathname),
        source:  'sitemap',
      })).filter(k => k.keyword.length > 3);
    } catch {
      continue;
    }
  }
  return [];
}

async function extractFromBlog(base, limit) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');

    // Try common blog paths
    const blogPaths = ['/blog', '/articles', '/resources', '/news', '/insights', '/posts'];
    let found = false;
    for (const path of blogPaths) {
      try {
        await page.goto(`${base}${path}`, { waitUntil: 'networkidle2', timeout: 15000 });
        const url = page.url();
        if (!url.includes('404') && !url.includes('error')) { found = true; break; }
      } catch { continue; }
    }
    if (!found) return [];

    const html = await page.content();
    const $ = cheerio.load(html);

    const results = [];
    // Extract post links — look for article cards, post links, etc.
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href') || '';
      const text = $(el).text().trim();
      let url;
      try { url = new URL(href, base).href; } catch { return; }
      if (!url.startsWith(base)) return;
      if (!/\/blog\/|\/post\/|\/article\/|\/news\/|\/insight\//i.test(url)) return;
      if (text.length < 10 || text.length > 120) return;

      results.push({
        url,
        keyword: text,
        source: 'blog-crawl',
      });
    });

    // Also grab headings on the page as keyword candidates
    $('h1, h2, h3').each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 10 && text.length < 100) {
        results.push({ url: base, keyword: text, source: 'heading' });
      }
    });

    return results.slice(0, limit);
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function slugToKeyword(pathname) {
  // /blog/2024/how-to-grow-cannabis-at-home → "how to grow cannabis at home"
  const parts = pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1] || '';
  return last.replace(/-/g, ' ').replace(/\.(html?|php)$/i, '').trim();
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
