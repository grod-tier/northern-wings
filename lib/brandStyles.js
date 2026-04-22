/**
 * lib/brandStyles.js
 *
 * Extracts the nav, CSS, and design tokens from a generated homepage HTML
 * and injects them verbatim into blog templates for visual consistency.
 *
 * Strategy:
 *  - Pull the exact <header>/<nav> HTML from the homepage
 *  - Pull all <style> blocks and Google Font <link>s from the homepage <head>
 *  - In blog pages: replace the generic blog nav with the real homepage nav
 *  - In blog pages: inject homepage styles into <head> so nav classes resolve
 */

import * as cheerio from 'cheerio';

// ─── Extraction ───────────────────────────────────────────────────────────────

/**
 * Extract everything needed to replicate the nav + brand on blog pages.
 */
export function extractBrandStyles(homepageHtml) {
  const $ = cheerio.load(homepageHtml);

  // ── Google Font links ──────────────────────────────────────────────────
  const fontLinks = [];
  $('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]').each((_, el) => {
    fontLinks.push($.html(el));
  });

  // ── All <style> content from <head> ───────────────────────────────────
  const styleBlocks = [];
  $('head style').each((_, el) => {
    styleBlocks.push($(el).html() || '');
  });
  const homepageCSS = styleBlocks.join('\n');

  // ── CSS custom properties (:root) ─────────────────────────────────────
  const cssVars = {};
  const rootRe = /:root\s*\{([^}]+)\}/gi;
  let m;
  while ((m = rootRe.exec(homepageCSS)) !== null) {
    const varRe = /--([\w-]+)\s*:\s*([^;]+);/g;
    let v;
    while ((v = varRe.exec(m[1])) !== null) {
      cssVars[`--${v[1]}`] = v[2].trim();
    }
  }

  // ── Nav HTML — extract the real <header> or first top-level <nav> ─────
  let navHtml = '';

  // Try <header> first (most common pattern Claude uses)
  const headerEl = $('body > header').first();
  if (headerEl.length) {
    // Make sure Blog link is present
    if (!headerEl.html()?.toLowerCase().includes('/blog')) {
      // Append Blog link to the primary nav inside the header
      const innerNav = headerEl.find('nav a').last();
      if (innerNav.length) {
        innerNav.after('<a href="/blog">Blog</a>');
      }
    }
    // Logo should always navigate to /
    headerEl.find('a').first().attr('href', '/');
    navHtml = $.html(headerEl);
  }

  // Fall back to first <nav> at body level
  if (!navHtml) {
    const navEl = $('body > nav').first();
    if (navEl.length) {
      if (!navEl.html()?.toLowerCase().includes('/blog')) {
        navEl.find('a').last().after('<a href="/blog">Blog</a>');
      }
      navEl.find('a').first().attr('href', '/');
      navHtml = $.html(navEl);
    }
  }

  // Fall back to first nav anywhere in body
  if (!navHtml) {
    const anyNav = $('nav').first();
    if (anyNav.length) {
      anyNav.find('a').first().attr('href', '/');
      navHtml = $.html(anyNav);
    }
  }

  // ── Key color tokens ──────────────────────────────────────────────────
  const primaryColor = cssVars['--color-primary'] || cssVars['--primary']
    || cssVars['--brand-primary'] || cssVars['--magenta']
    || cssVars['--accent'] || cssVars['--color-accent'] || null;

  const bgColor = cssVars['--bg'] || cssVars['--surface'] || cssVars['--surface-0']
    || cssVars['--background'] || cssVars['--color-bg'] || null;

  const textColor = cssVars['--ink'] || cssVars['--text'] || cssVars['--text-primary']
    || cssVars['--color-text'] || cssVars['--foreground'] || null;

  return {
    fontLinks,
    homepageCSS,
    navHtml,
    cssVars,
    primaryColor,
    bgColor,
    textColor,
  };
}

// ─── Injection ────────────────────────────────────────────────────────────────

/**
 * Inject the homepage nav + styles into a blog page.
 *
 * 1. Adds homepage Google Font <link>s to <head>
 * 2. Adds homepage <style> content to <head> (scoped to avoid conflicts)
 * 3. Replaces the blog template's <nav> with the homepage nav HTML
 */
export function injectBrandStylesIntoPage(pageHtml, brandStyles) {
  const { fontLinks, homepageCSS, navHtml, cssVars, bgColor, textColor } = brandStyles;

  let html = pageHtml;

  // ── 1. Inject font links into <head> ──────────────────────────────────
  if (fontLinks.length) {
    const linkTags = fontLinks.join('\n  ');
    html = html.replace('</head>', `  ${linkTags}\n</head>`);
  }

  // ── 2. Inject homepage CSS into <head> ────────────────────────────────
  //    Wrap in a marker so we can identify it. The homepage CSS classes
  //    (e.g. .site-header, .primary-nav, .logo) don't conflict with the
  //    blog template's classes (.article-body, .toc, etc.).
  if (homepageCSS) {
    const styleTag = `  <style id="homepage-nav-styles">\n${homepageCSS}\n  </style>`;
    html = html.replace('</head>', `${styleTag}\n</head>`);
  }

  // ── 3. Override blog template's :root with homepage color tokens ──────
  const overrides = [':root {'];
  if (bgColor)    overrides.push(`  --surface-0: ${bgColor}; --surface-1: ${bgColor};`);
  if (textColor)  overrides.push(`  --text-primary: ${textColor};`);
  // Forward all homepage CSS vars so var() references resolve correctly
  for (const [key, val] of Object.entries(cssVars)) {
    overrides.push(`  ${key}: ${val};`);
  }

  // ── Font bridging: map blog template font vars → homepage font tokens ──
  // Blog template uses --font-display / --font-body / --font-ui.
  // Homepage may use different names (--serif, --sans, --display, etc.).
  // Build a lookup of homepage font vars by their likely role.
  const hp = cssVars;
  const hpDisplayFont = hp['--display'] || hp['--serif'] || hp['--font-display'] || null;
  const hpBodyFont    = hp['--sans']    || hp['--body']  || hp['--font-body']    || null;
  const hpUiFont      = hp['--ui']      || hp['--sans']  || hp['--font-ui']      || null;

  if (hpDisplayFont) overrides.push(`  --font-display: ${hpDisplayFont};`);
  if (hpBodyFont)    overrides.push(`  --font-body: ${hpBodyFont};`);
  if (hpUiFont)      overrides.push(`  --font-ui: ${hpUiFont};`);

  overrides.push('}');
  const overrideStyle = `  <style id="brand-token-overrides">\n${overrides.join('\n')}\n  </style>`;
  html = html.replace('</head>', `${overrideStyle}\n</head>`);

  // ── 4. Replace blog nav with homepage nav ─────────────────────────────
  if (navHtml) {
    // Match the blog template's <nav class="nav">...</nav> block
    // Use a greedy match up to the first </nav> after <nav class="nav"
    const blogNavRe = /<nav\s+class="nav"[\s\S]*?<\/nav>/i;
    if (blogNavRe.test(html)) {
      html = html.replace(blogNavRe, navHtml);
    } else {
      // Fallback: insert homepage nav right after <body>
      html = html.replace('<body>', `<body>\n${navHtml}`);
    }
  }

  return html;
}
