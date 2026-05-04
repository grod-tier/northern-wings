#!/usr/bin/env node
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
config({ path: join(dirname(fileURLToPath(import.meta.url)), '.env'), override: true });
import { input, select, confirm } from '@inquirer/prompts';
import { createInterface } from 'readline';

const isTTY = Boolean(process.stdin.isTTY);

// Pre-read all piped lines into a queue so they're available when prompts need them
const lineQueue = [];
let linesReady = false;

async function readAllLines() {
  if (isTTY || linesReady) return;
  await new Promise(resolve => {
    const rl = createInterface({ input: process.stdin, terminal: false });
    rl.on('line', line => lineQueue.push(line.trim()));
    rl.on('close', resolve);
  });
  linesReady = true;
}

function nextLine(fallback = '') {
  return lineQueue.shift() ?? fallback;
}

async function promptInput(message, defaultVal) {
  if (isTTY) return input({ message, default: defaultVal });
  const val = nextLine(defaultVal || '');
  const suffix = defaultVal ? ` (${defaultVal})` : '';
  console.log(`  ${message}${suffix}: ${val}`);
  return val || defaultVal || '';
}

async function selectOrNumbered(message, choices) {
  if (isTTY) return select({ message, pageSize: 12, choices });
  console.log(`\n  ${message}`);
  choices.forEach((c, i) => console.log(`    ${dim(String(i + 1).padStart(2))}. ${c.name}`));
  console.log('');
  const pick = nextLine('1');
  console.log(`  Enter number: ${pick}`);
  const idx = parseInt(pick, 10) - 1;
  if (isNaN(idx) || idx < 0 || idx >= choices.length) throw new Error(`Invalid selection: "${pick}"`);
  return choices[idx].value;
}

async function confirmOrAuto(message) {
  if (isTTY) return confirm({ message, default: true });
  console.log(dim(`  ${message} → yes`));
  return true;
}
import ora from 'ora';
import chalk from 'chalk';
import { writeFile } from 'fs/promises';
import { searchBusinesses } from './lib/search.js';
import { scrapeHomepage } from './lib/scrape.js';
import { redesignHomepage } from './lib/redesign.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

const dim = chalk.dim;
const accent = chalk.hex('#8b7cf8');
const green = chalk.green;
const red = chalk.red;
const bold = chalk.bold;

function stars(rating) {
  if (!rating) return dim('no rating');
  const filled = Math.round(rating);
  return chalk.yellow('★'.repeat(filled)) + chalk.dim('★'.repeat(5 - filled)) + chalk.white(` ${rating}`);
}

function domain(url) {
  try { return new URL(url).hostname.replace('www.', ''); }
  catch { return url; }
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function printHeader() {
  console.log('');
  console.log(bold('  SiteRedesigner') + dim(' — powered by Claude + Impeccable'));
  console.log(dim('  ────────────────────────────────────'));
  console.log('');
}

// ── Main flow ─────────────────────────────────────────────────────────────────

async function main() {
  await readAllLines();
  printHeader();

  // 1. Collect inputs
  const zipcode = await promptInput('Zip code');
  const niche = await promptInput('Business niche');

  console.log('');

  // 2. Search
  const spinner = ora({ text: `Searching for ${bold(niche)} in ${bold(zipcode)}…`, color: 'magenta' }).start();
  let businesses;
  try {
    businesses = await searchBusinesses(zipcode.trim(), niche.trim());
    spinner.succeed(`Found ${green(businesses.length)} businesses with websites`);
  } catch (err) {
    spinner.fail(red(err.message));
    process.exit(1);
  }

  if (businesses.length === 0) {
    console.log(dim('\n  No businesses with websites found. Try a different niche or zip code.\n'));
    process.exit(0);
  }

  console.log('');

  // 3. Select business
  const chosen = await selectOrNumbered('Select a business to redesign:', businesses.map((b, i) => ({
    value: b,
    name: [
      bold(b.name.padEnd(36)),
      stars(b.rating).padEnd(20),
      accent(domain(b.website)),
    ].join('  '),
    short: b.name,
  })));

  console.log('');
  console.log(dim('  ') + accent('✦') + '  ' + bold(chosen.name));
  console.log(dim(`     ${chosen.address}`));
  console.log(dim(`     ${chosen.website}`));
  console.log('');

  // 4. Scrape
  const scrapeSpinner = ora({ text: 'Capturing homepage screenshot & content…', color: 'cyan' }).start();
  let scraped;
  try {
    scraped = await scrapeHomepage(chosen.website);
    scrapeSpinner.succeed(`Scraped ${dim(domain(chosen.website))}`);
    console.log(dim(`     Title: ${scraped.content.title}`));
    console.log(dim(`     Headings found: ${scraped.content.headings.length} | CTAs: ${scraped.content.ctaText.length}`));
  } catch (err) {
    scrapeSpinner.fail(red(`Scrape failed: ${err.message}`));
    process.exit(1);
  }

  console.log('');

  // 5. Confirm redesign
  const go = await confirmOrAuto(`Redesign homepage for ${bold(chosen.name)}?`);
  if (!go) {
    console.log(dim('\n  Aborted.\n'));
    process.exit(0);
  }

  console.log('');

  // 6. Redesign — 4-phase pipeline with live progress
  const phaseLabels = {
    generating: { text: 'Generating v1 design…',         color: 'magenta' },
    scanning:   { text: 'Running impeccable scanner…',   color: 'cyan'    },
    revising:   { text: 'Revising based on scan…',       color: 'magenta' },
  };

  const redesignSpinner = ora({ text: phaseLabels.generating.text, color: 'magenta' }).start();
  let currentPhase = 'generating';

  let result;
  try {
    result = await redesignHomepage({
      screenshot: scraped.screenshot,
      content: scraped.content,
      businessName: chosen.name,
      onToken: (charCount, phase) => {
        if (phase && phase !== currentPhase) {
          currentPhase = phase;
          const label = phaseLabels[phase];
          if (label) {
            redesignSpinner.color = label.color;
            redesignSpinner.text = label.text;
          }
        } else if (phase === 'generating' || phase === 'revising') {
          redesignSpinner.text = `${phaseLabels[currentPhase]?.text.replace('…', '')} (${(charCount / 1000).toFixed(1)}k chars)…`;
        }
      },
    });
    redesignSpinner.succeed(green('Redesign complete — 2-pass critique applied'));
  } catch (err) {
    redesignSpinner.fail(red(`Redesign failed: ${err.message}`));
    process.exit(1);
  }

  // 7. Save output
  console.log('');
  const defaultFilename = `${slugify(chosen.name)}-redesign.html`;
  const filename = await promptInput('Save as', defaultFilename);

  const outPath = filename.trim() || defaultFilename;
  await writeFile(outPath, result.html, 'utf8');

  console.log('');
  console.log(green('  ✓') + '  Saved to ' + bold(outPath));
  if (result.usage) {
    console.log(dim(`     Tokens used — input: ${result.usage.input_tokens.toLocaleString()}, output: ${result.usage.output_tokens.toLocaleString()}`));
  }
  console.log('');
  console.log(dim('  Open in your browser:'));
  console.log(dim('  ') + `open ${outPath}`);
  console.log('');
}

main()
  .catch(err => { console.error(red('\n  Error: ') + err.message + '\n'); process.exit(1); })
  .finally(() => {});
