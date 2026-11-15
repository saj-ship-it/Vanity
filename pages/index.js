import React, { useEffect, useRef, useState } from 'react';
import { processIcons } from '../content/site';
import { useSite, PageMeta, GlobalStyles, SiteHeader, SiteFooter, Icon } from '../components/Site';
import ContactForm from '../components/ContactForm';

// Adds `in-view` once the element scrolls into view (starts the diagram's draw animation)
function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

// Scattered sources converge into one qualified picture
const DOTS = [[70, 52], [112, 96], [58, 128], [152, 38], [196, 146], [234, 98], [168, 184], [262, 58], [304, 152], [342, 92], [382, 42], [404, 170], [118, 176], [282, 194]];
function ProblemDiagram({ from, to }) {
  const [ref, seen] = useInView();
  const fx = 860, fw = 280, fy = 26, fh = 168;
  return (
    <svg ref={ref} className={`diagram${seen ? ' in-view' : ''}`} viewBox="0 0 1200 236" role="img" aria-label={`${from} → ${to}`}>
      <g fill="none" stroke="#3d5a8f" strokeWidth="1.4" strokeOpacity="0.85">
        {DOTS.map(([x, y], i) => {
          const ty = fy + 24 + (i * (fh - 48)) / (DOTS.length - 1);
          return <path key={i} className="diagram-line" style={{ animationDelay: `${i * 70}ms` }} d={`M${x} ${y} C ${600} ${y}, ${700} ${ty}, ${fx} ${ty}`} />;
        })}
      </g>
      {DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#8b93a1" />)}
      <rect x={fx} y={fy} width={fw} height={fh} rx="10" fill="#0d1526" stroke="#5b8def" strokeWidth="1.5" />
      <g stroke="#1f2f4f" strokeWidth="1">
        <path d={`M${fx + 20} ${fy + 120} C ${fx + 90} ${fy + 80}, ${fx + 150} ${fy + 140}, ${fx + 260} ${fy + 60}`} fill="none" />
        <path d={`M${fx + 20} ${fy + 60} L ${fx + 260} ${fy + 60} M${fx + 20} ${fy + 100} L ${fx + 260} ${fy + 100} M${fx + 20} ${fy + 140} L ${fx + 260} ${fy + 140}`} />
      </g>
      <circle cx={fx + 170} cy={fy + 92} r="14" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
      <circle cx={fx + 170} cy={fy + 92} r="5" fill="#ef4444" />
      <text x="56" y="228" fontSize="13" fill="#8b93a1" fontFamily="var(--mono)">{from}</text>
      <text x={fx} y="228" fontSize="13" fill="#e5e7eb" fontFamily="var(--mono)">{to}</text>
    </svg>
  );
}

// Soft glow that follows the cursor across a sector card
const glow = (e) => {
  const el = e.target.closest('.tile');
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
};

export default function Home() {
  const { t } = useSite();

  return (
    <div className="page">
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <GlobalStyles />
      <SiteHeader nav={t.nav} />

      <main className="main">

        {/* Hero, over a faint topographic texture */}
        <section className="hero-layout contours">
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
              {/* Signals where AUi operates: Gironde and Scotland */}
              {[[321, 259], [308, 197]].map(([x, y]) => (
                <g key={x}>
                  <circle className="gpulse" cx={x} cy={y} r="6" fill="none" stroke="#5b8def" strokeWidth="1.5" />
                  <circle className="gpulse gpulse-2" cx={x} cy={y} r="6" fill="none" stroke="#5b8def" strokeWidth="1.5" />
                  <circle cx={x} cy={y} r="3.5" fill="#5b8def" />
                </g>
              ))}
            </svg>
          </div>
        </section>

        {/* Mission */}
        <section id="objective" className="section section-alt">
          <div className="section-head">
            <h2 className="eyebrow">{t.mission.label}</h2>
            <p className="statement">
              {t.mission.before}<span className="accent">{t.mission.accent}</span>{t.mission.after}
              <span className="statement-rest">{t.mission.rest}</span>
            </p>
          </div>

          <p className="subhead" style={{ marginBottom: '24px' }}>{t.mission.problemsLabel}</p>
          <ProblemDiagram from={t.mission.diagram.from} to={t.mission.diagram.to} />
          <div className="cols-3">
            {t.mission.problems.map((p) => (
              <div key={p.title} className="col">
                <h3 className="card-title">{p.title}</h3>
                <p className="body">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-world band: NASA satellite view of the 2022 Gironde fires */}
        <figure className="band">
          <img src={t.band.image} width="1800" height="686" alt={t.band.alt} loading="lazy" decoding="async" />
          <figcaption>{t.band.caption}</figcaption>
        </figure>

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

        {/* Process: four connected steps */}
        <section id="process" className="section section-alt">
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
          <p className="connects">
            <span className="eyebrow">{t.process.connects.label}</span>
            {t.process.connects.items.map((s) => <span key={s} className="item">{s}</span>)}
            <span>{t.process.connects.note}</span>
          </p>
        </section>

        {/* Trust, with the real decision log */}
        <section id="control" className="section contours">
          <div className="section-head">
            <h2 className="eyebrow">{t.trust.label}</h2>
            <p className="statement">
              {t.trust.before}<span className="accent">{t.trust.accent}</span>{t.trust.after}
              <span className="statement-rest">{t.trust.rest}</span>
            </p>
          </div>
          <figure className="log-figure">
            <div className="log-frame">
              <img src={t.trust.log.image} width="1200" height="642" alt={t.trust.log.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption className="shot-caption">{t.trust.log.caption}</figcaption>
          </figure>
          <div className="cols-3">
            {t.trust.cards.map((s) => (
              <div key={s.title} className="col col-accent">
                <h3 className="card-title">{s.title}</h3>
                <p className="body">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who we serve */}
        <section id="sectors" className="section section-alt">
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
          <div className="tiles tiles-3 sector-row" onMouseMove={glow}>
            {t.serve.sectors.map((s) => (
              <div key={s.name} className="tile">
                <div className="tile-top">
                  <div className="tile-icon"><Icon path={s.path} size={28} /></div>
                  {s.tag && <span className="tile-tag">{s.tag}</span>}
                </div>
                <h3 className="card-title">{s.name}</h3>
                <p className="body">{s.desc}</p>
              </div>
            ))}

            <a className="tile tile-cta" href="#contact">
              <div className="tile-top">
                <div className="tile-icon"><Icon path="M12 5v14 M5 12h14" color="#9ca3af" size={28} /></div>
              </div>
              <h3 className="card-title">{t.serve.cta.title}</h3>
              <p className="body">{t.serve.cta.desc}</p>
              <span className="tile-link">{t.serve.cta.link} &rarr;</span>
            </a>
          </div>
          <span className="swipe-hint" aria-hidden="true">{t.serve.swipeHint} &rarr;</span>
        </section>

        {/* Pilot: four-month plan, terms and contact */}
        <section id="pilot" className="section">
          <div className="section-head">
            <h2 className="eyebrow">{t.pilot.label}</h2>
            <p className="statement">{t.pilot.before}<span className="accent">{t.pilot.accent}</span>{t.pilot.after}</p>
          </div>

          <p className="eyebrow" style={{ marginBottom: '24px' }}>{t.pilot.phasesLabel}</p>
          <ol className="phases">
            {t.pilot.phases.map((ph) => (
              <li key={ph.when} className="phase">
                <p className="eyebrow">{ph.when}</p>
                <h3 className="card-title">{ph.title}</h3>
                <p className="body">{ph.desc}</p>
              </li>
            ))}
          </ol>

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
