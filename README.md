# authenticintel.com

Marketing site for Authentic Intelligence and AUi Terminal, deployed on Vercel from `main`.

- `pages/index.js` – the single-page site (copy, layout and styles)
- `pages/_document.js` – document shell (`lang="en"`)
- `public/` – globe image, favicons, social share image, `robots.txt`, `sitemap.xml`

## Local development

```bash
npm install
npm run dev
```

Versions are pinned in `package.json` and `package-lock.json` so Vercel builds the same thing every time.
