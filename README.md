# authenticintel.com

Marketing site for Authentic Intelligence and AUi Terminal, deployed on Vercel from `main`.

- `content/site.js` – all page copy, in English (`en`) and French (`fr`); edit text here
- `pages/index.js` – the single-page layout and styles
- `next.config.js` – languages: English at `/`, French at `/fr`
- `pages/_document.js` – document shell (the `lang` attribute follows the language)
- `public/` – globe image, favicons, social share image, `robots.txt`, `sitemap.xml`

## Local development

```bash
npm install
npm run dev
```

Versions are pinned in `package.json` and `package-lock.json` so Vercel builds the same thing every time.
