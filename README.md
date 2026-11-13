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

## Structure

- `components/Site.js` – shared header, footer, page meta, design tokens and stylesheet
- `components/LegalPage.js` – template for the privacy policy and legal notice
- `pages/privacy.js`, `pages/legal.js` – `/privacy` and `/legal` (and `/fr/...`)
- `pages/_app.js` – self-hosted fonts (Inter, JetBrains Mono), no third-party requests
- `public/product-wildfire-en.webp`, `public/product-wildfire-fr.webp` – product shots from the AUi wildfire demo
