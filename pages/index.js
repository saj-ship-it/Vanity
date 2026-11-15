import React, { useEffect, useRef, useState } from 'react';
import { processIcons } from '../content/site';
import { useSite, PageMeta, GlobalStyles, SiteHeader, SiteFooter, Icon } from '../components/Site';
import ContactForm from '../components/ContactForm';
import OpsView from '../components/OpsView';

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

// Three problems as a sequence: each stage gets a small schematic
const ART = { line: '#3d5a8f', dim: '#253049', text: '#8b93a1', amber: '#f59e0b', red: '#ef4444', blue: '#5b8def' };
function SceneScattered() {
  const boxes = [[18, 16], [148, 12], [86, 50], [26, 80], [168, 78]];
  return (
    <svg viewBox="0 0 240 120" aria-hidden="true">
      {boxes.map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="48" height="26" rx="4" fill="#0d1526" stroke={ART.line} />
          <circle cx={x + 12} cy={y + 13} r="3" fill={ART.blue} />
          <path d={`M${x + 20} ${y + 13} h18`} stroke={ART.dim} strokeWidth="2" />
        </g>
      ))}
      <g stroke={ART.dim} strokeDasharray="3 4" fill="none">
        <path d="M66 29 L 92 50" /><path d="M148 30 L 136 50" /><path d="M74 92 L 94 78" /><path d="M168 90 L 140 74" />
      </g>
    </svg>
  );
}
function SceneOutOfSync() {
  const frames = [
    { x: 16, y: 14, d: 'M10 44 L30 34 L50 40 L70 22 L90 30', t: '09:12' },
    { x: 68, y: 30, d: 'M10 30 L30 42 L50 26 L70 36 L90 18', t: '09:47' },
    { x: 120, y: 46, d: 'M10 40 L30 20 L50 34 L70 28 L90 44', t: '10:05' }
  ];
  return (
    <svg viewBox="0 0 240 120" aria-hidden="true">
      {frames.map((f, i) => (
        <g key={f.t} transform={`translate(${f.x} ${f.y})`}>
          <rect width="104" height="60" rx="5" fill="#0d1526" stroke={i === 2 ? ART.blue : ART.line} />
          <path d={f.d} fill="none" stroke={i === 2 ? ART.blue : '#4b5a78'} strokeWidth="1.5" />
          <text x="8" y="12" fontSize="8" fill={ART.text} fontFamily="var(--mono)">{f.t}</text>
        </g>
      ))}
    </svg>
  );
}
function SceneTooLate({ tl }) {
  return (
    <svg viewBox="0 0 240 120" aria-hidden="true">
      <rect x="44" y="40" width="86" height="40" fill={ART.blue} opacity="0.08" />
      <path d="M44 40 v40 M130 40 v40" stroke={ART.dim} strokeDasharray="2 3" />
      <text x="87" y="34" fontSize="8.5" fill={ART.text} fontFamily="var(--mono)" textAnchor="middle">{tl.window}</text>
      <path d="M12 80 H 228" stroke={ART.line} strokeWidth="1.5" />
      <circle className="gpulse" cx="44" cy="80" r="5" fill="none" stroke={ART.amber} strokeWidth="1.5" />
      <circle cx="44" cy="80" r="4" fill={ART.amber} />
      <circle cx="130" cy="80" r="9" fill="none" stroke={ART.red} opacity="0.6" />
      <circle cx="130" cy="80" r="4.5" fill={ART.red} />
      <circle cx="212" cy="80" r="4" fill="#0d1526" stroke={ART.text} strokeWidth="1.5" />
      <text x="44" y="102" fontSize="8.5" fill={ART.text} fontFamily="var(--mono)" textAnchor="middle">{tl.signal}</text>
      <text x="130" y="102" fontSize="8.5" fill="#e5e7eb" fontFamily="var(--mono)" textAnchor="middle">{tl.impact}</text>
      <text x="230" y="102" fontSize="8.5" fill={ART.text} fontFamily="var(--mono)" textAnchor="end">{tl.picture}</text>
    </svg>
  );
}
function ProblemSequence({ problems, tl }) {
  const scenes = [<SceneScattered key="a" />, <SceneOutOfSync key="b" />, <SceneTooLate key="c" tl={tl} />];
  return (
    <ol className="sequence">
      {problems.map((p, i) => (
        <li key={p.title} className="seq-step">
          <div className="seq-art">{scenes[i]}</div>
          <p className="seq-num">0{i + 1}</p>
          <h3 className="card-title">{p.title}</h3>
          <p className="body">{p.desc}</p>
        </li>
      ))}
    </ol>
  );
}

// Card icons, same 24px line style as the sector icons
const trustIcons = [
  'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M9 3a4 4 0 100 8 4 4 0 000-8z M16 11l2 2 4-4',
  'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 9a3 3 0 100 6 3 3 0 000-6z',
  'M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z M12 9v4 M12 17h.01',
  'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M8 13h8 M8 17h5',
  'M12 3v18 M5 21h14 M6 7h12 M6 7l-3 7a3 3 0 006 0z M18 7l-3 7a3 3 0 006 0z',
  'M5 11h14v10H5z M8 11V7a4 4 0 018 0v4'
];
const audienceIcons = [
  'M3 21h18 M5 21V7l7-4 7 4v14 M9 10h1 M14 10h1 M9 14h1 M14 14h1 M10 21v-3h4v3',
  'M3 21h18 M4 10h16 M12 3l9 5H3z M6 10v8 M10 10v8 M14 10v8 M18 10v8',
  'M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v6 M12 16v6 M2 12h6 M16 12h6'
];

// Scrolling examples of the AUi loop across sectors: signal, recommendation, human decision
function Ticker({ label, items }) {
  const run = (hidden) => items.map((it, i) => (
    <span key={`${hidden ? 'h' : 'v'}${i}`} className="tk" aria-hidden={hidden || undefined}>
      <b>{it.sector}</b>
      <span>{it.signal}</span>
      <span className="tk-arrow" aria-hidden="true">→</span>
      <span className="tk-action">{it.action}</span>
      <span className={`tk-st tk-${it.state}`}>{it.status}</span>
    </span>
  ));
  return (
    <div className="ticker" role="region" aria-label={label}>
      <span className="ticker-label"><span className="live-dot" aria-hidden="true" /><span className="lbl">{label}</span></span>
      <div className="ticker-track"><div className="ticker-run">{run(false)}{run(true)}</div></div>
    </div>
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
              <g className="globe-pulses">{[[321, 259], [308, 197]].map(([x, y]) => (
                <g key={x}>
                  <circle className="gpulse" cx={x} cy={y} r="6" fill="none" stroke="#5b8def" strokeWidth="1.5" />
                  <circle className="gpulse gpulse-2" cx={x} cy={y} r="6" fill="none" stroke="#5b8def" strokeWidth="1.5" />
                  <circle cx={x} cy={y} r="3.5" fill="#5b8def" />
                </g>
              ))}</g>
            </svg>
          </div>
        </section>

        <Ticker label={t.ticker.label} items={t.ticker.items} />

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
          <ProblemSequence problems={t.mission.problems} tl={t.mission.timeline} />
          <ProblemDiagram from={t.mission.diagram.from} to={t.mission.diagram.to} />
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
            <OpsView m={t.platform.ops} />
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
            <div className="log-card">
              <div className="log-head">
                <p className="log-title">{t.trust.log.title}</p>
                <p className="log-intro">{t.trust.log.intro}</p>
              </div>
              <ol className="log-list">
                {t.trust.log.entries.map((e) => (
                  <li key={e.time} className="log-entry">
                    <span className="log-time">{e.time}</span>
                    <div>
                      <p className="log-what"><strong>{e.kind}</strong> · {e.what}</p>
                      <p className="log-by">{e.by}</p>
                      <div className="log-meta">
                        <span className={`log-status log-${e.state}`}>{e.status}</span>
                        {e.action && <span className="log-action" aria-hidden="true">{e.action}</span>}
                        <span className="log-tag">{t.trust.log.tag}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <figcaption className="shot-caption">{t.trust.log.caption}</figcaption>
          </figure>
          <div className="cols-3">
            {t.trust.cards.map((s, i) => (
              <div key={s.title} className="col col-icon">
                <div className="card-icon"><Icon path={trustIcons[i]} size={20} color="#5b8def" /></div>
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
            {t.serve.audiences.map((a, i) => (
              <div key={a.title} className="col col-icon">
                <div className="card-icon"><Icon path={audienceIcons[i]} size={20} color="#5b8def" /></div>
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
