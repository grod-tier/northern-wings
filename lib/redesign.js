import './env.js';
import Anthropic from '@anthropic-ai/sdk';
import puppeteer from 'puppeteer';
import { readFile, writeFile, unlink, mkdir } from 'fs/promises';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Use /tmp directly — os.tmpdir() on macOS returns /var/folders which impeccable can't access
const TMPDIR = '/tmp';

const execFileAsync = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));

let _anthropic;
function getClient() {
  if (!_anthropic) _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return _anthropic;
}

// ─── Render HTML → screenshot via Puppeteer ───────────────────────────────────

async function renderHtmlToScreenshot(html) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setContent(html, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.addStyleTag({
      content: '* { animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important; }',
    });
    const buf = await page.screenshot({ type: 'webp', quality: 85, fullPage: false });
    return buf.toString('base64');
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

// ─── Run impeccable CLI scanner on HTML string ────────────────────────────────

async function runImpeccableScanner(html) {
  const tmpFile = join(TMPDIR, `impeccable-scan-${Date.now()}.html`);
  try {
    await writeFile(tmpFile, html, 'utf8');

    // Resolve the local impeccable bin path
    const impeccableBin = join(__dirname, '../node_modules/.bin/impeccable');

    // --fast = regex-only mode (no jsdom), works reliably on temp files
    // exit code 2 = findings found (normal), exit code 0 = clean — both produce stdout JSON
    // impeccable writes JSON findings to stderr with exit code 2 (findings) or 0 (clean)
    const result = await execFileAsync(impeccableBin, ['detect', '--fast', '--json', tmpFile], {
      timeout: 30000,
      encoding: 'utf8',
    }).catch(err => err); // don't throw — capture the error object

    // findings come from stderr (impeccable's design choice)
    const rawJson = (result.stderr || result.stdout || '').trim();
    const findings = JSON.parse(rawJson || '[]');

    // Deduplicate by antipattern+snippet and summarize
    const seen = new Set();
    const deduped = findings.filter(f => {
      const key = `${f.antipattern}|${f.snippet}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return deduped;
  } finally {
    await unlink(tmpFile).catch(() => {});
  }
}

function formatScannerFindings(findings) {
  if (!findings.length) return 'No anti-patterns detected by the automated scanner.';
  const grouped = {};
  for (const f of findings) {
    grouped[f.name] = grouped[f.name] || [];
    grouped[f.name].push(f.snippet);
  }
  return Object.entries(grouped)
    .map(([name, snippets]) => `• ${name} (${snippets.length}x): ${snippets.slice(0, 2).join(' | ')}`)
    .join('\n');
}

// ─── Load critique skill + reference docs ────────────────────────────────────

async function loadCritiqueSkill() {
  const skillsDir = join(__dirname, '../skills/critique');
  const [skill, heuristics, personas, cogLoad] = await Promise.all([
    readFile(join(skillsDir, 'SKILL.md'), 'utf8'),
    readFile(join(skillsDir, 'reference/heuristics-scoring.md'), 'utf8'),
    readFile(join(skillsDir, 'reference/personas.md'), 'utf8'),
    readFile(join(skillsDir, 'reference/cognitive-load.md'), 'utf8'),
  ]);

  // Inline the reference docs so the LLM has them available
  // (The SKILL.md references them as [heuristics-scoring](reference/...) etc.)
  return skill
    .replace(/\[heuristics-scoring\]\(reference\/heuristics-scoring\.md\)/g, 'the heuristics scoring guide below')
    .replace(/\[personas\]\(reference\/personas\.md\)/g, 'the personas guide below')
    .replace(/\[cognitive-load\]\(reference\/cognitive-load\.md\)/g, 'the cognitive load guide below')
    + `\n\n---\n## REFERENCE: Heuristics Scoring\n${heuristics}`
    + `\n\n---\n## REFERENCE: Personas\n${personas}`
    + `\n\n---\n## REFERENCE: Cognitive Load\n${cogLoad}`;
}

// ─── Shared content summary builder ──────────────────────────────────────────

function buildContentSummary(content, businessName) {
  return `
Business: ${businessName || content.title}
Website: ${content.url}
Meta description: ${content.metaDesc}
Page title: ${content.title}
Navigation: ${content.navLinks.join(', ')}
Headings: ${content.headings.map(h => `[${h.tag}] ${h.text}`).join(' | ')}
Body excerpts: ${content.paragraphs.slice(0, 5).join(' ... ')}
CTAs: ${content.ctaText.join(', ')}
Original site colors (USE THESE — preserve or minimally improve, do NOT invent a new palette): ${content.colors.slice(0, 15).join(', ')}
Font links: ${content.fontLinks.join(', ')}
Real site images (USE THESE as <img src="..."> — do NOT use picsum.photos placeholders): ${(content.imageUrls || []).slice(0, 15).join(', ')}
`.trim();
}

// ─── Main export ─────────────────────────────────────────────────────────────

export async function redesignHomepage({ screenshot, content, businessName, onToken } = {}) {
  const skillPrompt = await readFile(join(__dirname, '../skills/design-skill.md'), 'utf8');
  const contentSummary = buildContentSummary(content, businessName);

  // ─── PASS 1: Generate initial design ────────────────────────────────────────
  onToken?.(0, 'generating');

  let pass1Html = '';
  let pass1Usage;
  const stream1 = getClient().messages.stream({
    model: 'claude-opus-4-7',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: skillPrompt },
        { type: 'text', text: `Here is a screenshot of the current homepage and extracted content. Analyze the existing design, then produce a complete redesigned homepage as a single HTML file.\n\n${contentSummary}` },
        { type: 'image', source: { type: 'base64', media_type: 'image/webp', data: screenshot } },
        { type: 'text', text: 'Now produce the complete redesigned HTML file. Output ONLY the HTML — no explanation, no markdown fences, no commentary. Start with <!DOCTYPE html>.' },
      ],
    }],
  });

  for await (const chunk of stream1) {
    if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
      pass1Html += chunk.delta.text;
      onToken?.(pass1Html.length, 'generating');
    }
  }
  pass1Usage = (await stream1.finalMessage()).usage;

  // ─── PASS 2: Run impeccable CLI scanner ──────────────────────────────────────
  onToken?.(0, 'scanning');
  const scannerFindings = await runImpeccableScanner(pass1Html);
  const scannerSummary = formatScannerFindings(scannerFindings);

  // ─── PASS 3: Revise based on scanner findings ────────────────────────────────
  onToken?.(0, 'revising');

  let finalHtml = '';
  let pass2Usage;
  const stream2 = getClient().messages.stream({
    model: 'claude-opus-4-7',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: skillPrompt },
        { type: 'text', text: `Here is the original site and a first-pass redesign. The impeccable automated scanner found these anti-patterns to fix. Produce a revised version that addresses every issue.\n\n${contentSummary}` },
        { type: 'image', source: { type: 'base64', media_type: 'image/webp', data: screenshot } },
        { type: 'text', text: `AUTOMATED SCANNER (impeccable detect) FINDINGS:\n${scannerSummary}` },
        { type: 'text', text: 'FIRST PASS REDESIGN (revise this):\n\n' + pass1Html },
        { type: 'text', text: 'Now produce the complete REVISED redesigned HTML file. Output ONLY the HTML — no explanation, no markdown fences, no commentary. Start with <!DOCTYPE html>.' },
      ],
    }],
  });

  for await (const chunk of stream2) {
    if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
      finalHtml += chunk.delta.text;
      onToken?.(finalHtml.length, 'revising');
    }
  }
  pass2Usage = (await stream2.finalMessage()).usage;

  const usage = {
    input_tokens: (pass1Usage?.input_tokens || 0) + (pass2Usage?.input_tokens || 0),
    output_tokens: (pass1Usage?.output_tokens || 0) + (pass2Usage?.output_tokens || 0),
  };

  const finalHtmlWithNav = injectBlogNavLink(finalHtml);

  // Extract and persist brand styles so blog templates can match the homepage
  const { extractBrandStyles } = await import('./brandStyles.js');
  const brandStyles = extractBrandStyles(finalHtmlWithNav);
  await mkdir(join(__dirname, '../data'), { recursive: true });
  await writeFile(join(__dirname, '../data/brand-styles.json'), JSON.stringify(brandStyles, null, 2));

  // Always write to public/index.html so / serves the correct homepage
  await mkdir(join(__dirname, '../public'), { recursive: true });
  await writeFile(join(__dirname, '../public/index.html'), finalHtmlWithNav);

  return { html: finalHtmlWithNav, scannerFindings, pass1Html, usage, brandStyles };
}

// ─── Blog nav injection ───────────────────────────────────────────────────────

/**
 * Ensure the redesigned homepage always has a Blog link in the nav.
 * Searches for an existing blog link first — if found, leaves it alone.
 * If not found, appends one to the last <nav> or <ul> inside a <nav>.
 */
function injectBlogNavLink(html) {
  // Already has a blog link — nothing to do
  if (/href=["'][^"']*\/blog["']/i.test(html)) return html;

  const blogLink = '<a href="/blog">Blog</a>';
  const blogLi   = '<li><a href="/blog">Blog</a></li>';

  // Prefer inserting a <li> before </ul> inside a <nav>
  const navUlClose = html.match(/<nav[\s\S]*?<ul[\s\S]*?(<\/ul>)/i);
  if (navUlClose) {
    return html.replace(navUlClose[1], `  ${blogLi}\n    </ul>`);
  }

  // Otherwise insert bare <a> before </nav>
  const navClose = html.match(/<\/nav>/i);
  if (navClose) {
    return html.replace(navClose[0], `  ${blogLink}\n  </nav>`);
  }

  // Last resort — nothing recognisable, return as-is
  return html;
}
