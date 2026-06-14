# SlotsFreeUSA — Project Context for Claude

## Project Overview
- **Site:** SlotsFreeUSA.com — free online slots and casino review/affiliate site
- **Tech Stack:** Static HTML + CSS (`css/`) + JS (`js/`) + images (`images/`), deployed on Cloudflare Pages
- **Cloudflare Worker:** `slotsfreeusa` worker deployed for backend/affiliate logic
- **Domain:** slotsfreeusa.com (Cloudflare managed, CNAME file present)

## Project Structure
- `index.html` — homepage (13.5KB)
- `404.html` — custom error page
- `css/` — stylesheets
- `js/` — JavaScript files
- `images/` — image assets
- `legal/` — legal pages (privacy, terms, affiliate disclosure)
- `_headers` — Cloudflare Pages security and cache headers
- `_redirects` — Cloudflare Pages URL redirects
- `CNAME` — custom domain config
- `sitemap.xml`, `robots.txt` — SEO files
- `.nojekyll` — disables Jekyll processing on GitHub Pages (legacy)

## Git Workflow
- `main` branch auto-deploys to Cloudflare Pages
- Feature branches: `feature/branch-name` or `claude/...`
- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`

## Important Rules
- **Affiliate compliance:** All casino/slots affiliate links must include proper disclosures
- **Legal pages required:** Privacy policy, terms of service, and affiliate disclosure must stay up to date
- **Responsible gambling:** Include responsible gambling messaging on all relevant pages
- **No unlicensed claims:** Do not claim specific payout rates or RTP without sourcing
- **Age gate:** 18+ / 21+ messaging required per jurisdiction
- Mobile-first design — test on mobile before deploying
