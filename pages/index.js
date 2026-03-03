import React, { useState, useMemo } from 'react';

// THE GLOBAL DATA ORB: High-fidelity dotted world map
const WorldDataOrb = () => {
  // A high-resolution bitmask to render the map based on the guide image
  const mapData = [
    "0000000000000000000000000000000000000000",
    "0000001111110000000000001111111111000000",
    "000111111111100000011111111111111110000",
    "001111111111000001111111111111111111000",
    "011111111111000011111111111111111111100",
    "011111111110000001111111111111111111000",
    "000011111100000000111111111111111110000",
    "000011110000000000011111111111111100000",
    "000011000000000000000111111111111000000",
    "000000000000000000000111111111100000000",
    "000000000000000000000111111110000000000",
    "000000000000000000000011111000000000000"
  ];

  const cols = 40;
  const rows = 12;

  return (
    <div className="orb-container">
      <style>{`
        .orb-container { 
          position: relative; width: 340px; height: 340px; background-color: #000; border-radius: 50%; overflow: hidden; 
          -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%); 
          mask-image: radial-gradient(circle, black 70%, transparent 100%); 
        }
        @media (max-width: 1024px) { 
          .orb-container { width: 260px; height: 260px; margin: 40px auto; } 
        }
        @keyframes scanMove { 
          0% { transform: translate(-20%, -20%); opacity: 0.8; } 
          50% { transform: translate(20%, 20%); opacity: 1; } 
          100% { transform: translate(-20%, -20%); opacity: 0.8; } 
        }
        .spotlight {
          position: absolute; width: 120px; height: 120px;
          background: radial-gradient(circle, rgba(255,253,208,0.4) 0%, transparent 70%);
          animation: scanMove 10s infinite ease-in-out;
          pointer-events: none; z-index: 3;
        }
      `}</style>
      
      {/* THE SEARCHLIGHT OVERLAY */}
      <div className="spotlight" />

      <svg width="100%" height="100%" viewBox="0 0 40 15" preserveAspectRatio="xMidYMid meet" style={{ padding: '20px' }}>
        <defs>
          <mask id="globalMask">
            <circle r="6" fill="white">
              <animate attributeName="cx" values="10;30;20;10" dur="12s" repeatCount="indefinite" />
              <animate attributeName="cy" values="4;10;6;4" dur="12s" repeatCount="indefinite" />
            </circle>
          </mask>
        </defs>

        {/* BACKGROUND NOISE: The Dotted Map (45% Opacity) */}
        <g opacity="0.45">
          {mapData.map((row, y) => row.split('').map((bit, x) => (
            bit === '1' && <circle key={`noise-${x}-${y}`} cx={x} cy={y} r="0.35" fill="white" />
          )))}
        </g>

        {/* HIGHLIGHTED SIGNAL: The Cream Reveal (100% Opacity) */}
        <g mask="url(#globalMask)">
          {mapData.map((row, y) => row.split('').map((bit, x) => (
            bit === '1' && (
              <circle key={`signal-${x}-${y}`} cx={x} cy={y} r="0.45" fill="#FFFDD0">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
            )
          )))}
        </g>
      </svg>
    </div>
  );
};

// ... (Maintain previous Header, Methodology with OperationalFlow, and Footer code)

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);
  
  // Methodology Step 04 Visual
  const OperationalFlow = () => {
    const steps = ["MONITOR", "DETECT", "ANALYZE", "ALERT"];
    return (
      <div style={{ paddingLeft: '20px', borderLeft: '1px solid #1f2937', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', opacity: 0.4 + (i * 0.2) }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: i === 3 ? '#FFFDD0' : 'white', marginRight: '15px', boxShadow: i === 3 ? '0 0 10px #FFFDD0' : 'none' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: i === 3 ? '#FFFDD0' : 'white', fontWeight: i === 3 ? 'bold' : 'normal' }}>STEP_0{i + 1}</span>
              <span style={{ fontSize: '12px', letterSpacing: '0.1em', color: i === 3 ? '#FFFDD0' : 'white' }}>{step}</span>
            </div>
            {i < 3 && <div style={{ position: 'absolute', height: '25px', width: '1px', backgroundColor: 'white', opacity: 0.2, marginLeft: '3.5px', marginTop: '38px' }} />}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 0 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '60px' }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>AUTHENTIC INTELLIGENCE</strong>
        <nav style={{ display: 'flex', gap: '40px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section className="hero-section">
          <style>{`
            .hero-section { position: relative; margin-top: 140px; margin-bottom: 140px; min-height: 450px; }
            .hero-graphic { position: absolute; top: 35%; left: 75%; transform: translate(-50%, -50%); z-index: 1; }
            @media (max-width: 1024px) {
              .hero-section { display: flex; flex-direction: column; align-items: flex-start; margin-top: 80px; }
              .hero-graphic { position: relative; top: 0; left: 0; transform: none; width: 100%; display: flex; justify-content: center; margin-top: 40px; }
            }
          `}</style>
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>Predictive analytics for high-stakes decision makers.</p>
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>REQUEST SECURE BRIEFING</button>
          </div>
          <div className="hero-graphic"><WorldDataOrb /></div>
        </section>

        {/* Methodology Section with Step 04 */}
        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            <style>{` @media (max-width: 1024px) { #method-grid { grid-template-columns: 1fr !important; } } `}</style>
            <div id="method-grid" style={{ display: 'contents' }}>
              <div><h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[01] THE FEED</h3><p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Raw Ingestion.</p><p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>Ingesting peripheral nodes—geopolitical shifts and disruptions—before they reach market lag.</p></div>
              <div><h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Anomalous Detection.</p><p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>Our proprietary logic filters the abyss to isolate anomalies that represent warning signs of volatility.</p></div>
              <div><h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Zero-Latency Access.</p><p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>Insights delivered via secure channels, giving decision-makers a window of opportunity to position before impact.</p></div>
              <OperationalFlow />
            </div>
          </div>
        </section>
      </main>

      {/* Modal and Footer follow... */}
    </div>
  );
}
