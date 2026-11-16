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
          <p className="footer-location">{t.footer.location}</p>
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
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .spotlight-lens, .gpulse, .flow-dot, .tiles-4::after, .diagram-line, .ticker-run, .live-dot, .ops-link, .flow::after { animation: none !important; } .mobile-cta { transition: none; } .ticker-track { overflow-x: auto; } .diagram-line { stroke-dashoffset: 0 !important; } }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes dynamicSpotlight {
    0% { cx: 320px; cy: 300px; r: 75px; }
    25% { cx: 480px; cy: 340px; r: 80px; }
    50% { cx: 450px; cy: 500px; r: 85px; }
    75% { cx: 300px; cy: 460px; r: 80px; }
    100% { cx: 320px; cy: 300px; r: 75px; }
  }
  .spotlight-lens { animation: dynamicSpotlight 16s infinite ease-in-out; }
  @keyframes gpulse { 0% { transform: scale(0.4); opacity: 0.9; } 100% { transform: scale(3); opacity: 0; } }
  .gpulse { transform-box: fill-box; transform-origin: center; animation: gpulse 2.8s ease-out infinite; }
  .gpulse-2 { animation-delay: 1.4s; }
  @keyframes flowdot { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
  @keyframes draw { to { stroke-dashoffset: 0; } }
  @keyframes flowtravel { 0% { left: 32px; opacity: 0; } 8% { opacity: 1; } 92% { opacity: 1; } 100% { left: calc(100% - ((100% - 72px) / 4 - 32px) - 8px); opacity: 0; } }
  @keyframes travel { 0% { left: 0; opacity: 0; } 8% { opacity: 1; } 92% { opacity: 1; } 100% { left: calc(100% - 8px); opacity: 0; } }

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
  .globe-container { position: absolute; z-index: 0; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 125vw; height: 125vw; max-width: 640px; max-height: 640px; opacity: 0.3; pointer-events: none; }

  /* Sections */
  .section { padding: 64px 0; position: relative; }
  .section-alt { background: #0a0d14; box-shadow: 0 0 0 100vmax #0a0d14; clip-path: inset(0 -100vmax); }
  .contours { position: relative; }
  .contours::before { content: ''; position: absolute; inset: -140px -100vmax 0; background: url(/contours.svg) center / cover no-repeat; opacity: 0.05; pointer-events: none; z-index: 0;
    -webkit-mask-image: linear-gradient(to bottom, transparent, #000 25%, #000 70%, transparent); mask-image: linear-gradient(to bottom, transparent, #000 25%, #000 70%, transparent); }
  .contours > * { position: relative; z-index: 1; }
  .contours > .globe-container { position: absolute; z-index: 0; }
  .globe-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; mix-blend-mode: screen; }
  .globe-container svg { position: relative; }
  .subhead { font: 600 17px/1.4 var(--sans); color: var(--text-2); margin: 0; letter-spacing: -0.005em; }

  /* Satellite band */

  /* Scattered sources -> one picture */
  .diagram { width: 100%; height: auto; display: block; margin: 0 0 40px; }
  .diagram-line { stroke-dasharray: 900; stroke-dashoffset: 900; animation: draw 1.8s ease-out forwards paused; }
  .diagram.in-view .diagram-line { animation-play-state: running; }
  .sequence { list-style: none; margin: 8px 0 64px; padding: 0; display: grid; grid-template-columns: 1fr; gap: 40px; }
  .seq-art { position: relative; aspect-ratio: 2 / 1; background: #070b13; border: 1px solid #1a2234; border-radius: 10px; padding: 12px; margin-bottom: 20px; }
  .seq-art svg { width: 100%; height: 100%; display: block; }
  .seq-num { font: 500 11px/1 var(--mono); letter-spacing: 0.18em; color: var(--blue-text); margin: 0 0 10px; }
  .card-icon { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border: 1px solid #1e2a44; border-radius: 8px; background: rgba(37,99,235,0.06); margin-bottom: 18px; }
  .col-icon { padding-top: 0; border-top: 0; }
  .ticker { position: relative; display: flex; align-items: center; margin: 0 calc(50% - 50vw); height: 44px; overflow: hidden; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #06080d; font: 400 12px/1 var(--mono); color: var(--text-2); letter-spacing: 0.02em; }
  .ticker-label { position: relative; z-index: 1; flex: none; display: flex; align-items: center; gap: 8px; height: 100%; padding: 0 14px 0 max(16px, calc(50vw - 596px)); background: #06080d; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
  .ticker-label .lbl { display: none; }
  .globe-pulses { display: none; }
  .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: live 2s ease-out infinite; }
  .ticker-track { flex: 1; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 32px, #000 calc(100% - 32px), transparent); mask-image: linear-gradient(90deg, transparent, #000 32px, #000 calc(100% - 32px), transparent); }
  .ticker-run { display: flex; width: max-content; animation: marquee 90s linear infinite; }
  .ticker:hover .ticker-run { animation-play-state: paused; }
  .tk { display: inline-flex; align-items: center; gap: 10px; padding-right: 56px; white-space: nowrap; }
  .tk b { font-weight: 600; color: #fff; letter-spacing: 0.04em; text-transform: uppercase; font-size: 11px; }
  .tk-arrow { color: var(--blue-text); }
  .tk-action { color: #e5e7eb; }
  .tk-st { font: 600 10px/1 var(--sans); letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 6px; border-radius: 3px; }
  .tk-ok { color: #4ade80; background: rgba(34,197,94,0.1); }
  .tk-pending { color: #fbbf24; background: rgba(245,158,11,0.1); }
  .tk-new { color: #93b4f5; background: rgba(91,141,239,0.12); }
  @keyframes marquee { to { transform: translateX(-50%); } }
  @keyframes live { 0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.55); } 100% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } }

  /* Connects to */

  /* Decision log figure */
  .log-figure { margin: 0 0 56px; }
  .log-card { max-width: 760px; background: #05070b; border: 1px solid #1f2937; border-radius: 10px; padding: 20px 16px; box-shadow: 0 30px 80px -30px rgba(37,99,235,0.3); }
  .log-head { padding-bottom: 16px; margin-bottom: 14px; border-bottom: 1px solid #1a2130; }
  .log-title { margin: 0 0 6px; font: 700 14px/1.35 var(--sans); letter-spacing: 0.02em; text-transform: uppercase; color: var(--text); }
  .log-intro { margin: 0; font: 400 14px/1.5 var(--sans); color: var(--text-2); }
  .log-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
  .log-entry { display: grid; grid-template-columns: auto 1fr; gap: 14px; padding: 14px; background: #080b11; border: 1px solid #161c28; border-radius: 8px; }
  .log-time { font: 500 13px/1.5 var(--mono); color: var(--text-2); }
  .log-what { margin: 0 0 4px; font: 400 14px/1.45 var(--sans); color: #e5e7eb; }
  .log-what strong { font-weight: 600; color: var(--text); }
  .log-by { margin: 0 0 12px; font: 400 12.5px/1.45 var(--sans); color: var(--muted); }
  .log-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .log-status, .log-action, .log-tag { font: 600 10.5px/1 var(--sans); letter-spacing: 0.06em; text-transform: uppercase; padding: 7px 9px; border-radius: 4px; }
  .log-pending { color: #fbbf24; background: rgba(245,158,11,0.1); }
  .log-ok { color: #4ade80; background: rgba(34,197,94,0.1); }
  .log-action { color: #0b1220; background: #dbe6ff; }
  .log-tag { margin-left: auto; color: #fbbf24; border: 1px solid rgba(245,158,11,0.45); padding: 6px 8px; }

  /* Pilot phases timeline */
  .phases { list-style: none; margin: 0 0 48px; padding: 0; display: grid; grid-template-columns: 1fr; gap: 0; position: relative; }
  .phase { position: relative; padding: 0 0 22px 28px; border-left: 2px solid #1f2937; }
  .phase::before { content: ''; position: absolute; left: -7px; top: 3px; width: 12px; height: 12px; border-radius: 50%; background: var(--bg); border: 2px solid var(--blue); }
  .phase .eyebrow { margin-bottom: 6px; }
  .phase .card-title { margin-bottom: 6px; }
  .section-head { display: flex; flex-direction: column; gap: 20px; margin-bottom: 48px; position: relative; }
  .cols-3 { display: grid; grid-template-columns: 1fr; gap: 32px 40px; }
  .col { padding-top: 20px; border-top: 1px solid var(--line-2); }
  .col-accent { padding-top: 0; border-top: 0; }
  .col-accent::before { content: ''; display: block; width: 24px; height: 2px; background: var(--blue); margin-bottom: 20px; }
  .col .eyebrow { margin-bottom: 12px; }
  .audience-lead { font: 600 18px/1.35 var(--sans); color: var(--text); margin: 0 0 10px; letter-spacing: -0.01em; }

  /* Product shot */
  .shot { margin: 0; }
  .ops { background: #070a11; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; box-shadow: 0 40px 100px -40px rgba(37,99,235,0.35); }
  .ops-bar { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 14px; border-bottom: 1px solid #161c28; background: #05070c; }
  .ops-brand { display: flex; align-items: center; gap: 10px; font: 500 11px/1.3 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: #e5e7eb; }
  .ops-view { display: none; }
  .ops-dot { flex: none; width: 8px; height: 8px; border-radius: 50%; border: 2px solid var(--blue); }
  .ops-bar-right { display: flex; align-items: center; gap: 12px; flex: none; }
  .ops-chip { font: 500 11px/1 var(--mono); padding: 6px 9px; border-radius: 999px; color: #fca5a5; background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.4); white-space: nowrap; }
  .ops-clock { display: none; font: 400 11px/1 var(--mono); color: var(--muted); }
  .ops-kpis { display: grid; grid-template-columns: 1fr 1fr; }
  .ops-kpi { padding: 14px; border-right: 1px solid #161c28; border-bottom: 1px solid #161c28; }
  .ops-kpi:nth-child(2n) { border-right: 0; }
  .ops-kpi:last-child { grid-column: 1 / -1; border-right: 0; }
  .ops-label { margin: 0 0 8px; font: 500 10px/1.3 var(--mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
  .ops-label-gap { margin-top: 20px; }
  .ops-value { margin: 0 0 4px; font: 600 17px/1.2 var(--sans); color: #fff; letter-spacing: -0.01em; }
  .ops-sub { margin: 0; font: 400 12px/1.4 var(--sans); color: var(--text-2); }
  .ops-bars { display: flex; gap: 4px; margin-top: 8px; }
  .ops-bars i { width: 22px; height: 5px; border-radius: 2px; background: #1f2937; }
  .ops-bars i.on { background: #2dd4bf; }
  .ops-main { display: grid; grid-template-columns: 1fr; }
  .ops-mapwrap { position: relative; border-bottom: 1px solid #161c28; }
  .ops-map { display: block; width: 100%; height: auto; }
  .ops-map-wide { display: none; }
  .ops-link { animation: opsflow 1.6s linear infinite; }
  @keyframes opsflow { to { stroke-dashoffset: -20; } }
  .ops-legend { display: none; position: absolute; left: 12px; top: 12px; flex-direction: column; gap: 6px; padding: 10px 12px; background: rgba(5,8,15,0.85); border: 1px solid #161c28; border-radius: 6px; font: 400 11px/1 var(--sans); color: var(--text-2); }
  .ops-legend span { display: flex; align-items: center; gap: 8px; }
  .ops-legend i { width: 8px; height: 8px; border-radius: 2px; display: inline-block; }
  .ops-side { padding: 16px 14px; }
  .ops-recs { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
  .ops-rec { padding: 12px; background: #0a0f19; border: 1px solid #161c28; border-radius: 8px; }
  .ops-rec:first-child { border-color: #2a3f6b; }
  .ops-rec-top { display: flex; gap: 10px; align-items: baseline; }
  .ops-rank { font: 600 11px/1 var(--mono); color: var(--blue-text); }
  .ops-rec-title { font: 600 14px/1.35 var(--sans); color: #fff; }
  .ops-why { margin: 6px 0 10px 21px; font: 400 12.5px/1.45 var(--sans); color: var(--muted); }
  .ops-rec-meta { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-left: 21px; }
  .ops-conf { display: flex; align-items: center; gap: 8px; font: 500 11px/1 var(--mono); color: var(--text-2); }
  .ops-confbar { width: 54px; height: 4px; background: #1f2937; border-radius: 2px; overflow: hidden; }
  .ops-confbar i { display: block; height: 100%; background: var(--blue-text); }
  .ops-state { font: 600 10px/1 var(--sans); letter-spacing: 0.06em; text-transform: uppercase; padding: 5px 7px; border-radius: 4px; text-align: right; }
  .ops-pending { color: #fbbf24; background: rgba(245,158,11,0.1); }
  .ops-ok { color: #4ade80; background: rgba(34,197,94,0.1); }
  .ops-new { color: #93b4f5; background: rgba(91,141,239,0.12); }
  .ops-sources { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; font: 400 13px/1.3 var(--sans); color: var(--text-2); }
  .ops-sources li { display: flex; justify-content: space-between; gap: 10px; }
  .ops-s { font: 500 11px/1.3 var(--mono); white-space: nowrap; }
  .ops-s-live { color: #4ade80; } .ops-s-sim { color: #fbbf24; } .ops-s-off { color: var(--muted); }
  .shot-caption { margin-top: 14px; font: 400 12px/1.5 var(--mono); color: var(--muted); letter-spacing: 0.02em; }
  .callouts { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 40px; }
  .callout-title { font: 600 20px/1.3 var(--sans); color: var(--text); letter-spacing: -0.01em; margin: 10px 0 8px; }

  /* Tiles (process steps and sectors) */
  .tiles { display: grid; grid-template-columns: 1fr; gap: 16px; }
  .tile { background: var(--surface); border: 1px solid #1a1a1a; border-radius: 6px; padding: 26px 24px; display: flex; flex-direction: column; transition: border-color 0.2s ease; text-decoration: none; }
  .tile:hover, .tile:focus-visible { border-color: var(--blue); }
  .sector-row .tile:hover { background: radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(91,141,239,0.12), transparent 60%), var(--surface); }
  .sector-row .tile-icon { width: 52px; height: 52px; }
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
  .pilot-table { margin: 0; }
  .contact-panel { background: var(--surface); border: 1px solid #222; border-radius: 10px; padding: 28px 22px; scroll-margin-top: 16px; }
  .contact-panel { background-image: linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px); background-size: 28px 28px; }
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
  .footer-location { margin: 10px 0 0; font: 400 12px/1.4 var(--mono); letter-spacing: 0.06em; color: var(--muted); }
  .facts { display: grid; grid-template-columns: 1fr; border-top: 1px solid var(--line-2); }
  .fact { padding: 28px 0; border-bottom: 1px solid var(--line-2); }
  .fact-value { margin: 0 0 10px; font: 600 clamp(30px, 4vw, 44px)/1.05 var(--sans); letter-spacing: -0.03em; color: #fff; }
  .fact-label { margin: 0; max-width: 300px; font: 400 15px/1.5 var(--sans); color: var(--text-2); }
  .standard { margin: 56px 0 0; max-width: 820px; font: 500 clamp(20px, 2.6vw, 30px)/1.35 var(--sans); letter-spacing: -0.015em; color: #e5e7eb; }
  .outcomes { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 48px; }
  .outcome { padding: 22px; background: #080b11; border: 1px solid #161c28; border-radius: 10px; }
  .outcome .eyebrow { margin: 22px 0 8px; }
  .outcome .body { margin: 0; }
  .viz { margin: 0; min-height: 76px; }
  .viz-row { display: grid; grid-template-columns: 78px 1fr; align-items: center; gap: 10px; margin-bottom: 12px; }
  .viz-label { font: 500 10.5px/1 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .viz-track { position: relative; height: 12px; }
  .viz-bar { position: absolute; left: 0; top: 5px; height: 2px; background: #4b5563; }
  .viz-bar.on { background: var(--blue-text); }
  .viz-bar i { position: absolute; top: -4px; width: 10px; height: 10px; box-sizing: border-box; border-radius: 50%; background: #0a0f19; border: 2px solid #6b7280; }
  .viz-bar i:first-child { left: -2px; border-color: #f59e0b; }
  .viz-bar i:last-child { right: -2px; }
  .viz-bar.on i:last-child { border-color: #4ade80; }
  .viz-axis, .viz-legend { display: flex; gap: 16px; margin-left: 88px; font: 400 10.5px/1 var(--mono); letter-spacing: 0.04em; color: var(--muted); }
  .viz-axis { justify-content: space-between; }
  .viz-stack { display: flex; height: 10px; border-radius: 3px; overflow: hidden; }
  .seg-a { background: #374151; } .seg-b { background: var(--blue-text); }
  .viz-legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 6px; vertical-align: -1px; }
  .viz-log { list-style: none; padding: 0; display: grid; gap: 9px; }
  .viz-log li { display: flex; align-items: center; gap: 10px; font: 400 13px/1 var(--sans); color: #e5e7eb; }
  .viz-time-stamp { font: 400 11px/1 var(--mono); color: var(--muted); }
  .flow { list-style: none; margin: 0; padding: 0; display: grid; gap: 28px; position: relative; }
  .flow::before { content: ''; position: absolute; left: 32px; top: 32px; bottom: 32px; width: 1px; background: #2a3f6b; }
  .flow-step { position: relative; display: flex; align-items: center; gap: 18px; }
  .flow-node { position: relative; z-index: 1; flex: none; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #0d1526; border: 1px solid #2a3f6b; box-shadow: 0 0 0 6px rgba(37,99,235,0.06); }
  .flow-step .card-title { margin: 0; }
  .flow-cap { margin: 6px 0 0; font: 400 15px/1.45 var(--sans); color: var(--text-2); }
  .loop { max-width: 820px; margin: 0 0 48px; }
  .loop-row { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
  .loop-node { position: relative; display: flex; align-items: center; gap: 12px; padding: 13px 18px; background: #0a0f19; border: 1px solid #1e2a44; border-radius: 999px; font: 600 15px/1.2 var(--sans); color: #fff; }
  .loop-node:not(:last-child)::after { content: '↓'; position: absolute; left: 26px; bottom: -16px; font: 500 13px/1 var(--sans); color: var(--blue-text); }
  .loop-icon { display: flex; }
  .loop-back { margin: 16px 0 0; padding-top: 12px; border-top: 1px dashed #2a3f6b; font: 500 12px/1.4 var(--mono); letter-spacing: 0.04em; color: var(--blue-text); }
  .sector-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .sector-grid > li:last-child { grid-column: 1 / -1; }
  .sector-grid > li { display: flex; }
  .sector { width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 16px; padding: 22px 18px; background: var(--surface); border: 1px solid #1a1f2b; border-radius: 10px; color: inherit; transition: border-color 0.2s, background 0.2s; }
  .sector:hover { border-color: #2a3f6b; background: #0b1020; }
  .sector-icon { display: flex; }
  .sector-name { font: 600 15px/1.3 var(--sans); color: #fff; }
  .sector-cta { text-decoration: none; border-style: dashed; border-color: #2a2f3b; }
  .sector-sub { margin-top: -8px; font: 400 13px/1.45 var(--sans); color: var(--muted); }
  .chips { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px; }
  .chips li { padding: 10px 16px; border: 1px solid #1e2a44; border-radius: 999px; background: rgba(37,99,235,0.06); font: 500 14px/1.2 var(--sans); color: #e5e7eb; }
  .next-steps { margin-top: 32px; }
  .next-steps .eyebrow { margin-bottom: 16px; }
  .next-steps ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
  .next-steps li { display: flex; gap: 14px; align-items: baseline; font: 400 15px/1.5 var(--sans); color: var(--text-2); }
  .next-num { flex: none; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #1e2a44; border-radius: 50%; font: 600 11px/1 var(--mono); color: var(--blue-text); transform: translateY(-1px); }
  .quick-call { margin: 6px 0 22px; font: 400 14px/1.5 var(--sans); color: var(--text-2); }
  .quick-call a { color: var(--blue-text); text-decoration: none; white-space: nowrap; }
  .quick-call a:hover { text-decoration: underline; }
  .mobile-cta { position: fixed; left: 0; right: 0; bottom: 0; z-index: 60; padding: 10px 16px calc(10px + env(safe-area-inset-bottom)); background: rgba(5,5,5,0.92); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border-top: 1px solid var(--line-2); transform: translateY(110%); transition: transform 0.25s ease; }
  .mobile-cta.show { transform: none; }
  .mobile-cta .btn { display: flex; box-sizing: border-box; width: 100%; justify-content: center; }
  .diagram { display: none; }
  .site-footer { padding-bottom: 96px; }
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
    .nav-links { font-size: 10px; letter-spacing: 0; gap: 0; }
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
    .globe-container { top: 45%; left: auto; right: -2vw; transform: translateY(-50%); width: 580px; height: 580px; max-width: none; max-height: none; opacity: 1; }
    .section { padding: 92px 0; }
    #control .cols-3 { row-gap: 40px; }
    .phases { grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .phase { padding: 30px 0 0 0; border-left: 0; border-top: 2px solid #1f2937; }
    .phase::before { left: 0; top: -7px; }
    .section-head { margin-bottom: 56px; }
    .cols-3 { grid-template-columns: repeat(3, 1fr); }
    .sequence { grid-template-columns: repeat(3, 1fr); gap: 56px; }
    .outcomes { grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .flow { grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .flow::before { left: 32px; right: calc((100% - 72px) / 4 - 32px); top: 32px; bottom: auto; width: auto; height: 1px; }
    .flow::after { content: ''; position: absolute; z-index: 2; top: 28px; left: 32px; width: 8px; height: 8px; border-radius: 50%; background: var(--blue-text); box-shadow: 0 0 12px var(--blue-text); animation: flowtravel 6s linear infinite; }
    .flow-step { flex-direction: column; align-items: flex-start; gap: 20px; }
    .loop-row { grid-template-columns: repeat(3, 1fr); gap: 40px; }
    .loop-node:not(:last-child)::after { content: '→'; left: auto; right: -30px; bottom: auto; top: 50%; transform: translateY(-50%); font-size: 18px; }
    .loop-back { margin: 10px 16% 0; padding: 18px 0 10px; border: 1px dashed #2a3f6b; border-top: 0; border-radius: 0 0 16px 16px; text-align: center; }
    .sector-grid { grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr; gap: 16px; }
    .sector-grid > li:last-child { grid-column: auto; }
    .sector { padding: 28px 24px; gap: 20px; }
    .sector-name { font-size: 17px; }
    .diagram { display: block; }
    .mobile-cta { display: none; }
    .site-footer { padding-bottom: 40px; }
    .facts { grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--line-2); }
    .fact { padding: 32px 32px 36px; border-bottom: 0; border-left: 1px solid var(--line-2); }
    .fact:first-child { padding-left: 0; border-left: 0; }
    .ops-bar { padding: 12px 16px; }
    .ops-clock { display: inline; }
    .ops-view { display: inline; }
    .ops-kpis { grid-template-columns: repeat(5, 1fr); }
    .ops-kpi { padding: 14px 16px; border-bottom: 0; }
    .ops-kpi:nth-child(2n) { border-right: 1px solid #161c28; }
    .ops-kpi:last-child { grid-column: auto; border-right: 0; }
    .ops-map-wide { display: block; }
    .ops-map-narrow { display: none; }
    .ops-legend { display: flex; }
    .ops-side { padding: 16px; }
    .log-card { padding: 26px 24px; }
    .log-title { font-size: 15px; }
    .seq-step:not(:last-child) .seq-art::before { content: ''; position: absolute; top: 50%; right: -50px; width: 42px; height: 1.5px; background: linear-gradient(90deg, transparent, #3d5a8f); }
    .seq-step:not(:last-child) .seq-art::after { content: ''; position: absolute; top: 50%; right: -48px; width: 8px; height: 8px; border-top: 1.5px solid #3d5a8f; border-right: 1.5px solid #3d5a8f; transform: translateY(-50%) rotate(45deg); }
    .ticker-label .lbl { display: inline; }
    .globe-pulses { display: inline; }
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
    .tiles-4 { grid-template-columns: repeat(4, 1fr); position: relative; }
    .tiles-4 > .tile { position: relative; z-index: 1; }
    .tiles-4::before { content: ''; position: absolute; left: 24px; right: 24px; top: 48px; height: 1px; background: linear-gradient(to right, transparent, #2a3a5c 6%, #2a3a5c 94%, transparent); z-index: 0; }
    .tiles-4::after { content: ''; position: absolute; top: 45px; left: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--blue-text); box-shadow: 0 0 12px var(--blue-text); z-index: 0; animation: travel 6s linear infinite; }
    .tiles-3 { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 1280px) {
    .ops-main { grid-template-columns: 1fr 340px; }
    .ops-main > * { min-width: 0; }
    .ops-mapwrap { border-bottom: 0; border-right: 1px solid #161c28; }
    .ops-mapwrap::before { content: ''; display: block; padding-top: 67.5%; }
    .ops-map-wide { position: absolute; inset: 0; width: 100%; height: 100%; }
  }
`;

export const GlobalStyles = () => <style dangerouslySetInnerHTML={{ __html: CSS }} />;
