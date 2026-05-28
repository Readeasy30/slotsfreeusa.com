# Cloudflare Pages Setup for SlotsFreeUSA

Last updated: 2026-05-28

## Current status

The website files are ready in GitHub, but the public domain is not live until Cloudflare Pages or another host is connected correctly.

Repository:

- `Wholelychit/slotsfreeusa.com`

Production branch:

- `main`

Site type:

- Static HTML/CSS/JavaScript
- No React
- No Vite
- No build tool
- No private keys
- No server required

## Recommended Cloudflare Pages settings

Use Cloudflare Pages connected to GitHub.

### Create or check the Pages project

Cloudflare dashboard path:

1. Workers & Pages
2. Pages
3. Create application
4. Connect to Git
5. Choose GitHub repository: `Wholelychit/slotsfreeusa.com`
6. Production branch: `main`

### Build settings

Because this is a plain static website, use:

- Framework preset: None
- Build command: `exit 0`
- Build output directory: `/`
- Root directory: leave blank unless Cloudflare requires `/`

If Cloudflare does not accept `/` for output directory, use `.` instead.

Do not use:

- `npm run build`
- `dist`
- `public`
- React
- Vite
- Next.js

## Custom domains

Add both domains in the Cloudflare Pages project custom domains area:

- `slotsfreeusa.com`
- `www.slotsfreeusa.com`

Cloudflare should show each custom domain as Active.

## DNS check

In Cloudflare DNS, check records for:

- `@`
- `www`

Do not guess these manually if Cloudflare Pages offers to set the DNS records. Let Cloudflare Pages add the required records when possible.

If manual DNS is needed, use the target Cloudflare provides for the Pages project.

## What must be true before site is live

- Pages project exists.
- Connected repo is `Wholelychit/slotsfreeusa.com`.
- Production branch is `main`.
- Latest deployment says Success.
- Custom domain `slotsfreeusa.com` is Active.
- Custom domain `www.slotsfreeusa.com` is Active or redirected.
- DNS records point to the Cloudflare Pages project.

## Test after deployment

Open these URLs:

- `https://slotsfreeusa.com/`
- `https://slotsfreeusa.com/play-free-slots.html`
- `https://slotsfreeusa.com/free-spins-explained.html`
- `https://slotsfreeusa.com/casino-bonus-terms-explained.html`
- `https://slotsfreeusa.com/search.html`
- `https://slotsfreeusa.com/sitemap.xml`

## If deployment fails

Check these first:

1. Wrong repo connected.
2. Wrong branch selected.
3. Build command tries to run npm even though this is not an npm project.
4. Output directory is wrong.
5. Custom domain is pending.
6. DNS record points somewhere else.

## Do not add yet

Do not add until the site is live and policies are ready:

- live ad scripts
- live affiliate links
- tracking scripts
- email collection
- public AI widget
- payment tools

## Notes

The repo includes a `CNAME` file with `slotsfreeusa.com`. That helps GitHub Pages style custom-domain setups, but Cloudflare Pages still needs its own Pages project and custom-domain configuration.
