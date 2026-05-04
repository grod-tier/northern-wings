/**
 * lib/keywords.js
 *
 * Keyword research pipeline — entirely free, no paid API keys required.
 *
 * Pipeline:
 *  1. Claude generates seed keywords from business context (niche, location, content)
 *  2. Google Autocomplete + DuckDuckGo expand each seed into long-tail variants
 *  3. Google Trends surfaces related/rising queries for each seed
 *  4. Deduplicate across all sources, score by signal count + source weight
 *  5. Claude scores the final list for SEO opportunity and search intent
 *  6. Return ranked list ready to hand to Arvow
 */

import './env.js';
import Anthropic from '@anthropic-ai/sdk';
import googleTrends from 'google-trends-api';

let _anthropic;
function getClient() {
  if (!_anthropic) _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return _anthropic;
}

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ─── Step 1: Claude generates seed keywords ───────────────────────────────────

async function generateSeedKeywords({ businessName, niche, location, headings, paragraphs, competitorKeywords = [] }) {
  const competitorContext = competitorKeywords.length
    ? `\nCompetitor keywords already found:\n${competitorKeywords.slice(0, 15).map(k => `- ${k.keyword}`).join('\n')}`
    : '';

  const prompt = `You are an SEO content strategist. Given the following local business, generate the best blog keyword opportunities.

Business: ${businessName}
Niche: ${niche}
Location: ${location || 'Los Angeles, CA'}
Site headings: ${headings?.slice(0, 8).map(h => h.text).join(' | ') || 'N/A'}
Site content: ${paragraphs?.slice(0, 3).join(' ') || 'N/A'}
${competitorContext}

Generate 10 seed keywords optimized for:
- Informational search intent (how-to, guide, best, what is) — easiest to rank for
- Local relevance where appropriate (include city/region when it helps)
- Topics this business can credibly write about with authority
- A mix of: broad category terms, specific product/service terms, question-based terms

For each keyword, provide:
- keyword: the exact search query (as someone would type it in Google)
- intent: informational | commercial | local
- rationale: 1 sentence on why this will rank and convert

Output ONLY valid JSON array, no markdown:
[{"keyword":"...","intent":"...","rationale":"..."}]`;

  const msg = await getClient().messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  });

  try {
    return JSON.parse(msg.content[0].text);
  } catch {
    // Fallback: extract JSON from response if wrapped in text
    const match = msg.content[0].text.match(/\[[\s\S]*\]/);
    return match ? JSON.parse(match[0]) : [];
  }
}

// ─── Step 2a: Google Autocomplete ─────────────────────────────────────────────

async function googleAutocomplete(query) {
  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}&hl=en&gl=us`;
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data[1] || []).map(s => ({ keyword: s, source: 'google-autocomplete' }));
  } catch {
    return [];
  }
}

// ─── Step 2b: DuckDuckGo Autocomplete ────────────────────────────────────────

async function duckduckgoAutocomplete(query) {
  try {
    const url = `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`;
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data[1] || []).map(s => ({ keyword: s, source: 'duckduckgo-autocomplete' }));
  } catch {
    return [];
  }
}

// ─── Step 3: Google Trends related queries ────────────────────────────────────

async function trendsRelatedQueries(keyword) {
  try {
    const raw = await googleTrends.relatedQueries({
      keyword,
      geo: 'US',
      startTime: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // last 90 days
    });
    const data = JSON.parse(raw);
    const items = [
      ...(data?.default?.rankedList?.[0]?.rankedKeyword || []),  // top queries
      ...(data?.default?.rankedList?.[1]?.rankedKeyword || []),  // rising queries
    ];
    return items.map(i => ({
      keyword: i.query,
      source: 'google-trends',
      value: i.value,  // interest score
    }));
  } catch {
    return [];
  }
}

// ─── Step 4: Expand seeds in parallel ────────────────────────────────────────

async function expandSeeds(seeds) {
  const expanded = [];

  // Process seeds in parallel batches of 3 to be polite to Google
  const BATCH = 3;
  for (let i = 0; i < seeds.length; i += BATCH) {
    const batch = seeds.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async seed => {
      const [autocomplete, ddg, trends] = await Promise.all([
        googleAutocomplete(seed.keyword),
        duckduckgoAutocomplete(seed.keyword),
        trendsRelatedQueries(seed.keyword),
      ]);
      return [...autocomplete, ...ddg, ...trends];
    }));
    expanded.push(...results.flat());
    // Small delay between batches to avoid rate limits
    if (i + BATCH < seeds.length) {
      await new Promise(r => setTimeout(r, 800));
    }
  }

  return expanded;
}

// ─── Step 5: Deduplicate + score ──────────────────────────────────────────────

const SOURCE_WEIGHTS = {
  'google-trends':       3,  // real search signal, highest weight
  'google-autocomplete': 2,  // real Google data
  'duckduckgo-autocomplete': 1,
  'seed':                2,  // Claude-generated seeds also have weight
};

function deduplicateAndScore(seeds, expanded) {
  const map = new Map();

  const addKeyword = (kw) => {
    const key = kw.keyword.toLowerCase().trim();
    if (!key || key.length < 5) return;
    if (map.has(key)) {
      const existing = map.get(key);
      existing.score += SOURCE_WEIGHTS[kw.source] || 1;
      existing.sources.push(kw.source);
    } else {
      map.set(key, {
        keyword: kw.keyword.trim(),
        score: SOURCE_WEIGHTS[kw.source] || 1,
        sources: [kw.source],
        intent: kw.intent || null,
        rationale: kw.rationale || null,
      });
    }
  };

  // Seeds from Claude carry their intent + rationale
  seeds.forEach(s => addKeyword({ ...s, source: 'seed' }));
  expanded.forEach(kw => addKeyword(kw));

  return [...map.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, 60); // keep top 60 before LLM scoring pass
}

// ─── Step 6: Claude scores + ranks final list ─────────────────────────────────

async function scoreAndRank(candidates, { businessName, niche, location }) {
  const prompt = `You are an SEO strategist. Rank and filter these keyword candidates for a blog content strategy.

Business: ${businessName} (${niche}, ${location || 'Los Angeles, CA'})

Keyword candidates (keyword | signal score | sources):
${candidates.slice(0, 50).map((c, i) => `${i + 1}. "${c.keyword}" | score: ${c.score} | sources: ${c.sources.join(', ')}`).join('\n')}

Select the best 15 keywords for a blog content calendar. Prioritize:
1. Informational intent (how-to, guide, tips, best practices) — highest ranking potential
2. Keywords where the business has clear topical authority
3. Long-tail (3+ words) over head terms — easier to rank
4. Question-format keywords ("how to...", "what is...", "why does...") — often win featured snippets
5. Local modifiers where relevant (city/neighborhood terms)

Exclude:
- Keywords that are purely transactional ("buy", "price", "near me") — those belong on product pages, not blog posts
- Anything too broad to realistically rank for (single-word terms)
- Duplicates or near-duplicates

For each selected keyword output:
- keyword: exact phrasing
- intent: informational | local-informational | commercial-investigation
- difficulty: easy | medium | hard (your estimate)
- priority: 1-3 (1 = publish first)
- rationale: why this one, in ≤15 words

Output ONLY valid JSON array, no markdown:
[{"keyword":"...","intent":"...","difficulty":"...","priority":1,"rationale":"..."}]`;

  const msg = await getClient().messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  try {
    const text = msg.content[0].text;
    const match = text.match(/\[[\s\S]*\]/);
    return match ? JSON.parse(match[0]) : [];
  } catch {
    return candidates.slice(0, 15).map(c => ({ ...c, priority: 1, difficulty: 'unknown' }));
  }
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * Full keyword research pipeline.
 *
 * @param {object} opts
 * @param {string} opts.businessName
 * @param {string} opts.niche
 * @param {string} [opts.location]
 * @param {Array}  [opts.headings]           — from scrapeHomepage
 * @param {Array}  [opts.paragraphs]         — from scrapeHomepage
 * @param {Array}  [opts.competitorKeywords] — from scrapeCompetitorKeywords
 * @param {function} [opts.onStep]           — progress callback (stepName, detail)
 * @returns {Promise<{keywords: Array, seeds: Array}>}
 */
export async function researchKeywords({
  businessName,
  niche,
  location,
  headings = [],
  paragraphs = [],
  competitorKeywords = [],
  onStep,
}) {
  onStep?.('seeds', 'Claude generating seed keywords…');
  const seeds = await generateSeedKeywords({
    businessName, niche, location, headings, paragraphs, competitorKeywords,
  });

  onStep?.('expanding', `Expanding ${seeds.length} seeds via Google/DuckDuckGo/Trends…`);
  const expanded = await expandSeeds(seeds);

  onStep?.('scoring', `Scoring ${expanded.length + seeds.length} raw signals…`);
  const candidates = deduplicateAndScore(seeds, expanded);

  onStep?.('ranking', 'Claude ranking final keyword list…');
  const keywords = await scoreAndRank(candidates, { businessName, niche, location });

  return {
    keywords: keywords.sort((a, b) => a.priority - b.priority),
    seeds,
    rawCandidateCount: candidates.length,
  };
}
