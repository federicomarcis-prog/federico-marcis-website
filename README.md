# Federico Marcis — Static Portfolio (No Python)

This project is **static HTML + CSS + JavaScript**. No Python, database, running server, or paid hosting is needed. All portfolio content is in `public/content.json`. Photos are saved to `public/uploads/` in your GitHub repository.

## Publish free on Cloudflare Pages

1. Create a **private** GitHub repository named `federico-marcis-website` (or change the repository name inside `public/admin/config.yml`).
2. Upload the **contents of this folder**, retaining the `public/` folder, to the root of the repository. Do **not** upload the ZIP itself.
3. Edit `public/admin/config.yml` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.
4. At Cloudflare Dashboard → Workers & Pages → Create application → Pages → connect to Git → select this repository.
5. Choose **no framework**, **no build command**, and set **Build output directory** to `public`. Deploy.
6. Cloudflare will give you an address like `https://federico-marcis.pages.dev` (depending on availability).

## Login and modify content

Visit `https://YOUR-PAGES-ADDRESS/admin/`. Select **Sign In with Token** in Sveltia CMS.

Create a **fine-grained GitHub Personal Access Token** for only this repository, with repository **Contents: Read and write** permission. The CMS login screen provides a token creation link with required permissions. Paste the token in the CMS login form. **Do not put the token in code, the Git repository or public website.**

Edit **Website content → Edit portfolio** to update text, jobs, education, skills and photos. Click **Save**; Sveltia commits the changes to GitHub, and Cloudflare Pages automatically redeploys the website. Changes will appear after deployment, not instantly.

You can later enable easier GitHub OAuth login using Sveltia CMS Authenticator on a free Cloudflare Worker. This is optional. See https://sveltiacms.app/en/docs/backends/github

## Important notes

- The `/admin/` page itself is publicly reachable, but editing requires a GitHub account with write access to your repository; keeping the repository private further protects your content source.
- There is **no old password-based Python admin panel**; authentication is through GitHub.
- Free Git-hosted image storage is suitable for a modest portfolio. Avoid uploading large original photos; resize/compress images before upload. Sveltia CMS uses a 5 MB media limit here.
- Do not upload any personal access token to GitHub or paste it into someone else's site.
- The photo gallery initially has no entries. Add photos in the admin interface.
- For a local preview, serve `public/` with any static HTTP server; opening `index.html` via `file://` will not load `content.json` in many browsers.
