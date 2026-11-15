import React from 'react';

// Illustrative AUi Terminal operating picture: the scenario layer is drawn in code over a
// muted IGN base map of the Arcachon basin. Copy comes from content/site.js (platform.ops).
const C = { line: '#5b8def', text: '#cbd5e1', hi: '#f1f5f9', red: '#ef4444', orange: '#f97316', amber: '#f59e0b', teal: '#2dd4bf', green: '#22c55e', blue: '#5b8def', halo: '#05080f' };

// Points in base-map pixels (800 × 540), projected from the scenario's coordinates
const P = { inc: [338, 410], cazaux: [301, 480], sea: [214, 427], lacanau: [319, 60] };

// Two framings of the same map: the full view, and a tighter crop with larger labels for phones
const LAYOUTS = {
  wide: { view: [0, 0, 800, 540], fs: 11, air: [478, 318], scale: [36, 506], credit: [752, 530], waterLow: 'left',
    sources: [[600, 70], [600, 300], [520, 498], [40, 250]] },
  narrow: { view: [170, 240, 480, 300], fs: 15, air: [520, 300], scale: [520, 528], credit: [646, 534], waterLow: 'right',
    sources: [[420, 258], [470, 326], [470, 380], [186, 270]] }
};

function OpsMap({ m, variant }) {
  const L = LAYOUTS[variant];
  const [vx, vy, vw] = L.view;
  const right = vx + vw;
  const cw = L.fs * 0.6; // monospace character width
  const [ix, iy] = P.inc;
  const id = `arrow-${variant}`;
  // Labels carry a dark halo so they stay legible over the map
  const label = (x, y, text, fill = C.text, anchor) => (
    <text x={x} y={y} fontSize={L.fs} fill={fill} fontFamily="var(--mono)" textAnchor={anchor} stroke={C.halo} strokeWidth={L.fs * 0.32} strokeLinejoin="round" paintOrder="stroke">{text}</text>
  );
  return (
    <svg className={`ops-map ops-map-${variant}`} viewBox={L.view.join(' ')} preserveAspectRatio={variant === 'wide' ? 'xMidYMid slice' : 'xMidYMid meet'} role="img" aria-label={m.aria}>
      <image href="/ops-basemap.webp" x="0" y="0" width="800" height="540" preserveAspectRatio="none" />
      <rect x="0" y="0" width="800" height="540" fill="#05080f" opacity="0.18" />
      {/* Sector boundary */}
      <path d="M262 352 L470 336 L508 470 L430 534 L268 528 Z" fill="rgba(91,141,239,0.05)" stroke={C.line} strokeDasharray="4 6" strokeOpacity="0.85" />
      {label(variant === 'wide' ? 392 : 384, variant === 'wide' ? 378 : 352, m.sector, C.hi)}
      {/* Predicted spread (+2 h), downwind of a north-westerly */}
      <ellipse cx="386" cy="438" rx="78" ry="44" transform="rotate(28 386 438)" fill="rgba(245,158,11,0.08)" stroke={C.amber} strokeDasharray="3 5" />
      {/* Fire perimeter and spread direction */}
      <path d={`M${ix - 26} ${iy - 12} L${ix + 12} ${iy - 20} L${ix + 28} ${iy + 2} L${ix + 16} ${iy + 22} L${ix - 14} ${iy + 22} L${ix - 30} ${iy + 4} Z`} fill="rgba(249,115,22,0.22)" stroke={C.orange} strokeWidth="1.5" />
      <defs><marker id={id} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill={C.orange} /></marker></defs>
      <path d={`M${ix + 18} ${iy + 10} L ${ix + 62} ${iy + 40}`} stroke={C.orange} strokeWidth="2" markerEnd={`url(#${id})`} />
      {/* Sensitive sites */}
      {[[424, 470, m.sites[0]], [452, 430, m.sites[1]]].map(([x, y, l]) => (
        <g key={l}><circle cx={x} cy={y} r="5" fill={C.amber} stroke={C.halo} strokeWidth="1.5" />{label(x + 10, y + L.fs * 0.35, l)}</g>
      ))}
      {/* Water point B below threshold, with the scooping detour to the sea */}
      <path d={`M${P.cazaux[0]} ${P.cazaux[1]} L ${P.sea[0]} ${P.sea[1]}`} stroke={C.amber} strokeWidth="2" strokeDasharray="5 4" />
      <circle cx={P.sea[0]} cy={P.sea[1]} r="4" fill="none" stroke={C.amber} strokeWidth="1.5" />
      <path d={`M${P.cazaux[0]} ${P.cazaux[1] - 10} l10 10 -10 10 -10 -10 z`} fill={C.red} stroke={C.halo} strokeWidth="1.5" />
      {L.waterLow === 'left'
        ? label(P.cazaux[0] - 16, P.cazaux[1] + L.fs * 0.35, m.waterLow, C.hi, 'end')
        : label(176, P.cazaux[1] + 30, m.waterLow, C.hi)}
      {/* Water point A */}
      <path d={`M${P.lacanau[0]} ${P.lacanau[1] - 9} l9 9 -9 9 -9 -9 z`} fill={C.teal} stroke={C.halo} strokeWidth="1.5" />
      {label(P.lacanau[0] - 16, P.lacanau[1] + L.fs * 0.35, m.waterOk, C.hi, 'end')}
      {/* Aircraft inbound */}
      <path d={`M${L.air[0]} ${L.air[1]} L ${ix + 14} ${iy - 14}`} stroke={C.teal} strokeWidth="1.2" strokeDasharray="2 4" />
      <g transform={`translate(${L.air[0]} ${L.air[1]})`}><circle r="11" fill="#0d2a2a" stroke={C.teal} /><path d="M5 -1 L-5 4 L-2 -1 L-5 -5 Z" fill={C.teal} /></g>
      {label(L.air[0] + 16, L.air[1] + L.fs * 0.35, m.air, C.hi)}
      {/* Confirming sources, each chip kept inside the frame */}
      {m.sources.map((text, i) => {
        const ok = i < 3;
        const w = text.length * cw + 30;
        const h = L.fs + 13;
        const x = Math.max(vx + 4, Math.min(L.sources[i][0], right - w - (variant === 'wide' ? 44 : 4)));
        const y = L.sources[i][1];
        return (
          <g key={text}>
            <path className={ok ? 'ops-link' : ''} d={`M${ix} ${iy} L ${x + w / 2} ${y}`} stroke={ok ? C.blue : '#6b7280'} strokeWidth="1.3" strokeDasharray={ok ? '4 6' : '2 5'} fill="none" />
            <rect x={x} y={y - h / 2} width={w} height={h} rx="4" fill="#0b1220" fillOpacity="0.94" stroke={ok ? C.blue : '#4b5563'} />
            <circle cx={x + 12} cy={y} r="3.5" fill={ok ? C.green : '#6b7280'} />
            <text x={x + 22} y={y + L.fs * 0.35} fontSize={L.fs} fill={ok ? C.hi : '#9ca3af'} fontFamily="var(--mono)">{text}</text>
          </g>
        );
      })}
      {/* Incident */}
      <circle className="gpulse" cx={ix} cy={iy} r="8" fill="none" stroke={C.red} strokeWidth="2" />
      <circle cx={ix} cy={iy} r="7" fill={C.red} stroke="#fff" strokeWidth="2" />
      <g transform={`translate(${ix - 44 - L.fs * 2.4} ${iy})`}>
        <rect x={-(L.fs * 2.4)} y={-(L.fs / 2 + 6)} width={L.fs * 4.8} height={L.fs + 12} rx="4" fill="#0b1220" stroke={C.teal} />
        <text x="0" y={L.fs * 0.35} fontSize={L.fs} fill={C.teal} fontFamily="var(--mono)" textAnchor="middle">✓ 3/4</text>
      </g>
      {/* Scale (10 km at this zoom) and map credit */}
      <path d={`M${L.scale[0]} ${L.scale[1]} h78 M${L.scale[0]} ${L.scale[1] - 5} v10 M${L.scale[0] + 78} ${L.scale[1] - 5} v10`} stroke={C.text} />
      {label(L.scale[0], L.scale[1] - 10, '10 km')}
      <text x={L.credit[0]} y={L.credit[1]} fontSize={variant === 'wide' ? 9 : 11} fill="#94a3b8" fontFamily="var(--mono)" textAnchor="end">© IGN</text>
    </svg>
  );
}

export default function OpsView({ m }) {
  return (
    <div className="ops">
      <div className="ops-bar">
        <span className="ops-brand"><span className="ops-dot" /><span>{m.title.split(' · ')[0]}<span className="ops-view"> · {m.title.split(' · ')[1]}</span></span></span>
        <span className="ops-bar-right">
          <span className="ops-chip">● {m.active}</span>
          <span className="ops-clock">23:20 UTC</span>
        </span>
      </div>

      <div className="ops-kpis">
        {m.kpis.map((k, i) => (
          <div key={k.label} className="ops-kpi">
            <p className="ops-label">{k.label}</p>
            <p className="ops-value">{k.value}</p>
            {i === 1
              ? <span className="ops-bars" aria-hidden="true">{[1, 1, 1, 0].map((on, j) => <i key={j} className={on ? 'on' : ''} />)}</span>
              : <p className="ops-sub">{k.sub}</p>}
          </div>
        ))}
      </div>

      <div className="ops-main">
        <div className="ops-mapwrap">
          <OpsMap m={m.map} variant="wide" />
          <OpsMap m={m.map} variant="narrow" />
          <div className="ops-legend">
            {m.legend.map(([c, l]) => <span key={l}><i style={{ background: c }} />{l}</span>)}
          </div>
        </div>
        <aside className="ops-side">
          <p className="ops-label">{m.recsLabel}</p>
          <ol className="ops-recs">
            {m.recs.map((r, i) => (
              <li key={r.title} className="ops-rec">
                <div className="ops-rec-top"><span className="ops-rank">{i + 1}</span><span className="ops-rec-title">{r.title}</span></div>
                <p className="ops-why">{r.why}</p>
                <div className="ops-rec-meta">
                  <span className="ops-conf"><span className="ops-confbar"><i style={{ width: `${r.conf}%` }} /></span>{r.conf}%</span>
                  <span className={`ops-state ops-${r.state}`}>{r.status}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="ops-label ops-label-gap">{m.sourcesLabel}</p>
          <ul className="ops-sources">
            {m.sourceStatus.map(([l, s, st]) => <li key={l}><span>{l}</span><span className={`ops-s ops-s-${s}`}>● {st}</span></li>)}
          </ul>
        </aside>
      </div>
    </div>
  );
}
