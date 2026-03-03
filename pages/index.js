import React, { useState, useMemo } from 'react';

const DigitalSpotlight = () => {
  const cols = 22;
  const rows = 40;

  // Static strings to ensure no flickering between layers
  const streams = useMemo(() => 
    [...Array(cols)].map(() => 
      [...Array(rows * 2)].map(() => (Math.random() > 0.5 ? '1' : '0')).join('')
    ), []
  );

  return (
    <div style={{ position: 'relative', width: '380px', height: '420px', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden' }}>
      <style>{`
        @keyframes streamFall {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        @keyframes spotlightMove {
          0% { cx: 20; cy: 20; }
          33% { cx: 80; cy: 50; }
          66% { cx: 30; cy: 80; }
          100% { cx: 20; cy: 20; }
        }
        .falling-data {
          animation: streamFall 80s linear infinite;
        }
      `}</style>

      <svg width="100%" height="100%" viewBox="0 0 100 110" preserveAspectRatio="none">
        <defs>
          {/* THE MASK: This defines where the "Bright" text is visible */}
          <mask id="spotlightMask">
            <circle r="15" fill="white">
              <animate attributeName="cx" values="20;80;30;20" dur="18s" repeatCount="indefinite" />
              <animate attributeName="cy" values="20;50;80;20" dur="18s" repeatCount="indefinite" />
            </circle>
          </mask>
        </defs>

        {/* LAYER 1: The Dark Abyss (Numbers are almost invisible) */}
        <g className="falling-data" opacity="0.05">
          {streams.map((content, i) => (
            <text 
              key={`dark-${i}`} 
              x={5 + i * 4.5} 
              y="0" 
              fill="white" 
              fontSize="2.5" 
              fontFamily="monospace" 
              style={{ writingMode: 'vertical-rl' }}
            >
              {content}
            </text>
          ))}
        </g>

        {/* LAYER 2: The Illumination (Numbers only appear in the mask) */}
        <g className="falling-data" mask="url(#spotlightMask)">
          {streams.map((content, i) => (
            <text 
              key={`light-${i}`} 
              x={5 + i * 4.5} 
              y="0" 
              fill="white" 
              fontSize="2.5" 
              fontFamily="monospace" 
              style={{ writingMode: 'vertical-rl' }}
            >
              {content}
            </text>
          ))}
        </g>

        {/* THE VISUAL GLOW: A soft ring to sell the spotlight effect */}
        <circle r="15" fill="none" stroke="white" strokeWidth="0.2" strokeOpacity="0.3">
          <animate attributeName="cx" values="20;80;30;20" dur="18s" repeatCount="indefinite" />
          <animate attributeName="cy" values="20;50;80;20" dur="18s" repeatCount="indefinite" />
        </circle>
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
        <div style={{ width: '380px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '10%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto 140px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1.5 }}>
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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '-10%', marginTop: '-30px' }}>
          <DigitalSpotlight />
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[01] THE FEED</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Ingesting non-traditional data streams to bypass market lag.</p></div>
          <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Identifying deviations that precede major geopolitical shifts.</p></div>
          <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Intelligence delivered via secure nodes for critical lead time.</p></div>
        </div>
      </section>

      {/* SECTORS SECTION */}
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
