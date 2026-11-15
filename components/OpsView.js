import React from 'react';

// Illustrative AUi Terminal operating picture, drawn in code: no real geography,
// no named data providers. Copy comes from content/site.js (platform.ops).
const C = { grid: '#0e1524', land: '#0a101b', sea: '#05080f', coast: '#22324f', contour: '#111a2b', road: '#172133', line: '#3d5a8f', text: '#aab2bf', hi: '#e5e7eb', red: '#ef4444', orange: '#f97316', amber: '#f59e0b', teal: '#2dd4bf', green: '#22c55e', blue: '#5b8def' };

// Two layouts of the same scene: the full map, and a tighter crop with larger labels for phones
const LAYOUTS = {
  wide: { view: [0, 0, 800, 540], fs: 11, air: [700, 136], scale: [48, 506], sources: [[662, 64], [636, 258], [560, 452], [290, 490]] },
  narrow: { view: [200, 30, 580, 500], fs: 19, air: [684, 112], scale: [216, 512], sources: [[560, 64], [556, 270], [520, 430], [300, 486]] }
};

function OpsMap({ m, variant }) {
  const L = LAYOUTS[variant];
  const [vx, vy, vw, vh] = L.view;
  const right = vx + vw;
  const cw = L.fs * 0.6; // monospace character width
  const inc = [430, 196];
  const id = `arrow-${variant}`;
  const label = (x, y, text, fill = C.text, anchor) => (
    <text x={x} y={y} fontSize={L.fs} fill={fill} fontFamily="var(--mono)" textAnchor={anchor}>{text}</text>
  );
  return (
    <svg className={`ops-map ops-map-${variant}`} viewBox={L.view.join(' ')} preserveAspectRatio={variant === 'wide' ? 'xMidYMid slice' : 'xMidYMid meet'} role="img" aria-label={m.aria}>
      <rect x={vx} y={vy} width={vw} height={vh} fill={C.land} />
      <g stroke={C.grid}>
        {Array.from({ length: 19 }, (_, i) => <path key={`v${i}`} d={`M${(i + 1) * 40} 0 V540`} />)}
        {Array.from({ length: 13 }, (_, i) => <path key={`h${i}`} d={`M0 ${(i + 1) * 40} H800`} />)}
      </g>
      {/* Coast and sea */}
      <path d="M0 0 H262 C 248 80, 232 140, 244 200 C 254 250, 212 300, 222 360 C 228 410, 206 460, 196 540 H0 Z" fill={C.sea} stroke={C.coast} strokeWidth="1.5" />
      {/* Relief and roads */}
      <g fill="none" stroke={C.contour}>
        <path d="M300 20 C 380 60, 470 30, 560 70 S 720 60, 800 100" /><path d="M290 110 C 360 140, 480 100, 600 150 S 740 160, 800 190" />
        <path d="M280 300 C 380 270, 470 330, 600 300 S 740 330, 800 320" /><path d="M260 380 C 360 360, 500 420, 640 380 S 760 400, 800 410" />
        <path d="M240 470 C 360 450, 520 500, 660 470 S 770 480, 800 490" />
      </g>
      <g fill="none" stroke={C.road} strokeWidth="2"><path d="M262 120 L 470 250 L 800 230" /><path d="M520 0 L 560 180 L 520 540" /><path d="M240 330 L 420 300 L 600 330" /></g>
      {/* Sector boundary */}
      <path d="M300 64 L566 44 L626 206 L524 304 L320 286 Z" fill="none" stroke={C.line} strokeDasharray="4 6" />
      {label(308, 64 + L.fs + 8, m.sector)}
      {/* Predicted spread (+2 h) */}
      <ellipse cx="470" cy="172" rx="96" ry="58" transform="rotate(-18 470 172)" fill="rgba(245,158,11,0.05)" stroke={C.amber} strokeDasharray="3 5" strokeOpacity="0.7" />
      {/* Fire perimeter and spread direction */}
      <path d="M408 178 L448 172 L466 196 L450 220 L416 218 L400 200 Z" fill="rgba(249,115,22,0.16)" stroke={C.orange} strokeWidth="1.5" />
      <defs><marker id={id} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill={C.orange} /></marker></defs>
      <path d="M452 186 L 510 150" stroke={C.orange} strokeWidth="2" markerEnd={`url(#${id})`} />
      {/* Sensitive sites */}
      {[[520, 132, m.sites[0]], [548, 186, m.sites[1]]].map(([x, y, l]) => (
        <g key={l}><circle cx={x} cy={y} r="5" fill={C.amber} />{label(x + 10, y + L.fs * 0.35, l)}</g>
      ))}
      {/* Water points and scooping detour */}
      <path d="M342 334 L 222 312" stroke={C.amber} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M342 324 l10 10 -10 10 -10 -10 z" fill={C.red} />
      {label(358, 334 + L.fs * 0.35, m.waterLow)}
      <path d="M612 382 l9 9 -9 9 -9 -9 z" fill={C.teal} />
      {label(626, 391 + L.fs * 0.35, m.waterOk)}
      {/* Aircraft */}
      <g transform={`translate(${L.air[0]} ${L.air[1]})`}><circle r="11" fill="#0d2a2a" stroke={C.teal} /><path d="M-5 1 L5 -4 L2 1 L5 5 Z" fill={C.teal} /></g>
      {label(L.air[0] + 16, L.air[1] + L.fs * 0.35, m.air)}
      {/* Confirming sources, each chip kept inside the frame */}
      {m.sources.map((text, i) => {
        const ok = i < 3;
        const w = text.length * cw + 30;
        const h = L.fs + 13;
        const x = Math.min(L.sources[i][0], right - w - (variant === 'wide' ? 44 : 4));
        const y = L.sources[i][1];
        return (
          <g key={text}>
            <path className={ok ? 'ops-link' : ''} d={`M${inc[0]} ${inc[1]} L ${x + w / 2} ${y}`} stroke={ok ? C.blue : '#4b5563'} strokeWidth="1.2" strokeDasharray={ok ? '4 6' : '2 5'} strokeOpacity={ok ? 0.9 : 0.7} fill="none" />
            <rect x={x} y={y - h / 2} width={w} height={h} rx="4" fill="#0b1220" stroke={ok ? C.blue : '#374151'} />
            <circle cx={x + 12} cy={y} r="3.5" fill={ok ? C.green : '#6b7280'} />
            {label(x + 22, y + L.fs * 0.35, text, ok ? C.hi : C.text)}
          </g>
        );
      })}
      {/* Incident */}
      <circle className="gpulse" cx={inc[0]} cy={inc[1]} r="8" fill="none" stroke={C.red} strokeWidth="2" />
      <circle cx={inc[0]} cy={inc[1]} r="7" fill={C.red} stroke="#fff" strokeWidth="2" />
      <g transform={`translate(${inc[0]} ${inc[1] + 22 + L.fs / 2})`}>
        <rect x={-(L.fs * 2.4)} y={-(L.fs / 2 + 6)} width={L.fs * 4.8} height={L.fs + 12} rx="4" fill="#0b1220" stroke={C.teal} />
        {label(0, L.fs * 0.35, '✓ 3/4', C.teal, 'middle')}
      </g>
      {/* Scale */}
      <path d={`M${L.scale[0]} ${L.scale[1]} h80 M${L.scale[0]} ${L.scale[1] - 5} v10 M${L.scale[0] + 80} ${L.scale[1] - 5} v10`} stroke={C.text} />
      {label(L.scale[0], L.scale[1] - 10, '5 km')}
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
