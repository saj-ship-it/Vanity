import React from 'react';
import { processIcons } from '../content/site';
import { useSite, PageMeta, GlobalStyles, SiteHeader, SiteFooter, Icon } from '../components/Site';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { t } = useSite();

  return (
    <div className="page">
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <GlobalStyles />
      <SiteHeader nav={t.nav} />

      <main className="main">

        {/* Hero */}
        <section className="hero-layout">
          <div className="hero-copy" style={{ maxWidth: t.hero.maxWidth || '640px' }}>
            <h1 className="hero-title" style={{ fontSize: t.hero.size || 'clamp(38px, 6.5vw, 76px)' }}>
              {t.hero.lines.map((line) => <React.Fragment key={line}>{line} <br /> </React.Fragment>)}
              <span className="accent">{t.hero.accent}</span>
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#contact">{t.hero.primary}</a>
              <a className="btn btn-ghost" href="#platform">{t.hero.secondary} <span className="arrow" aria-hidden="true">&rarr;</span></a>
            </div>
          </div>

          <div className="globe-container" aria-hidden="true">
            <svg viewBox="0 0 780 780" style={{ width: '100%', height: '100%' }}>
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

        {/* [01] Mission */}
        <section id="objective" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.mission.label}</h2>
            <p className="statement">
              {t.mission.before}<span className="accent">{t.mission.accent}</span>{t.mission.after}
              <span className="statement-rest">{t.mission.rest}</span>
            </p>
          </div>

          <p className="eyebrow" style={{ marginBottom: '28px' }}>{t.mission.problemsLabel}</p>
          <div className="cols-3">
            {t.mission.problems.map((p) => (
              <div key={p.title} className="col">
                <h3 className="card-title">{p.title}</h3>
                <p className="body">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In practice: the product */}
        <section id="platform" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.platform.label}</h2>
            <p className="statement">
              {t.platform.before}<span className="accent">{t.platform.accent}</span>{t.platform.after}
              <span className="statement-rest">{t.platform.body}</span>
            </p>
          </div>

          <figure className="shot">
            <a className="shot-frame" href={t.platform.image} target="_blank" rel="noopener">
              <picture>
                <source media="(max-width: 767px)" srcSet={t.platform.imageMobile} width="900" height="1051" />
                <img src={t.platform.image} width="2000" height="1240" alt={t.platform.alt} loading="lazy" decoding="async" />
              </picture>
              <span className="shot-open">{t.platform.open} &#8599;</span>
            </a>
            <figcaption className="shot-caption">{t.platform.caption}</figcaption>
          </figure>

          <div className="callouts">
            {t.platform.callouts.map((c) => (
              <div key={c.title} className="col col-accent">
                <p className="eyebrow">{c.eyebrow}</p>
                <h3 className="callout-title">{c.title}</h3>
                <p className="body">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* [02] Process */}
        <section id="process" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.process.label}</h2>
          </div>
          <ol className="tiles tiles-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {t.process.steps.map((step) => (
              <li key={step.icon} className="tile">
                <div className="tile-top">
                  <div className="tile-icon"><Icon path={processIcons[step.icon]} /></div>
                </div>
                <h3 className="card-title">{step.title}</h3>
                <p className="body">{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* [03] Trust */}
        <section id="control" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.trust.label}</h2>
            <p className="statement">
              {t.trust.before}<span className="accent">{t.trust.accent}</span>{t.trust.after}
              <span className="statement-rest">{t.trust.rest}</span>
            </p>
          </div>
          <div className="cols-3">
            {t.trust.cards.map((s) => (
              <div key={s.title} className="col col-accent">
                <h3 className="card-title">{s.title}</h3>
                <p className="body">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* [04] Who we serve */}
        <section id="sectors" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.serve.label}</h2>
            <p className="statement">
              {t.serve.before}<span className="accent">{t.serve.accent}</span>{t.serve.after}
              <span className="statement-rest">{t.serve.rest}</span>
            </p>
          </div>

          <div className="cols-3" style={{ marginBottom: '72px' }}>
            {t.serve.audiences.map((a) => (
              <div key={a.title} className="col col-accent">
                <p className="eyebrow">{a.title}</p>
                <h3 className="audience-lead">{a.lead}</h3>
                <p className="body">{a.desc}</p>
              </div>
            ))}
          </div>

          <p className="eyebrow" style={{ marginBottom: '24px' }}>{t.serve.sectorsLabel}</p>
          <div className="tiles tiles-3 sector-row">
            {t.serve.sectors.map((s) => (
              <div key={s.name} className="tile">
                <div className="tile-top">
                  <div className="tile-icon"><Icon path={s.path} /></div>
                  {s.tag && <span className="tile-tag">{s.tag}</span>}
                </div>
                <h3 className="card-title">{s.name}</h3>
                <p className="body">{s.desc}</p>
              </div>
            ))}

            <a className="tile tile-cta" href="#contact">
              <div className="tile-top">
                <div className="tile-icon"><Icon path="M12 5v14 M5 12h14" color="#9ca3af" /></div>
              </div>
              <h3 className="card-title">{t.serve.cta.title}</h3>
              <p className="body">{t.serve.cta.desc}</p>
              <span className="tile-link">{t.serve.cta.link} &rarr;</span>
            </a>
          </div>
          <span className="swipe-hint" aria-hidden="true">{t.serve.swipeHint} &rarr;</span>
        </section>

        {/* [05] Pilot */}
        <section id="pilot" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.pilot.label}</h2>
            <p className="statement">{t.pilot.before}<span className="accent">{t.pilot.accent}</span>{t.pilot.after}</p>
          </div>

          <div className="pilot-grid">
            <div className="pilot-table">
              {t.pilot.rows.map((row) => (
                <div key={row.label} className="pilot-row">
                  <span className="pilot-label">{row.label}</span>
                  <span className="pilot-value">{row.value}</span>
                </div>
              ))}
            </div>

            <div id="contact" className="contact-panel">
              <h3>{t.form.title}</h3>
              <p className="body">{t.form.intro}</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
