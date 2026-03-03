import React, { useState, useMemo } from 'react';

// THE ORB: A circular field of falling binary data with a surgical lemon-yellow reveal
const DataOrb = () => {
  const cols = 32; 
  const rows = 60;

  const streams = useMemo(() => 
    [...Array(cols)].map(() => 
      [...Array(rows)].map(() => (Math.random() > 0.5 ? '1' : '0'))
    ), []
  );

  return (
    <div style={{ position: 'relative', width: '480px', height: '550px', backgroundColor: 'transparent' }}>
      <style>{`
        @keyframes streamFall {
          0% { transform: translateY(-33%); }
          100% { transform: translateY(0%); }
        }
        .falling-data {
          animation: streamFall 70s linear infinite;
        }
      `}</style>

      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* THE CIRCULAR BOUNDARY: Clips the entire stream into a circle */}
          <clipPath id="orbClip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>

          {/* THE SPOTLIGHT: Surgical signal detection radius */}
          <mask id="spotlightMask">
            <circle r="7" fill="white">
              <animate attributeName="cx" values="25;75;35;25" dur="18s" repeatCount="indefinite" />
              <animate attributeName="cy" values="25;55;85;25" dur="18s" repeatCount="indefinite" />
            </circle>
          </mask>
        </defs>

        {/* Apply the circular clip to the entire group */}
        <g clipPath="url(#orbClip)">
          {/* THE NOISE: Faint White Background (18% visibility) */}
          <g className="falling-data" opacity="0.18">
            {streams.map((column, i) => (
              <g key={`noise-col-${i}`} transform={`translate(${2 + i * 3}, 0)`}>
                {column.map((char, j) => (
                  <text key={`noise-char-${j}`} y={j * 4} fill="white" fontSize="3" fontFamily="monospace" textAnchor="middle">{char}</text>
                ))}
              </g>
            ))}
          </g>

          {/* THE SIGNAL: Lemon Yellow Reveal (Revealed by Mask) */}
          <g className="falling-data" mask="url(#spotlightMask)">
            {streams.map((column, i) => (
              <g key={`signal-col-${i}`} transform={`translate(${2 + i * 3}, 0)`}>
                {column.map((char, j) => (
                  <text key={`signal-char-${j}`} y={j * 4} fill="#FFFF00" fontSize="3.3" fontWeight="bold" fontFamily="monospace" textAnchor="middle">{char}</text>
                ))}
              </g>
            ))}
          </g>
        </g>

        {/* Subtle Outer Edge: A thin rim to define the orb */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />
      </svg>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  const sectors = [
    { name: 'DEFENCE & INTEL', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'MEDIA & DISINFO', icon: 'M2 3h20v14H2z M12 17v4' },
    { name: 'ENERGY INFRA', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'HEALTHCARE', icon: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' },
    { name: 'LOGISTICS', icon: 'M1 3h15v13H1z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z' },
    { name: 'PRIVATE EQUITY', icon: 'M12 5c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3z M3 8v11c0 1.66 4.03 3 9 3s9-1.34 9-3V8' },
    { name: 'FINANCE', icon: 'M18 20V4 M6 20v-4 M12 20v-10' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      <nav style={{ maxWidth: '1200px', margin: '0 auto 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '480px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '5%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto 140px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1.2 }}>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>
            FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
          </h1>
          <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
            Predictive analytics for high-stakes decision makers. <br />
            <span style={{ color: '#fff' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</span>
          </p>
          <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
            REQUEST SECURE BRIEFING
          </button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%', marginTop: '-50px' }}>
          <DataOrb />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[01] THE FEED</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Ingesting non-traditional data streams to bypass market lag.</p></div>
          <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Identifying deviations that precede major geopolitical shifts.</p></div>
          <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Intelligence delivered via secure nodes for critical lead time.</p></div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL SECTORS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {sectors.map((s) => (
            <div key={s.name} style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" style={{ marginBottom: '20px' }}><path d={s.icon} /></svg>
              <h4 style={{ fontSize: '12px', letterSpacing: '0.1em' }}>{s.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ maxWidth: '1200px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
