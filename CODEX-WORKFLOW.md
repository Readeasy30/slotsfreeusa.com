# Codex Workflow

Last updated: 2026-05-28

## Purpose

Codex is the main workflow for routine SlotsFreeUSA repository editing.

SlotsFreeUSA must stay simple, mobile-first, beginner-friendly, commercial, partner-ready, and compliance-aware.

## Current Stack

SlotsFreeUSA uses:

- HTML
- CSS
- JavaScript
- GitHub Pages
- Cloudflare

Do not convert this project to React, Vite, Next.js, TypeScript, npm, or any build tool unless Gerry clearly requests a full rebuild later.

## Why Codex Is Primary

Codex should handle routine repo work directly because it can read the repo, make safe file edits, place new files where they belong, and commit useful changes without making Gerry manually paste, create, replace, or update files.

The ChatGPT GitHub connector can show internal write-action labels like `create_file` or `update_file`. It may also pause for confirmation or block wording that looks sensitive. That is a platform safety layer, not a project workflow.

Use Codex as the normal repo-editing path to reduce thumbs-up pauses and manual file-placement confusion.

Use the ChatGPT GitHub connector mainly for:

- small reads
- quick checks
- repo status review
- emergency single-file edits
- handoff files for Codex

Do not make Gerry manually create files because a tool label says `create_file`. That label means the AI is requesting permission to create or update the file.

## Routine File Placement Rule

When safe work is needed, Codex should place files directly in the correct repo location.

Examples:

- workflow docs go in the repo root
- public pages go in the repo root as `.html`
- styles go in `css/`
- scripts go in `js/`
- image assets go in `images/`
- status, tracker, and checklist files go in the repo root

If a file already exists, Codex should update it instead of creating duplicates.

## Required Read Order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `LOCKED-CHECKPOINT.md`
5. `FILE-MANAGEMENT.md`
6. `PROJECT-STATUS.md`
7. `CODEX-WORKFLOW.md`
8. `FOCUS-COMMERCIAL-POSITIONING.md`
9. `CODEX-CURRENT-TASK.md`

## Safe Work Allowed

Codex may directly handle:

- Markdown documentation updates
- homepage copy improvements
- support page improvements
- footer and navigation fixes
- SEO metadata checks
- sitemap and robots.txt updates
- accessibility notes and test checklists
- simple CSS improvements
- small JavaScript repairs that preserve current behavior
- beginner guide pages
- review-page improvements
- disclosure page improvements
- safer-play education pages
- affiliate planning documents before live monetization
- partner outreach templates
- tracker and follow-up schedule updates

## Do Not Change Without Direct Approval

Do not do these without direct approval:

- framework conversion
- React, Vite, Next.js, TypeScript, npm, or build-tool migration
- major deletion of working site code
- payment setup
- live ads
- live tracking scripts
- accounts or logins
- private keys or API tokens
- gambling operation features
- accepting bets or payments
- promising winnings
- compliance-risk changes

## SlotsFreeUSA Content Rules

Keep content clear, beginner-friendly, adult-focused, commercial, and honest about risk.

SlotsFreeUSA is a commercial affiliate/media site. Do not make it sound like a charity, nonprofit, public-service project, or classroom education site.

The site may discuss free slot-style entertainment, social casino reviews, sweepstakes-style guides, bonus explainers, safer-play information, and future approved partner placements.

The site must not operate gambling, accept bets, process payments, issue prizes, redeem prizes, process withdrawals, or promise winnings.

Use clear disclosure language when affiliate, sponsorship, or partner placements are discussed.

## Current Safe Queue

1. Keep the site static and mobile-first.
2. Keep the commercial affiliate/media positioning clear.
3. Keep B2Spin / SpinBlitz status marked sent and waiting for reply.
4. Keep B2Spin follow-up scheduled for 2026-06-05 only if no reply.
5. Keep BetMGM marked ready but blocked by official portal registration steps.
6. Prepare RSI / BetRivers contact-form copy but do not mark submitted until the form is actually submitted.
7. Keep Caesars on hold until an official path is verified.
8. Avoid live ads, payment handling, private keys, tracking, and compliance-risk changes until intentionally configured.

## Reporting Rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.

Record blockers in `PROJECT-STATUS.md` instead of stopping early.
