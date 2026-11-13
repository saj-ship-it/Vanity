import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { content } from '../content/site';

export const CONTACT_EMAIL = 'info@findsignal.ai';
export const SITE_URL = 'https://www.authenticintel.com';
export const LOCALES = ['en', 'fr'];

export const pageUrl = (locale, path = '') => `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}${path}` || `${SITE_URL}/`;
export const mailto = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
export const contactHref = (locale) => `${locale === 'en' ? '' : `/${locale}`}/#contact`;

// Current language and its copy
export function useSite() {
  const { locale: routerLocale } = useRouter();
  const locale = LOCALES.includes(routerLocale) ? routerLocale : 'en';
  return { locale, t: content[locale] };
}

// 24px line icon
export const Icon = ({ path, size = 24, color = '#2563eb', strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={path} />
  </svg>
);

// Brand mark: the signal ring from the favicon
export const BrandMark = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="23" fill="none" stroke="#2563eb" strokeWidth="5" />
    <circle cx="32" cy="32" r="12" fill="none" stroke="#2563eb" strokeWidth="5" opacity="0.6" />
    <circle cx="32" cy="32" r="5" fill="#ffffff" />
  </svg>
);

// --- Page meta (title, description, canonical, hreflang, social cards) ---
export function PageMeta({ title, description, path = '' }) {
  const { locale, t } = useSite();
  const url = pageUrl(locale, path) || `${SITE_URL}/`;
  const ogImage = `${SITE_URL}${t.meta.ogImage}`;
  const href = (l) => (path ? pageUrl(l, path) : (l === 'en' ? `${SITE_URL}/` : pageUrl(l)));
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#050505" />
      <link rel="canonical" href={href(locale)} />
      {LOCALES.map((l) => <link key={`alt-${l}`} rel="alternate" hrefLang={l} href={href(l)} />)}
      <link rel="alternate" hrefLang="x-default" href={href('en')} />
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Authentic Intelligence" />
      <meta property="og:locale" content={t.meta.ogLocale} />
      {LOCALES.filter((l) => l !== locale).map((l) => <meta key={`og-alt-${l}`} property="og:locale:alternate" content={content[l].meta.ogLocale} />)}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t.meta.ogImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}

// --- Header clock (UTC, desktop only; empty until mounted so server and client markup match) ---
const UtcClock = ({ locale }) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const format = () => (locale === 'fr'
      ? new Date().toLocaleString('fr-FR', { timeZone: 'UTC', weekday: 'short', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' UTC'
      : new Date().toUTCString().replace('GMT', 'UTC'));
    setTime(format());
    const timer = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(timer);
  }, [locale]);
  return <span className="clock">{time}</span>;
};

// --- Language switch: keeps the current page, changes the language ---
export const LanguageSwitch = ({ className = 'lang-switch' }) => {
  const { pathname } = useRouter();
  const { locale, t } = useSite();
  return (
    <nav className={className} aria-label={t.languageLabel}>
      {LOCALES.map((l) => (
        <Link key={l} href={pathname} locale={l} hrefLang={l} lang={l} aria-current={l === locale ? 'true' : undefined}>
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
};

// --- Header: brand, clock, language, call to action and (on the home page) section nav with scroll spy ---
export function SiteHeader({ nav }) {
  const { locale, t } = useSite();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!nav) return undefined;
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [nav]);

  return (
    <div className="site-header">
      <header className="header-inner">
        <div className="header-top">
          <Link href="/" locale={locale} className="brand" aria-label="Authentic Intelligence">
            <BrandMark />
            <span>AUTHENTIC INTELLIGENCE</span>
          </Link>
          <div className="header-right">
            <UtcClock locale={locale} />
            <LanguageSwitch />
            <a className="btn btn-ghost btn-sm header-cta" href={contactHref(locale)}>{t.headerCta}</a>
          </div>
        </div>

        {nav && (
          <nav className="nav-links" aria-label={t.navLabel}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} aria-current={active === n.href.slice(1) ? 'true' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}

// --- Footer: brand and tagline, contact, legal links, language ---
export function SiteFooter() {
  const { locale, t } = useSite();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand"><BrandMark /><span>AUTHENTIC INTELLIGENCE</span></div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="eyebrow footer-heading">{t.footer.contactLabel}</p>
          <ul className="footer-list">
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={contactHref(locale)}>{t.headerCta}</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow footer-heading">{t.footer.legalLabel}</p>
          <ul className="footer-list">
            <li><Link href="/privacy" locale={locale}>{t.footer.privacy}</Link></li>
            <li><Link href="/legal" locale={locale}>{t.footer.legal}</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow footer-heading">{t.languageLabel}</p>
          <LanguageSwitch />
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}

// --- Stylesheet (raw HTML so React does not escape characters and mismatch on hydration) ---
// Every text colour meets WCAG AA (4.5:1) on #050505.
const CSS = `
  :root {
    --bg: #050505; --surface: #0a0a0a; --line: #161616; --line-2: #262626;
    --text: #ffffff; --text-2: #aab2bf; --muted: #8b93a1;
    --blue: #2563eb; --blue-text: #5b8def;
    --sans: 'Inter Variable', Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    --mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  }
  html { scroll-behavior: smooth; scroll-padding-top: 84px; background: var(--bg); }
  body { font-family: var(--sans); color: var(--text); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .pulse { animation: none; } }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.9; } 100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; } }

  .page { background: var(--bg); min-height: 100vh; padding: 0 20px; overflow-x: hidden; }
  .main { max-width: 1200px; margin: 0 auto; animation: fadeIn 0.4s ease-out; }

  /* Header */
  .site-header { position: fixed; top: 0; left: 0; right: 0; z-index: 200; background: rgba(5,5,5,0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); padding: 14px 20px 10px; }
  .header-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
  .header-top { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .brand { display: inline-flex; align-items: center; gap: 10px; color: var(--text); text-decoration: none; font: 600 11px/1 var(--sans); letter-spacing: 0.22em; }
  .header-right { display: flex; align-items: center; gap: 16px; }
  .clock { display: none; font: 400 11px/1 var(--mono); color: var(--muted); letter-spacing: 0.04em; }
  .btn.header-cta { display: none; }
  .lang-switch { display: flex; gap: 2px; font: 500 11px/1 var(--mono); letter-spacing: 0.1em; }
  .lang-switch a { color: var(--muted); text-decoration: none; padding: 6px 7px; border: 1px solid transparent; border-radius: 3px; }
  .lang-switch a:hover, .lang-switch a:focus-visible { color: var(--text); }
  .lang-switch a[aria-current='true'] { color: var(--text); border-color: var(--line-2); }
  .nav-links { display: flex; justify-content: space-between; gap: 4px; font: 500 11px/1 var(--mono); letter-spacing: 0.06em; text-transform: uppercase; }
  .nav-links a { color: #a3a3a3; text-decoration: none; white-space: nowrap; padding: 6px 0; border-bottom: 1px solid transparent; }
  .nav-links a:hover, .nav-links a:focus-visible { color: var(--blue-text); }
  .nav-links a[aria-current='true'] { color: var(--text); border-bottom-color: var(--blue); }
  
  /* Buttons */
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 15px 24px; border-radius: 4px; font: 600 15px/1 var(--sans); letter-spacing: 0.005em; text-decoration: none; transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease; }
  .btn-primary { background: #ffffff; color: #050505; }
  .btn-primary:hover, .btn-primary:focus-visible { background: var(--blue); color: #ffffff; }
  .btn-ghost { color: var(--text); border: 1px solid #3a3a3a; }
  .btn-ghost:hover, .btn-ghost:focus-visible { border-color: var(--blue-text); color: #ffffff; }
  .btn-sm { padding: 9px 14px; font-size: 13px; }
  .arrow { transition: transform 0.15s ease; }
  .btn:hover .arrow { transform: translateX(3px); }

  /* Type */
  .eyebrow { font: 500 11px/1.4 var(--mono); letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin: 0; }
  .statement { font: 600 clamp(24px, 3.4vw, 38px)/1.28 var(--sans); letter-spacing: -0.02em; color: var(--text); margin: 0; max-width: 1000px; }
  .statement-rest { display: block; margin-top: 18px; font: 500 clamp(18px, 2.1vw, 23px)/1.5 var(--sans); letter-spacing: -0.01em; color: var(--text-2); max-width: 880px; }
  .accent { color: var(--blue); }
  .body { font: 400 15px/1.65 var(--sans); color: var(--text-2); margin: 0; }
  .card-title { font: 600 17px/1.3 var(--sans); letter-spacing: -0.01em; color: var(--text); margin: 0 0 8px; }

  /* Hero */
  .hero-layout { display: flex; flex-direction: column; position: relative; margin-top: 108px; padding: 36px 0 56px; align-items: center; text-align: center; }
  .hero-copy { position: relative; z-index: 2; padding: 0 4px; }
  .hero-title { font-weight: 900; line-height: 0.95; letter-spacing: -0.04em; margin: 0 0 24px; }
  .hero-sub { font: 400 17px/1.6 var(--sans); color: var(--text-2); max-width: 470px; margin: 0 auto; }
  .hero-cta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 32px; }
  .hero-visual { position: absolute; z-index: 0; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 180vw; max-width: 900px; aspect-ratio: 1600 / 877; opacity: 0.22; pointer-events: none;
    -webkit-mask-image: radial-gradient(ellipse 55% 60% at 55% 55%, #000 35%, transparent 72%); mask-image: radial-gradient(ellipse 55% 60% at 55% 55%, #000 35%, transparent 72%); }
  .hero-visual img { width: 100%; height: 100%; display: block; }
  .pulse { position: absolute; left: 50.85%; top: 61.3%; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #ef4444; transform: translate(-50%, -50%); animation: pulse 2.6s ease-out infinite both; }
  .pulse-2 { animation-delay: 1.3s; }

  /* Sections */
  .section { border-top: 1px solid var(--line); padding: 64px 0; }
  .section-head { display: flex; flex-direction: column; gap: 20px; margin-bottom: 48px; }
  .cols-3 { display: grid; grid-template-columns: 1fr; gap: 32px 40px; }
  .col { padding-top: 20px; border-top: 1px solid var(--line-2); }
  .col-accent { padding-top: 0; border-top: 0; }
  .col-accent::before { content: ''; display: block; width: 24px; height: 2px; background: var(--blue); margin-bottom: 20px; }
  .col .eyebrow { margin-bottom: 12px; }
  .audience-lead { font: 600 18px/1.35 var(--sans); color: var(--text); margin: 0 0 10px; letter-spacing: -0.01em; }

  /* Product shot */
  .shot { margin: 0; }
  .shot-frame { position: relative; display: block; border: 1px solid #1f2937; border-radius: 10px; overflow: hidden; background: #070b14; box-shadow: 0 0 0 1px rgba(37,99,235,0.12), 0 40px 100px -30px rgba(37,99,235,0.35); }
  .shot-frame img { display: block; width: 100%; height: auto; }
  .shot-frame::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 22%; background: linear-gradient(to bottom, rgba(7,11,20,0), #070b14); pointer-events: none; }
  .shot-open { position: absolute; right: 14px; bottom: 14px; z-index: 1; font: 500 11px/1 var(--mono); letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); background: rgba(5,5,5,0.8); border: 1px solid #333; padding: 8px 10px; border-radius: 4px; }
  .shot-frame:hover .shot-open, .shot-frame:focus-visible .shot-open { border-color: var(--blue-text); }
  .shot-caption { margin-top: 14px; font: 400 12px/1.5 var(--mono); color: var(--muted); letter-spacing: 0.02em; }
  .callouts { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 40px; }
  .callout-title { font: 600 20px/1.3 var(--sans); color: var(--text); letter-spacing: -0.01em; margin: 10px 0 8px; }

  /* Tiles (process steps and sectors) */
  .tiles { display: grid; grid-template-columns: 1fr; gap: 16px; }
  .tile { background: var(--surface); border: 1px solid #1a1a1a; border-radius: 6px; padding: 26px 24px; display: flex; flex-direction: column; transition: border-color 0.2s ease; text-decoration: none; }
  .tile:hover, .tile:focus-visible { border-color: var(--blue); }
  .tile-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 22px; }
  .tile-icon { width: 44px; height: 44px; border: 1px solid #1f2937; border-radius: 6px; display: flex; align-items: center; justify-content: center; }
  .tile-num { font: 500 12px/1 var(--mono); color: var(--muted); letter-spacing: 0.08em; }
  .tile-tag { font: 500 10px/1 var(--mono); letter-spacing: 0.12em; text-transform: uppercase; color: #22c55e; border: 1px solid #14532d; padding: 5px 8px; border-radius: 3px; }
  .tile-cta { border-style: dashed; border-color: #333; }
  .tile-link { margin-top: auto; padding-top: 18px; font: 500 12px/1 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue-text); }
  .swipe-hint { display: block; margin-top: 12px; font: 400 12px/1.4 var(--mono); color: var(--muted); }

  /* Mobile: sectors become a swipeable row so the page stays short */
  @media (max-width: 767px) {
    .sector-row { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 12px; margin: 0 -20px; padding: 0 20px 8px; scrollbar-width: none; }
    .sector-row::-webkit-scrollbar { display: none; }
    .sector-row > * { flex: 0 0 80%; scroll-snap-align: start; }
  }

  /* Pilot and contact */
  .pilot-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
  .pilot-table { margin: 0; border-bottom: 1px solid #1a1a1a; }
  .contact-panel { background: var(--surface); border: 1px solid #222; border-radius: 10px; padding: 28px 22px; scroll-margin-top: 16px; }
  .contact-panel h3 { font: 600 22px/1.3 var(--sans); letter-spacing: -0.01em; margin: 0 0 8px; }
  .form { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
  .field { display: flex; flex-direction: column; gap: 7px; }
  .field label { font: 500 13px/1.3 var(--sans); color: #d1d5db; }
  .field input, .field select, .field textarea { font: 400 15px/1.4 var(--sans); color: var(--text); background: #050505; border: 1px solid #2a2a2a; border-radius: 6px; padding: 12px 13px; width: 100%; box-sizing: border-box; }
  .field textarea { min-height: 120px; resize: vertical; }
  .field select { appearance: none; -webkit-appearance: none; background-image: linear-gradient(45deg, transparent 50%, #8b93a1 50%), linear-gradient(135deg, #8b93a1 50%, transparent 50%); background-position: calc(100% - 18px) 52%, calc(100% - 13px) 52%; background-size: 5px 5px; background-repeat: no-repeat; }
  .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--blue-text); box-shadow: 0 0 0 3px rgba(91,141,239,0.25); }
  .req { color: var(--blue-text); margin-left: 2px; }
  .hp { position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden; }
  .form-note { font: 400 13px/1.55 var(--sans); color: var(--muted); margin: 0; }
  .form-note a, .form-status a { color: var(--blue-text); }
  .form-actions { display: flex; flex-direction: column; gap: 14px; align-items: stretch; }
  .form .btn { border: 0; cursor: pointer; }
  .form .btn[disabled] { opacity: 0.7; cursor: progress; }
  .form-status { font: 400 14px/1.55 var(--sans); margin: 0; color: #fca5a5; }
  .form-success { padding: 8px 0; }
  .form-success h4 { font: 600 20px/1.3 var(--sans); margin: 0 0 8px; color: var(--text); }
  .pilot-row { display: flex; flex-direction: column; gap: 6px; padding: 18px 0; border-top: 1px solid #1a1a1a; }
  .pilot-label { font: 500 11px/1.4 var(--mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); min-width: 130px; }
  .pilot-value { font: 400 16px/1.5 var(--sans); color: #e5e7eb; }

  /* Footer */
  .site-footer { max-width: 1200px; margin: 0 auto; border-top: 1px solid var(--line); padding: 56px 0 40px; }
  .footer-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
  .footer-brand { margin-bottom: 16px; }
  .footer-tagline { font: 400 14px/1.6 var(--sans); color: var(--text-2); max-width: 380px; margin: 0; }
  .footer-heading { margin-bottom: 14px; }
  .footer-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
  .footer-list a { font: 400 14px/1.5 var(--sans); color: var(--text-2); text-decoration: none; }
  .footer-list a:hover, .footer-list a:focus-visible { color: var(--text); }
  .site-footer .lang-switch { margin-left: -7px; }
  .footer-bottom { display: flex; flex-direction: column; gap: 14px; margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--line); font: 400 13px/1.5 var(--sans); color: var(--muted); }

  /* Legal pages */
  .legal { max-width: 720px; margin: 0 auto; padding: 140px 0 72px; }
  .legal h1 { font: 700 clamp(32px, 5vw, 44px)/1.15 var(--sans); letter-spacing: -0.03em; margin: 16px 0 12px; }
  .legal h2 { font: 600 19px/1.35 var(--sans); letter-spacing: -0.01em; margin: 40px 0 10px; }
  .legal section p { font: 400 16px/1.7 var(--sans); color: var(--text-2); margin: 0 0 12px; }
  .legal section a { color: var(--blue-text); }
  .back-link { font: 500 12px/1 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); text-decoration: none; }
  .back-link:hover, .back-link:focus-visible { color: var(--text); }

  /* Small phones (iPhone SE and similar) */
  @media (max-width: 374px) {
    .brand { font-size: 10px; letter-spacing: 0.14em; gap: 8px; }
    .header-right { gap: 8px; }
    .lang-switch a { padding: 6px 5px; }
    .nav-links { font-size: 10px; letter-spacing: 0.02em; }
  }

  /* Tablet */
  @media (min-width: 768px) {
    html { scroll-padding-top: 104px; }
    .site-header { padding: 22px 40px 12px; }
    .header-inner { gap: 14px; }
    .clock { display: inline; }
    .btn.header-cta { display: inline-flex; }
    .nav-links { justify-content: flex-start; gap: 28px; letter-spacing: 0.12em; }
    .hero-layout { flex-direction: row; text-align: left; align-items: center; min-height: 520px; margin-top: 150px; padding: 0 0 48px; }
    .hero-sub { margin: 0; }
    .hero-cta { justify-content: flex-start; }
    .hero-visual { top: 50%; left: auto; right: -14vw; transform: translateY(-50%); width: 1000px; max-width: none; opacity: 0.95; }
    .section { padding: 92px 0; }
    .section-head { margin-bottom: 56px; }
    .cols-3 { grid-template-columns: repeat(3, 1fr); }
    .callouts { grid-template-columns: repeat(3, 1fr); gap: 40px; }
    .tiles { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .swipe-hint { display: none; }
    .pilot-row { flex-direction: row; gap: 32px; }
    .contact-panel { padding: 36px 32px; }
    .form { grid-template-columns: 1fr 1fr; }
    .field-wide { grid-column: 1 / -1; }
    .form-actions { flex-direction: row; align-items: center; justify-content: space-between; }
    .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .body { font-size: 16px; }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .pilot-grid { grid-template-columns: 5fr 6fr; gap: 56px; align-items: start; }
    .tiles-4 { grid-template-columns: repeat(4, 1fr); }
    .tiles-3 { grid-template-columns: repeat(3, 1fr); }
  }
`;

export const GlobalStyles = () => <style dangerouslySetInnerHTML={{ __html: CSS }} />;
