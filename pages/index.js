import React, { useState, useMemo, useEffect } from 'react';

// THE LIVE SPOTLIGHT: A tighter lens on moving data streams
const DigitalSpotlight = () => {
  const cols = 22;
  const rows = 35;

  return (
    <div style={{ position: 'relative', width: '380px', height: '420px', overflow: 'hidden' }}>
      <style>{`
        @keyframes stream {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .column {
          display: flex;
          flex-direction: column;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.2;
          animation: stream var(--speed) linear infinite;
        }
        @keyframes scanMove {
          0% { left: 20%; top: 20%; }
          25% { left: 70%; top: 30%; }
          50% { left: 40%; top: 70%; }
          75% { left: 60%; top: 50%; }
          100% { left: 20%; top: 20%; }
        }
        .spotlight-circle {
          position: absolute;
          width: 140px; /* Smaller, tighter spotlight */
          height: 140px;
          background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(37,99,235,0.4) 50%, transparent 70%);
          border-radius: 50%;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 2;
          filter: blur(8px);
          animation: scanMove 12s infinite ease-in-out;
        }
      `}</style>

      {/* The Moving Spotlight Layer */}
      <div className="spotlight-circle"></div>

      {/* The Binary Matrix */}
      <div style={{ display: 'flex', gap: '8px', opacity: 0.2, color: '#2563eb' }}>
        {[...Array(cols)].map((_, i) => (
          <div 
            key={i} 
            className="column" 
            style={{ '--speed': `${Math.random() * 5 + 3}s`, opacity: Math.random() * 0.5 + 0.5 }}
          >
            {[...Array(rows * 2)].map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>

      {/* The Highlighted Layer (revealed via blend mode) */}
      <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', gap: '8px', opacity: 0.8, color: 'white', pointerEvents: 'none' }}>
        {[...Array(cols)].map((_, i) => (
          <div 
            key={i} 
            className="column" 
            style={{ '--speed': `${Math.random() * 5 + 3}s` }}
          >
            {[...Array(rows * 2)].map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      {/* Centered Navigation Alignment */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '380px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '10%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto 160px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1.5 }}>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 76px)', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.05em', marginBottom: '40px' }}>
            FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
          </h1>
          <p style={{ color: '#9ca3af', maxWidth: '520px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
            Predictive analytics for high-stakes decision makers. <br />
            <span style={{ color: '#fff' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</span>
          </p>
          <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
            REQUEST SECURE BRIEFING
          </button>
        </div>
        
        {/* The Digital Spotlight Container */}
        <div style={{ width: '380px', flexShrink: 0, display: 'flex', justifyContent: 'center', marginRight: '10%', marginTop: '-30px' }}>
          <DigitalSpotlight />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          <div>
            <h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[01] THE FEED</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Ingesting non-traditional data streams to bypass market lag.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[02] PATTERN ISOLATION</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Identifying deviations that precede major geopolitical shifts.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[03] ADVISORY DELIVERY</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Intelligence delivered via secure nodes for critical lead time.</p>
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: '1200px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
