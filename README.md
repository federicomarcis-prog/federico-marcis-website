# Federico Marcis — Digital Business Card

Minimal, mobile-friendly digital business card. Static HTML, CSS and JS, no Python, no hosting fee on Cloudflare Pages free tier.

## Features
- Compact professional business-card landing screen, contact email, downloadable vCard
- Career history, qualifications, and photo gallery in modal panels
- All existing content stored in `public/content.json`
- Sveltia CMS at `/admin/` with GitHub token login for editing text and uploading photos
- No token or private access information is stored in this repository

## IMPORTANT: update existing GitHub repository
Your repository currently has a folder named `Federico_Marcis_Cloudflare_Gratis_Senza_Python` that Cloudflare uses as its root directory. **Replace the CONTENTS inside that folder** with the CONTENTS of this archive, preserving `public/` inside it. Do not nest this archive as another directory. Alternatively, change Cloudflare Pages root directory to match where you actually uploaded the files. Keep Pages build output `public`, framework `None`, build command empty.

GitHub web uploading may not overwrite all existing files automatically. For reliable replacement, use GitHub Desktop or delete the old app files before uploading these, retaining the correct root folder.

Your CMS changes are stored in `public/content.json` and photographs in `public/uploads/`. **Before overwriting your existing project, copy your current live `content.json` and uploads into this new project** if you've already edited them through the admin panel. The provided sample content is a starting point.

## Edit
Open `https://YOUR-PAGES-DOMAIN.pages.dev/admin/`. Login with a new, private GitHub token. Do not reuse a token ever shared in chat. Configure restricted repository Contents read/write permission. Edits commit to GitHub, causing automatic redeployment.

## Customization
Visual styling lives in `public/style.css`. The admin allows full control over text, photos, experience and qualifications, but visual layout/code changes still require editing HTML/CSS/JS in GitHub. The business-card template does not claim to be a drag-and-drop site builder.
