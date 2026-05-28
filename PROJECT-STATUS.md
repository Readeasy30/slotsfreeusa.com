# SlotsFreeUSA Project Status

Last updated: 2026-05-28

## Current Stack

- Static HTML
- CSS
- JavaScript
- GitHub Pages source control
- Cloudflare-ready hosting target

No React, Vite, Next.js, TypeScript, build tools, private keys, live ad scripts, live tracking scripts, payment handling, uncontrolled public AI, or live affiliate links.

## Website Independence Rule

SlotsFreeUSA must work independently. The public site should load, crawl, and be reviewed without ChatGPT being open.

GitHub owns the code. Cloudflare or GitHub Pages hosts the public site. Visitors, Google, partners, and affiliates should be able to review the website directly.

## Public Contact

Use this email for website feedback, affiliate inquiries, advertising questions, partner review requests, and content corrections:

`slotsfreeusa@gmail.com`

## Current Site Direction

SlotsFreeUSA is a mobile-first adult information and entertainment site for:

- free slot-style demo play
- no-download slot guides
- social casino explainers
- sweepstakes casino education
- bonus-language guides
- safer-play education
- future ad and partner monetization after approval

The site must stay clear that it does not operate gambling, accept bets, process payments, manage outside accounts, issue payouts, or promise winnings.

## Safe Build Queue Review

Completed checks this session:

- Read the required repo guidance files that are present: `README.md`, `AGENTS.md`, `AGENT-INSTRUCTIONS.md`, `CODEX-WORKFLOW.md`, `PROJECT-STATUS.md`, `MANUAL-QA-CHECKLIST.md`, `DEPLOYMENT-NOTES.md`, `CONTENT-PLAN.md`, `PARTNER-CHECKLIST.md`, and affiliate tracking docs.
- Confirmed the homepage has title, meta description, canonical URL, disclosure bar, navigation, footer links, Open Graph tags, and schema markup.
- Confirmed `robots.txt` allows public crawling, blocks `/go/` redirect paths, and points to `https://slotsfreeusa.com/sitemap.xml`.
- Confirmed `sitemap.xml` exists and lists public pages.
- Confirmed sampled sitemap pages have canonical URLs, favicon links, navigation, and footer links.
- Added `no-download-slots.html` as a new evergreen SEO guide with FAQ schema, canonical URL, trust language, responsible-play reminders, and no live affiliate links.
- Added `no-download-slots.html` to `sitemap.xml`.
- Added `no-download-slots.html` to static site search in `js/site-search.js`.
- Updated `free-slots.html` to link to the no-download guide from the hero, guide card area, footer, and visitor safety note.
- Updated `CONTENT-PLAN.md` with live SEO clusters and the next safe content queue.
- Expanded `MANUAL-QA-CHECKLIST.md` with SEO guide checks, crawl checks, sitemap canonical checks, and search checks.

## Current Public Pages To Keep Crawlable

- `/`
- `play-free-slots.html`
- `about.html`
- `coming-soon.html`
- `free-slots.html`
- `no-download-slots.html`
- `slot-terms-explained.html`
- `free-spins-explained.html`
- `casino-bonus-terms-explained.html`
- `bonuses.html`
- `reviews.html`
- `how-we-review.html`
- `responsible-gaming.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `partner-with-us.html`
- `affiliate-disclosure.html`
- `best-free-slots-for-beginners.html`
- `sweepstakes-casino-guide.html`
- `what-are-social-casinos.html`
- `search.html`

## Known Blockers

- Local shell does not have `git` available, so this session used the GitHub connector for direct file commits.
- Separate `css/search.css` creation was previously blocked by the connector safety filter. Search page styling remains inline.
- Actual affiliate application submission may require official portal login, affiliate account setup, business details, tax/payment details, or partner-manager approval.
- No live affiliate links should be added until partner terms, age rules, location rules, tracking, and disclosures are checked.
- No live ad scripts should be added until ad network approval and privacy requirements are ready.
- No email signup should collect data until email provider, consent language, and privacy policy updates are ready.
- No public AI feature should be added until there is a clear trust, revenue, privacy, and safety reason.

## Next Safe Queue

1. Add a mobile slot games guide focused on phone usability, no-install confusion, speed, and safer-play checks.
2. Add a playthrough rules guide linked from `bonuses.html`, `casino-bonus-terms-explained.html`, and search.
3. Add a social casino coin types guide linked from `what-are-social-casinos.html` and `sweepstakes-casino-guide.html`.
4. Continue verifying sitemap pages after every new public page.
5. Keep all monetization inactive until approval and disclosure checks are complete.

## Stop Points

Stop only for:

- missing repository write permission
- private keys or credentials
- payment setup
- live ad scripts
- live affiliate tracking
- account sign-ins
- major framework changes
- major code deletion
- compliance-risk claims
- uncontrolled public AI
- unclear production risk
