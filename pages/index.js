import React, { useState, useMemo } from 'react';

// OPTIMIZED ORB: Cross-device compatible spotlight
const DataOrb = () => {
  const cols = 22; 
  const rows = 40;

  const streams = useMemo(() => 
    [...Array(cols)].map(() => 
      [...Array(rows * 2)].map(() => (Math.random() > 0.5 ? '1' : '0')).join('\n')
    ), []
  );

  return (
    <div style={{ 
      position: 'relative', 
      width: '330px', 
      height: '330px', 
      backgroundColor: '#000',
      borderRadius: '50%',
      overflow: 'hidden',
      // The "Blur into darkness" edge
      maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
    }}>
      <style>{`
        @keyframes streamFall {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .data-column {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          line-height: 1.2;
          white-space: pre;
          animation: streamFall 60s linear infinite;
          will-change: transform;
        }
        @keyframes spotlightMove {
          0% { -webkit-mask-position: 10% 10%; mask-position: 10% 10%; }
          33% { -webkit-mask-position: 80% 40%; mask-position: 80% 40%; }
          66% { -webkit-mask-position: 30% 80%; mask-position: 30% 80%; }
          100% { -webkit-mask-position: 10% 10%; mask-position: 10% 10%; }
        }
        .signal-layer {
          position: absolute;
          inset: 0;
          display: flex;
          gap: 10px;
          padding: 10px;
          color: #FFFDD0; /* Cream */
          font-weight: bold;
          z-index: 2;
          /* The Surgical Spotlight Mask */
          -webkit-mask-image: radial-gradient(circle 45px at center, black 100%, transparent 100%);
          mask-image: radial-gradient(circle 45px at center, black 100%, transparent 100%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 200% 200%;
          mask-size: 200% 200%;
          animation: spotlightMove 18s infinite ease-in-out;
        }
        .noise-layer {
          position: absolute;
          inset: 0;
          display: flex;
          gap: 10px;
          padding: 10px;
          color: white;
          opacity: 0.14; /* 14% Opacity */
          z-index: 1;
        }
      `}</style>

      {/* Background Noise Layer */}
      <div className="noise-layer">
        {streams.map((content, i) => (
          <div key={i} className="data-column">{content}</div>
        ))}
      </div>

      {/* Foreground Cream Signal Layer */}
      <div className="signal-layer">
        {streams.map((content, i) => (
          <div key={i} className="data-column">{content}</div>
        ))}
      </div>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  const sectors = [
    { name: 'DEFENCE & INTEL', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'MEDIA & DISINFO', path: 'M2 3h20v14H2z M12 17v4' },
    { name: 'ENERGY INFRA', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'HEALTHCARE', path: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' },
    { name: 'LOGISTICS', path: 'M1 3h15v13H1z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z' },
    { name: 'PRIVATE EQUITY', path: 'M12 5c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3z M3 8v11c0 1.66 4.03 3 9 3s9-1.34 9-3V8' },
    { name: 'FINANCE', path: 'M18 20V4 M6 20v-4 M12 20v-10' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '0 20px', overflowX: 'hidden' }}>
      
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 0 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '330px', display: 'flex', justifyContent: 'center', gap: '30px', marginRight: '5%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '40px', marginBottom: '140px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>
              FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
            </h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
              Predictive analytics for high-stakes decision makers. <br />
              <span style={{ color: '#fff' }}>We detect trend breaks first and before impact.</span>
            </p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
              REQUEST SECURE BRIEFING
            </button>
          </div>
          
          <div style={{ flex: '0 0 330px', margin: '0 auto' }}>
            <DataOrb />
          </div>
        </section>

        {/* Operational Methodology */}
        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px' }}>
            <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[01] THE FEED</h3><p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>Ingesting non-traditional data streams to bypass market lag.</p></div>
            <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>Identifying deviations that precede major geopolitical shifts.</p></div>
            <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>Intelligence delivered via secure nodes for critical lead time.</p></div>
          </div>
        </section>

        {/* Operational Sectors */}
        <section id="sectors" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL SECTORS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {sectors.map((s) => (
              <div key={s.name} style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" style={{ marginBottom: '20px' }}><path d={s.path} /></svg>
                <h4 style={{ fontSize: '11px', letterSpacing: '0.1em' }}>{s.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 0', borderTop: '1px solid #111', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
