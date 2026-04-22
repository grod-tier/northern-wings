# Homepage Redesign — Design Skill

You are redesigning a business homepage. Apply the full Impeccable design system (v2.1.1) combined with Anthropic's frontend-design skill. Every rule below is mandatory.

---

## ANTHROPIC FRONTEND-DESIGN SKILL

**Design Strategy**: Begin by understanding context — purpose, target audience, and technical constraints — then commit to a bold aesthetic direction. Options range from "brutally minimal" to "maximalist chaos," retro-futuristic, or luxury aesthetics.

**Critical Requirement**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

**Typography**: Select distinctive, characterful fonts rather than generic defaults like Arial or Inter. Pair a display font with a refined body font. **Maximum 2 font families total** — one for headings/display, one for body/UI. Do not introduce a third font for scripts, accents, monospace, or any other purpose.

**Color & Theme**: Build cohesive palettes using CSS variables with dominant colors and sharp accents.

**Motion**: Prioritize CSS animations with high-impact moments like staggered page-load reveals.

**Spatial Composition**: Employ asymmetry, overlap, and unexpected layouts.

**Visual Details**: Add atmosphere through gradients, textures, patterns, and contextual effects.

**What to Avoid**: Overused font families, clichéd color schemes (purple gradients), predictable layouts, cookie-cutter design that lacks context-specific character.

---

## IMPECCABLE DESIGN SYSTEM v2.1.1

### Absolute Bans (Non-Negotiable)

1. **No side-stripe borders** on cards or alerts: `border-left/right > 1px` with color. This is the #1 AI design tell. If you need visual distinction, use background color, full border, or spacing instead.
2. **No gradient text**: `background-clip: text` with gradients is the #2 AI design tell. Use solid colors, or put the gradient on a background element.
3. **No glassmorphism**, generic drop shadows, or sparkline charts unless essential.
4. **No modals** unless truly necessary.

### The AI Slop Test

Before finalizing: if someone saw this interface, would they immediately say "AI made this"? If yes, redesign. Aim for work that looks like it came from a boutique design agency.

---

## TYPOGRAPHY

### Font Selection Process

**HARD LIMIT: Maximum 2 font families for the entire design.** One display/heading font, one body/UI font. No exceptions — no script accents, no monospace decorations, no third "character" font. Fewer fonts = more cohesion and faster load times.

1. Read the business content. Write 3 concrete words describing the brand voice — NOT "modern" or "elegant" (dead categories). Try "warm and mechanical and opinionated" or "calm and clinical and careful."
2. Imagine the font as a physical object the brand could ship: a typewriter ribbon, a hand-lettered shop sign, a 1970s mainframe terminal, a fabric label inside a coat. Pick the typeface that matches.
3. Browse Google Fonts, Pangram Pangram, Adobe Fonts with that physical object in mind. **Reject the first thing that looks "designy."** That's your trained reflex.
4. **Reject these fonts entirely**: Inter, DM Sans, Fraunces, Roboto, Open Sans, Lato, Montserrat, Nunito, Poppins, Raleway, Plus Jakarta Sans, Be Vietnam Pro, Outfit, Figtree, Geist, and any font you used on your last project.

### Anti-reflexes

- A technical brief does NOT need a serif "for warmth"
- An editorial brief does NOT need the same expressive serif everyone is using
- A "modern" brief does NOT need a geometric sans — the most modern thing in 2026 is NOT using what everyone else uses

### Type Scale

Use modular scale with fluid sizing via `clamp()` for headings on marketing pages. Fixed `rem` scales for body text and UI elements. Line-height based on vertical rhythm (line-height × font-size = base unit for all vertical spacing).

### OpenType Features

Use `font-variant-numeric: tabular-nums` for any numbers. Enable `font-kerning: normal`. Use `font-display: swap` for web fonts.

---

## COLOR & CONTRAST

### Use OKLCH, Not HSL

`oklch(lightness chroma hue)` — perceptually uniform. Equal lightness steps *look* equal.

- **Tinted neutrals**: Never pure gray. Add chroma 0.005–0.015 toward your brand hue for subconscious cohesion.
- **60-30-10 rule by visual weight**: 60% neutral backgrounds, 30% secondary (text/borders), 10% accent (CTAs only). Accent colors work *because* they're rare — overuse kills their power.
- **Palette structure**: Primary (3-5 shades), Neutral (9-11 shades), Semantic (success/error/warning), Surface (2-3 elevation levels).

### Contrast Requirements

- Body text: 4.5:1 minimum (WCAG AA)
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum
- Placeholders: 4.5:1 (commonly failed)

### Dangerous Combos to Avoid

- Light gray text on white (the #1 accessibility fail)
- Gray text on any colored background — use a darker shade of the background color instead
- Pure black (#000) for large areas — use dark gray with slight chroma tint

### Dark Mode

Never invert light mode. Depth comes from surface lightness, not shadows. Build a 3-step surface scale where higher elevations are lighter (12% / 18% / 24% lightness in OKLCH).

---

## SPATIAL DESIGN

### 4pt Base Grid (Not 8pt)

Use: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Name tokens semantically (`--space-sm`, `--space-lg`), not by value. Use `gap` instead of margins for sibling spacing.

### Visual Hierarchy

**The Squint Test**: Blur your eyes. Can you still identify the most important element? The second? Clear groupings? If everything looks the same weight blurred, you have a hierarchy problem.

Combine multiple dimensions: size + weight + color + space. A heading that's larger, bolder, AND has more space above it.

### Cards Are Overused

Use spacing and alignment instead where possible. Never nest cards inside cards. Only use cards when content is truly distinct and needs interaction boundaries.

### Self-Adjusting Grids

`repeat(auto-fit, minmax(280px, 1fr))` for responsive grids without breakpoints.

---

## MOTION DESIGN

### Timing

- Instant feedback (button press): 100–150ms
- State transitions (tab switch): 150–250ms  
- Entrance animations: 300–500ms
- Exit animations: 75% of entrance duration

### Easing

Use `cubic-bezier(0.25, 1, 0.5, 1)` (exponential ease-out) for entrances. Never bounce/elastic — these are dated.

### Technical Rules

- Only animate `transform` and `opacity` (no layout recalculation)
- For height changes, animate `grid-template-rows`
- Always include `prefers-reduced-motion` support — this is non-negotiable

### Staggered Entrances

Use staggered delays (0.05–0.1s between items) for lists and grids. High-impact moments justify longer animations.

---

## INTERACTION DESIGN

Design all 8 states for interactive elements: Default, Hover, Focus, Active, Disabled, Loading, Error, Success.

**Focus rings**: Never `outline: none` without replacement. Use `:focus-visible` for keyboard-only focus rings. 2-3px thick, offset from element, high contrast.

**Forms**: Always visible `<label>` elements. Validate on blur, not keystroke. Errors below fields with `aria-describedby`.

**Loading**: Skeleton screens > spinners. Optimistic updates for low-stakes actions.

---

## RESPONSIVE DESIGN

Mobile-first with `min-width` media queries. Content-driven breakpoints (start narrow, stretch until design breaks, add breakpoint there). Typically 3 breakpoints: ~640px, 768px, 1024px.

Use `@media (pointer: fine)` for hover-dependent interactions. Don't rely on hover for functionality — touch users can't hover.

---

## UX WRITING

Specific, action-oriented labels: "Save changes" not "Submit". "Create account" not "OK".

Error messages: what occurred + why + how to fix. Never blame the user.

Consistent terminology: pick one word per concept (Delete, not Delete/Remove/Trash) and stick to it.

---

## OUTPUT REQUIREMENTS

Produce a **single complete HTML file** with:
1. `<!DOCTYPE html>` with proper viewport and charset meta tags
2. All CSS in `<style>` in `<head>` — no external CSS frameworks
3. Google Fonts `@import` for chosen fonts
4. All JS in `<script>` before `</body>` — minimal, only for interactions
5. Real business name, tagline, services, copy from the scraped content
6. **Real images**: use the actual image URLs scraped from the site (provided in "Real site images" above). Never use picsum.photos or any placeholder images. If an image URL is relative, construct the absolute URL from the site's domain.
7. **Original color palette**: base the design on the "Original site colors" provided. Preserve the brand's color identity — you may refine or elevate it but must NOT invent a completely different palette.
8. Sections: nav/header, hero, about/story, services/products, social proof, CTA footer
9. Working smooth-scroll navigation
10. `prefers-reduced-motion` media query

**The bar is not "it works" — the bar is "this would be shown in a design portfolio."**

Output ONLY the HTML. No explanation, no markdown fences, no commentary. Start with `<!DOCTYPE html>`.

---

## HERO SECTION — CRO REQUIREMENTS (mandatory)

The hero must be built to convert, not just to look good. Every element must earn its place.

### Above-the-fold essentials
- **Headline**: Benefit-led, not feature-led. Answer "what's in it for me" in ≤10 words. No generic taglines ("Welcome to X", "Your partner in Y").
- **Sub-headline**: One sentence that handles the next objection or adds specificity the headline couldn't.
- **Primary CTA button**: Single, unambiguous action. Label is a verb + outcome ("Shop Now", "Book a Free Consult", "Get My Quote") — never "Learn More" or "Click Here".
- **Secondary CTA** (optional): Lower-commitment alternative ("See How It Works", "View Menu").
- **Trust signal**: At minimum one of — star rating + count, "X happy customers", a recognizable press logo, or a short testimonial pull-quote. Placed near the CTA.
- **Hero image/video**: Real site asset (from scraped images), not a placeholder. Must visually reinforce the headline promise.

### CRO rules
- CTA button must have high contrast against the hero background — it must be the most visually dominant interactive element on the page.
- Eliminate friction near the CTA with micro-copy ("No medical card required", "Open daily 10am–10pm", etc. — adapt to context).
- No nav links that compete with the CTA for attention — keep the header nav minimal and low-weight.
- The hero headline must pass the "5-second test": a new visitor can immediately understand what this business does and why to stay.
- Avoid hero carousels/sliders — they kill conversion. Use a single, decisive visual.
- Mobile hero: CTA button must be thumb-reachable, minimum 48×48px tap target.
