# SlotsFreeUSA Deployment Terminal Commands

Use this only from the local website project folder for `slotsfreeusa.com`.

Do not run these commands from a media vault folder containing raw video/audio files.

## Correct Folder

Run commands from the folder that contains:

```txt
index.html
_headers
_redirects
robots.txt
sitemap.xml
css/
js/
.github/
```

## First-Time Local Git Setup

```bash
# 1. Initialize local Git project structure
git init

# 2. Add all website configuration and layout files
git add .

# 3. Create initialization deployment checkpoint commit
git commit -m "Initialize slotsfreeusa infrastructure: core layouts, redirects, sitemaps, caching headers, and automation engines"

# 4. Set target branch to main
git branch -M main

# 5. Link local project directory to the remote GitHub repository
git remote add origin https://github.com/Wholelychit/slotsfreeusa.com.git

# 6. Push live to GitHub and trigger validation checks / Cloudflare deployment
git push -u origin main
```

## If Remote Already Exists

If Git says `remote origin already exists`, run:

```bash
git remote set-url origin https://github.com/Wholelychit/slotsfreeusa.com.git
git push -u origin main
```

## Normal Future Updates

```bash
git status
git add .
git commit -m "Update SlotsFreeUSA production files"
git push
```

## Safety Check Before Push

Before pushing, make sure you are not committing:

- raw video exports
- large MP3 voiceover files
- private keys
- API tokens
- affiliate account login data
- personal notes
- drafts that should not be public
