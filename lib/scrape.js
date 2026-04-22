import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

export async function scrapeHomepage(url) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    const screenshotBuffer = await page.screenshot({ type: 'webp', quality: 85, fullPage: false });
    const screenshot = screenshotBuffer.toString('base64');

    const html = await page.content();
    const $ = cheerio.load(html);
    $('script, style, noscript, svg, iframe, [aria-hidden="true"]').remove();

    const title = $('title').text().trim() || $('h1').first().text().trim();
    const metaDesc = $('meta[name="description"]').attr('content') || '';

    const headings = [];
    $('h1, h2, h3').each((_, el) => {
      const text = $(el).text().trim();
      if (text) headings.push({ tag: el.tagName, text });
    });

    const paragraphs = [];
    $('p').each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 40) paragraphs.push(text);
    });

    const navLinks = [];
    $('nav a, header a').each((_, el) => {
      const text = $(el).text().trim();
      if (text && text.length < 40) navLinks.push(text);
    });

    // Extract image URLs from the full HTML (before script/style removal)
    const fullHtml = await page.content();
    const $full = cheerio.load(fullHtml);
    const imageUrls = [];
    $full('img[src]').each((_, el) => {
      const src = $full(el).attr('src');
      if (src && !src.startsWith('data:') && !src.includes('placeholder')) {
        try { imageUrls.push(new URL(src, url).href); } catch {}
      }
    });
    // Also grab srcset first candidate
    $full('img[srcset]').each((_, el) => {
      const srcset = $full(el).attr('srcset') || '';
      const first = srcset.split(',')[0]?.trim().split(/\s+/)[0];
      if (first && !first.startsWith('data:')) {
        try { imageUrls.push(new URL(first, url).href); } catch {}
      }
    });

    // Extract colors: CSS custom properties + hex/rgb
    const styleContent = [];
    $('style').each((_, el) => styleContent.push($(el).html()));
    const allStyles = styleContent.join(' ');
    const cssVarMatches = allStyles.match(/--[\w-]+:\s*(?:#[0-9a-f]{3,8}|rgb[a]?\([^)]+\)|oklch\([^)]+\)|hsl[a]?\([^)]+\))/gi) || [];
    const colorMatches = allStyles.match(/#[0-9a-f]{3,6}\b|rgb\([^)]+\)|hsl\([^)]+\)/gi) || [];
    const colors = [...new Set([...cssVarMatches, ...colorMatches])].slice(0, 30);

    const fontLinks = [];
    $('link[href*="fonts"]').each((_, el) => fontLinks.push($(el).attr('href')));

    const ctaText = [];
    $('a.btn, a.button, button, .cta, [class*="btn"], [class*="cta"]').each((_, el) => {
      const text = $(el).text().trim();
      if (text && text.length < 60) ctaText.push(text);
    });

    return {
      screenshot,
      content: {
        title,
        metaDesc,
        headings: headings.slice(0, 15),
        paragraphs: paragraphs.slice(0, 10),
        navLinks: [...new Set(navLinks)].slice(0, 10),
        colors,
        fontLinks,
        ctaText: [...new Set(ctaText)].slice(0, 6),
        imageUrls: [...new Set(imageUrls)].slice(0, 20),
        url,
      },
    };
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}
