import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { content } from '../content/site';

const CONTACT_EMAIL = 'info@findsignal.ai';
const SITE_URL = 'https://www.authenticintel.com';
const LOCALES = ['en', 'fr'];
const pageUrl = (locale) => (locale === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${locale}`);
const mailto = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

// Colour tokens: every text colour below meets WCAG AA (4.5:1) on the #050505 background
const LABEL_GREY = '#8b93a1';
const LINK_BLUE = '#5b8def';

// --- HEADER CLOCK (UTC, desktop only; empty until mounted so server and client markup match) ---
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

  return (
    <span className="time-ticker-desktop" style={{ fontSize: '10px', fontFamily: 'monospace', color: LABEL_GREY, letterSpacing: '0.1em' }}>{time}</span>
  );
};

// --- LANGUAGE SWITCH ---
const LanguageSwitch = ({ locale, label }) => (
  <nav className="lang-switch" aria-label={label}>
    {LOCALES.map((l) => (
      <Link key={l} href="/" locale={l} hrefLang={l} lang={l} aria-current={l === locale ? 'true' : undefined}>
        {l.toUpperCase()}
      </Link>
    ))}
  </nav>
);

// --- 4-PHASE PROCESS DIAGRAM (line icons joined by a blue rail) ---
const ProcessDiagram = ({ labels }) => {
  const icon = { fill: 'none', stroke: '#fff', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const label = { fill: '#fff', fontFamily: 'Inter, system-ui, sans-serif', fontSize: 30, fontWeight: 500, textAnchor: 'middle', letterSpacing: '0.02em' };
  return (
    <svg viewBox="0 0 1600 420" className="process-img" role="img" aria-label={labels.aria}>
      {/* Connector rail */}
      {[[330, 470], [730, 870], [1130, 1270]].map(([x1, x2]) => (
        <line key={x1} x1={x1} y1="160" x2={x2} y2="160" stroke="#2563eb" strokeWidth="3" />
      ))}

      {/* 01 FUSE: many feeds converging into one node */}
      <g {...icon}>
        <circle cx="270" cy="160" r="26" />
        <path d="M244 160 H150 M247 148 Q200 100 140 90 M247 172 Q200 220 140 230 M253 141 Q215 60 170 40 M253 179 Q215 260 170 280" />
        <circle cx="140" cy="90" r="6" fill="#fff" /><circle cx="140" cy="230" r="6" fill="#fff" />
        <circle cx="150" cy="160" r="6" fill="#fff" /><circle cx="170" cy="40" r="6" fill="#fff" /><circle cx="170" cy="280" r="6" fill="#fff" />
      </g>

      {/* 02 VERIFY: overlapping sources with a check */}
      <g {...icon}>
        <circle cx="570" cy="160" r="85" />
        <circle cx="630" cy="160" r="85" />
        <path d="M570 165 L595 190 L640 135" strokeWidth="5" />
      </g>

      {/* 03 PREDICT: ranked bars */}
      <g {...icon}>
        <rect x="930" y="70" width="180" height="34" rx="4" fill="#2563eb" stroke="#2563eb" />
        <rect x="930" y="128" width="130" height="34" rx="4" />
        <rect x="930" y="186" width="90" height="34" rx="4" />
        <rect x="930" y="244" width="50" height="34" rx="4" />
      </g>

      {/* 04 DECIDE & ACT: logbook with a validation tick */}
      <g {...icon}>
        <rect x="1330" y="60" width="160" height="210" rx="6" />
        <path d="M1360 105 H1460 M1360 145 H1460 M1360 185 H1420" />
        <circle cx="1480" cy="250" r="40" fill="#050505" />
        <path d="M1462 250 L1476 264 L1500 236" strokeWidth="5" />
      </g>

      <text x="230" y="370" style={label}>{labels.steps[0]}</text>
      <text x="600" y="370" style={label}>{labels.steps[1]}</text>
      <text x="1000" y="370" style={label}>{labels.steps[2]}</text>
      <text x="1410" y="350" style={label}>{labels.steps[3]}</text>
      <text x="1410" y="390" style={label}>{labels.last}</text>
    </svg>
  );
};

export default function AUITerminal() {
  const { locale: routerLocale } = useRouter();
  const locale = LOCALES.includes(routerLocale) ? routerLocale : 'en';
  const t = content[locale];

  const sectionLabel = { fontSize: '11px', letterSpacing: '0.4em', color: LABEL_GREY, fontWeight: 'normal', margin: 0 };
  const statement = { fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: '600', lineHeight: '1.4', letterSpacing: '-0.02em', color: '#fff' };
  const subStatement = { fontSize: 'clamp(20px, 3.2vw, 30px)', fontWeight: '600', lineHeight: '1.4', letterSpacing: '-0.02em', color: '#9ca3af', maxWidth: '1000px' };
  const cardTitle = { fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.2em', color: '#fff', margin: '0 0 15px 0' };
  const cardBody = { fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', fontWeight: '300', margin: 0 };
  const ogImage = `${SITE_URL}${t.meta.ogImage}`;

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 20px', overflowX: 'hidden' }}>

      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#050505" />
        <link rel="canonical" href={pageUrl(locale)} />
        {LOCALES.map((l) => <link key={`alt-${l}`} rel="alternate" hrefLang={l} href={pageUrl(l)} />)}
        <link rel="alternate" hrefLang="x-default" href={pageUrl('en')} />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Authentic Intelligence" />
        <meta property="og:locale" content={t.meta.ogLocale} />
        {LOCALES.filter((l) => l !== locale).map((l) => <meta key={`og-alt-${l}`} property="og:locale:alternate" content={content[l].meta.ogLocale} />)}
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:url" content={pageUrl(locale)} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t.meta.ogImageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .spotlight-lens { animation: none; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes dynamicSpotlight {
          0% { cx: 320px; cy: 300px; r: 75px; }
          25% { cx: 480px; cy: 340px; r: 80px; }
          50% { cx: 450px; cy: 500px; r: 85px; }
          75% { cx: 300px; cy: 460px; r: 80px; }
          100% { cx: 320px; cy: 300px; r: 75px; }
        }
        .spotlight-lens {
          animation: dynamicSpotlight 16s infinite ease-in-out;
        }

        .header-fixed-carrier {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 200;
          background-color: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #111;
          padding: 15px 20px 12px 20px;
          box-sizing: border-box;
        }

        .header-container { display: flex; flex-direction: column; gap: 12px; max-width: 1200px; margin: 0 auto; width: 100%; }
        .header-meta-row { display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 100%; }

        .time-ticker-desktop { display: none; }

        .hero-layout { display: flex; flex-direction: column; position: relative; margin-top: 115px; margin-bottom: 15px; min-height: auto; align-items: center; text-align: center; }

        .hero-sub { margin: 0 auto; }

        .globe-container { position: relative; width: 90vw; max-width: 480px; height: 420px; margin-top: -10px; margin-bottom: -10px; overflow: hidden; pointer-events: none; display: flex; justify-content: center; align-items: center; margin-left: auto; margin-right: auto; }

        .process-img { width: 100%; height: auto; display: block; opacity: 0.9; }
        .responsive-sectors { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .card-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }

        .sector-card {
          background-color: #0a0a0a;
          border: 1px solid #1a1a1a;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          transition: border-color 0.2s ease;
        }
        .sector-card:hover, .sector-card:focus-visible { border-color: #2563eb; }
        .sector-card-cta { border-style: dashed; border-color: #333; text-decoration: none; }
        .sector-icon { width: 44px; height: 44px; border: 1px solid #1f2937; border-radius: 4px; display: flex; align-items: center; justify-content: center; }

        .pilot-row { display: flex; flex-direction: column; gap: 6px; padding: 18px 0; border-top: 1px solid #1a1a1a; }

        .cta-button { display: inline-block; background-color: #fff; color: #000; padding: 20px 36px; font-weight: 900; letter-spacing: 0.2em; font-size: 11px; text-decoration: none; font-family: monospace; }
        .cta-button:hover { background-color: #2563eb; color: #fff; }

        .nav-links { display: flex; justify-content: space-between; width: 100%; gap: 4px; font-family: monospace; letter-spacing: 0.02em; }
        .nav-links a { color: #a3a3a3; text-decoration: none; font-size: 10px; font-weight: bold; white-space: nowrap; font-family: monospace; }
        .nav-links a:hover, .nav-links a:focus-visible { color: #5b8def; }
        .mobile-prefix-marker { display: none; }
        .header-right { display: flex; align-items: center; gap: 20px; }
        .lang-switch { display: flex; gap: 2px; font-family: monospace; font-size: 11px; letter-spacing: 0.15em; }
        .lang-switch a { color: #8b93a1; text-decoration: none; padding: 4px 6px; border: 1px solid transparent; }
        .lang-switch a:hover, .lang-switch a:focus-visible { color: #fff; }
        .lang-switch a[aria-current='true'] { color: #fff; border-color: #333; }

        /* Tablet and desktop */
        @media (min-width: 768px) {
          html { scroll-padding-top: 96px; }
          .header-fixed-carrier { padding: 25px 40px 15px 40px; }
          .header-container { gap: 15px; }
          .header-meta-row { align-items: center; gap: 15px; }

          .time-ticker-desktop { display: inline; }
          .mobile-prefix-marker { display: inline; }

          .hero-sub { margin: 0; }
          .hero-layout { flex-direction: row; text-align: left; align-items: center; min-height: 460px; margin-bottom: 40px; margin-top: 160px; }

          .globe-container { position: absolute; right: -2vw; top: 45%; transform: translateY(-50%); width: 580px; height: 580px; max-width: none; margin-top: 0; margin-bottom: 0; left: auto; margin-left: 0; margin-right: 0; }

          .process-img { width: 75%; }
          .responsive-sectors { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .card-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
          .pilot-row { flex-direction: row; gap: 40px; }

          .nav-links { justify-content: flex-start; gap: 30px; letter-spacing: 0.2em; }
        }

        @media (min-width: 1024px) {
          .responsive-sectors { grid-template-columns: repeat(3, 1fr); }
          .nav-links a { font-size: 11px; }
        }
      ` }} />

      <div className="header-fixed-carrier">
        <header className="header-container">
          <div className="header-meta-row">
            <strong style={{ border: '1px solid #333', padding: '6px 12px', letterSpacing: '0.3em', fontSize: '10px', display: 'inline-block' }}>AUTHENTIC INTELLIGENCE</strong>
            <div className="header-right">
              <UtcClock locale={locale} />
              <LanguageSwitch locale={locale} label={t.languageLabel} />
            </div>
          </div>

          <nav className="nav-links">
            {t.nav.map((n) => (
              <a key={n.href} href={n.href}><span className="mobile-prefix-marker">// {n.num} </span>{n.label}</a>
            ))}
          </nav>
        </header>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', animation: 'fadeIn 0.4s ease-out' }}>

        <section className="hero-layout">
          <div style={{ maxWidth: t.hero.maxWidth || '640px', position: 'relative', zIndex: 10, padding: '0 10px' }}>
            <h1 style={{ fontSize: t.hero.size || 'clamp(38px, 6.5vw, 76px)', fontWeight: '900', lineHeight: '0.95', letterSpacing: '-0.04em', marginBottom: '25px' }}>
              {t.hero.lines.map((line) => <React.Fragment key={line}>{line} <br /> </React.Fragment>)}
              <span style={{ color: '#2563eb' }}>{t.hero.accent}</span>
            </h1>
            <p className="hero-sub" style={{ color: '#9ca3af', maxWidth: '460px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
              {t.hero.sub}
            </p>
          </div>

          <div className="globe-container">
            <svg viewBox="0 0 780 780" style={{ width: '100%', height: '100%' }} aria-hidden="true">
              <defs>
                <mask id="lensReveal">
                  <rect width="780" height="780" fill="white" />
                  <circle className="spotlight-lens" fill="black" filter="blur(25px)" />
                </mask>
              </defs>
              <image href="/globe-signal.webp" width="780" height="780" style={{ mixBlendMode: 'screen' }} />
              <rect width="780" height="780" fill="#050505" fillOpacity="0.75" mask="url(#lensReveal)" />
            </svg>
          </div>
        </section>

        <section id="objective" style={{ borderTop: '1px solid #111', paddingTop: '60px', paddingBottom: '60px' }}>
          <h2 style={{ ...sectionLabel, marginBottom: '30px' }}>{t.mission.label}</h2>
          <p style={{ ...statement, maxWidth: '1000px', marginBottom: '60px' }}>
            {t.mission.before}<span style={{ color: '#2563eb' }}>{t.mission.accent}</span>{t.mission.after}
          </p>

          <p style={{ ...sectionLabel, marginBottom: '30px' }}>{t.mission.problemsLabel}</p>
          <div className="card-grid">
            {t.mission.problems.map((p) => (
              <div key={p.title} style={{ borderLeft: '2px solid #333', paddingLeft: '20px' }}>
                <h3 style={cardTitle}>{p.title}</h3>
                <p style={cardBody}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '80px' }}>
          <h2 style={{ ...sectionLabel, marginBottom: '50px' }}>{t.process.label}</h2>

          <div style={{ width: '100%', padding: '20px 0', marginBottom: '50px', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
            <ProcessDiagram labels={t.process.diagram} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {t.process.steps.map((step) => (
              <div key={step.title} style={{ borderLeft: '2px solid #2563eb', paddingLeft: '20px' }}>
                <h3 style={cardTitle}>{step.title}</h3>
                <p style={cardBody}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="control" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '80px' }}>
          <h2 style={{ ...sectionLabel, marginBottom: '20px' }}>{t.trust.label}</h2>
          <p style={{ ...subStatement, marginBottom: '60px' }}>
            {t.trust.before}<span style={{ color: '#fff' }}>{t.trust.accent}</span>{t.trust.after}
          </p>

          <div className="card-grid">
            {t.trust.cards.map((s) => (
              <div key={s.title} style={{ borderLeft: '2px solid #2563eb', paddingLeft: '20px' }}>
                <h3 style={cardTitle}>{s.title}</h3>
                <p style={cardBody}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sectors" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '80px' }}>
          <h2 style={{ ...sectionLabel, marginBottom: '20px' }}>{t.serve.label}</h2>

          <p style={{ ...subStatement, marginBottom: '60px' }}>
            <span style={{ color: '#fff' }}>{t.serve.accent}</span>{t.serve.after}
          </p>

          <div className="card-grid" style={{ marginBottom: '60px' }}>
            {t.serve.audiences.map((a) => (
              <div key={a.title} style={{ borderLeft: '2px solid #2563eb', paddingLeft: '20px' }}>
                <h3 style={cardTitle}>{a.title}</h3>
                <p style={{ fontSize: '17px', color: '#fff', fontWeight: '600', margin: '0 0 10px 0' }}>{a.lead}</p>
                <p style={cardBody}>{a.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ ...sectionLabel, marginBottom: '30px' }}>{t.serve.sectorsLabel}</p>

          <div className="responsive-sectors">
            {t.serve.sectors.map((s) => (
              <div key={s.name} className="sector-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div className="sector-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </div>
                  {s.tag && (
                    <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.15em', color: '#22c55e', border: '1px solid #14532d', padding: '4px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>{s.tag}</span>
                  )}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#fff', margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>{s.name}</h3>
                <p style={{ ...cardBody, fontSize: '14px' }}>{s.desc}</p>
              </div>
            ))}

            <a className="sector-card sector-card-cta" href={mailto(t.serve.cta.subject)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div className="sector-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14 M5 12h14" /></svg>
                </div>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#fff', margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>{t.serve.cta.title}</h3>
              <p style={{ ...cardBody, fontSize: '14px', marginBottom: '20px' }}>{t.serve.cta.desc}</p>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', color: LINK_BLUE, marginTop: 'auto' }}>{t.serve.cta.link} &rarr;</span>
            </a>
          </div>
        </section>

        <section id="pilot" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '100px' }}>
          <h2 style={{ ...sectionLabel, marginBottom: '20px' }}>{t.pilot.label}</h2>
          <p style={{ ...statement, maxWidth: '1000px', marginBottom: '50px' }}>
            {t.pilot.before}<span style={{ color: '#2563eb' }}>{t.pilot.accent}</span>{t.pilot.after}
          </p>

          <div style={{ maxWidth: '800px', marginBottom: '50px', borderBottom: '1px solid #1a1a1a' }}>
            {t.pilot.rows.map((row) => (
              <div key={row.label} className="pilot-row">
                <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', color: LABEL_GREY, minWidth: '120px' }}>{row.label}</span>
                <span style={{ fontSize: '16px', color: '#e5e7eb', fontWeight: '300' }}>{row.value}</span>
              </div>
            ))}
          </div>

          <a className="cta-button" href={mailto(t.pilot.subject)}>{t.pilot.button}</a>
        </section>
      </main>

      <div style={{ width: '100%', textAlign: 'center', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.3em', color: '#9ca3af', paddingBottom: '30px', borderTop: '1px solid #111', paddingTop: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {t.inquiries} // <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#9ca3af', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
      </div>

      <footer style={{ padding: '0 20px 60px 20px', fontSize: '11px', color: LABEL_GREY, letterSpacing: '0.3em', textAlign: 'center' }}>
        © 2026 AUTHENTIC INTELLIGENCE INC.
      </footer>
    </div>
  );
}
