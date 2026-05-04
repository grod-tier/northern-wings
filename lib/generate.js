/**
 * lib/generate.js
 *
 * Claude-powered blog post generator — drop-in replacement for Arvow.
 * Returns the same payload shape as Arvow's webhook so the rest of the
 * pipeline (handleArvowWebhook, templates, routes) works unchanged.
 *
 * Arvow payload shape:
 *   { id, title, contentHTML, content_markdown, metadescription,
 *     thumbnail, thumbnail_alt_text, keyword_seed, language_code }
 */

import './env.js';
import Anthropic from '@anthropic-ai/sdk';
import { randomUUID } from 'crypto';

let _anthropic;
function getClient() {
  if (!_anthropic) _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return _anthropic;
}

/**
 * Generate a single SEO blog post for a keyword.
 *
 * @param {object} opts
 * @param {string} opts.keyword        — target keyword
 * @param {string} opts.businessName
 * @param {string} opts.niche
 * @param {string} [opts.location]
 * @param {string} [opts.title]        — optional custom title override
 * @param {function} [opts.onToken]    — streaming progress callback(charCount)
 * @returns {Promise<ArvowPayload>}
 */
export async function generatePostWithClaude({
  keyword,
  businessName,
  niche,
  location = 'Los Angeles, CA',
  title: titleOverride,
  onToken,
}) {
  const systemPrompt = `You are a senior SEO content writer. You write authoritative, engaging, well-structured blog posts that rank well on Google and provide genuine value to readers. Your HTML is clean and semantic. You never use filler phrases like "In conclusion" or "In today's fast-paced world".`;

  const userPrompt = `Write a complete, publication-ready SEO blog post for the following:

Target keyword: "${keyword}"
Business: ${businessName} (${niche}, ${location})
${titleOverride ? `Title: ${titleOverride}` : ''}

Requirements:
- 1,200–1,600 words
- Naturally include the target keyword in: the title, first paragraph, at least 2 subheadings, and the conclusion
- Structure: compelling intro → 3–5 main sections with H2s → practical takeaways → brief closing CTA mentioning ${businessName}
- Use H2 for main sections, H3 for subsections
- Include at least one bulleted or numbered list
- Include at least one blockquote (a relevant insight or stat)
- Write for humans first, Google second — no keyword stuffing
- Tone: knowledgeable, approachable, trustworthy (not salesy)
- The CTA at the end should feel natural, not pushy

Output a JSON object with these exact keys (no markdown fences, just raw JSON):
{
  "title": "SEO-optimized title (50–60 chars ideal)",
  "metadescription": "compelling meta description 140–155 chars",
  "contentHTML": "the full article as clean HTML — only use: h2, h3, p, ul, ol, li, strong, em, blockquote, hr",
  "thumbnail_query": "2–3 word image search query for an Unsplash photo that fits this article"
}`;

  let rawJson = '';

  if (onToken) {
    // Streaming mode
    const stream = getClient().messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    });

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        rawJson += chunk.delta.text;
        onToken(rawJson.length);
      }
    }
  } else {
    const msg = await getClient().messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    });
    rawJson = msg.content[0].text;
  }

  // Parse response — Claude sometimes wraps in ```json ... ```
  const cleaned = rawJson.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    // Fallback: extract JSON object
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Claude did not return valid JSON for post content');
    parsed = JSON.parse(match[0]);
  }

  const { title, metadescription, contentHTML, thumbnail_query } = parsed;

  // Build an Unsplash thumbnail URL from the query term (no API key needed)
  const thumbnail = thumbnailUrl(thumbnail_query || keyword);

  return {
    id:                randomUUID(),
    title,
    contentHTML,
    content_markdown:  '', // not generated — only Arvow provides this
    metadescription,
    thumbnail,
    thumbnail_alt_text: thumbnail_query || keyword,
    keyword_seed:       keyword,
    language_code:      'en',
    _generator:         'claude', // internal tag so we know the source
  };
}

/**
 * Generate multiple posts sequentially, calling onProgress between each.
 *
 * @param {Array<string|{keyword,title?}>} keywords
 * @param {object} context — businessName, niche, location
 * @param {function} [onProgress] — (index, total, keyword) => void
 * @returns {Promise<ArvowPayload[]>}
 */
export async function generatePostsBatch(keywords, context, onProgress) {
  const results = [];
  const items = keywords.map(k => typeof k === 'string' ? { keyword: k } : k);

  for (let i = 0; i < items.length; i++) {
    const { keyword, title } = items[i];
    onProgress?.(i, items.length, keyword);
    const post = await generatePostWithClaude({ keyword, title, ...context });
    results.push(post);
  }

  return results;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Build a thumbnail URL using Picsum with a keyword-derived seed.
 * Gives a consistent, always-loading photo for each keyword.
 */
function thumbnailUrl(query) {
  if (!query) return 'https://picsum.photos/seed/yoga/1200/630';
  // Hash the query string to a stable numeric seed
  let seed = 0;
  for (let i = 0; i < query.length; i++) seed = (seed * 31 + query.charCodeAt(i)) >>> 0;
  return `https://picsum.photos/seed/${seed}/1200/630`;
}
