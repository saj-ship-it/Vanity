import React, { useState, useMemo } from 'react';

// THE REFINED ORB: GPU-Accelerated, 14% Noise, Cream Signal
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
      WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
      maskImage: 'radial-gradient(circle, black 65%, transparent 100%)'
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
          animation: streamFall 70s linear infinite;
          will-change: transform;
        }
        @keyframes spotlightMove {
          0% { -webkit-mask-position: 15% 15%; mask-position: 15% 15%; }
          33% { -webkit-mask-position: 85% 35%; mask-position: 85% 35%; }
          66% { -webkit-mask-position: 25% 85%; mask-position: 25% 85%; }
          100% { -webkit-mask-position: 15% 15%; mask-position: 15% 15%; }
        }
        .signal-layer {
          position: absolute;
          inset: 0;
          display: flex;
          gap: 10px;
          padding: 10px;
          color: #FFFDD0; /* CREAM SIGNAL */
          font-weight: bold;
          z-index: 2;
          -webkit-mask-image: radial-gradient(circle 40px at center, black 100%, transparent 100%);
          mask-image: radial-gradient(circle 40px at center, black 100%, transparent 100%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 200% 200%;
          animation: spotlightMove 20s infinite ease-in-out;
        }
        .noise-layer {
          position: absolute;
          inset: 0;
          display: flex;
          gap: 10px;
          padding: 10px;
          color: white;
          opacity: 0.14; /* 14% NOISE */
          z-index: 1;
        }
      `}</style>

      <div className="noise-layer">
        {streams.map((content, i) => (
          <div key={i} className="data-column">{content}</div>
        ))}
      </div>

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
            
            {/* ADDED MARGIN-BOTTOM FOR SEPARATION */}
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
              Predictive analytics for high-stakes decision makers.
            </p>
            
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
              We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.
            </p>

            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
              REQUEST SECURE BRIEFING
            </button>
          </div>
          
          <div style={{ flex: '0 0 330px', margin: '0 auto', transform: 'translateY(-20px)' }}>
            <DataOrb />
          </div>
        </section>

        {/* Operational Methodology */}
        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px' }}>
            <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[01] THE FEED</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Ingesting non-traditional data streams to bypass market lag.</p></div>
            <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Identifying deviations that precede major geopolitical shifts.</p></div>
            <div><h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Intelligence delivered via secure nodes for critical lead time.</p></div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 0', borderTop: '1px solid #111', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
