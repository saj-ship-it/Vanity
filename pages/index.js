import React, { useState, useMemo } from 'react';

// THE DIGITAL SPOTLIGHT: Finding Signal in the Binary Abyss
const DigitalSpotlight = () => {
  // Generate a fixed matrix of binary data (over 1000 characters)
  const binaryGrid = useMemo(() => {
    const rows = 40;
    const cols = 25;
    return [...Array(rows)].map((_, r) => 
      [...Array(cols)].map(() => (Math.random() > 0.5 ? '1' : '0')).join(' ')
    );
  }, []);

  return (
    <div style={{ position: 'relative', width: '380px', height: '420px' }}>
      <style>{`
        @keyframes spotlightScan {
          0% { cx: 20%; cy: 20%; r: 15%; opacity: 0.8; }
          30% { cx: 80%; cy: 40%; r: 25%; opacity: 1; }
          60% { cx: 40%; cy: 80%; r: 20%; opacity: 0.9; }
          100% { cx: 20%; cy: 20%; r: 15%; opacity: 0.8; }
        }
        .data-stream { fill: #2563eb; }
        .highlighted-data { fill: #fff; filter: drop-shadow(0 0 8px white); }
      `}</style>

      <svg width="380" height="420" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* The Moving Spotlight Filter */}
          <radialGradient id="dataSpotlight" gradientUnits="userSpaceOnUse">
            <animate attributeName="cx" values="20%;80%;40%;20%" dur="15s" repeatCount="indefinite" />
            <animate attributeName="cy" values="20%;40%;80%;20%" dur="15s" repeatCount="indefinite" />
            <animate attributeName="r" values="15%;25%;20%;15%" dur="15s" repeatCount="indefinite" />
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
          </radialGradient>
          
          {/* Mask to apply the spotlight only where code exists */}
          <mask id="spotlightMask">
            <rect width="100%" height="100%" fill="url(#dataSpotlight)" />
          </mask>
        </defs>

        {/* The Abyss: Domant, overwheming Data (Blue) */}
        <g className="data-stream" fontSize="3px" fontFamily="monospace" fillOpacity="0.15">
          {binaryGrid.map((rowText, i) => (
            <text key={i} x="5" y={8 + i * 2.8}>{rowText}</text>
          ))}
        </g>

        {/* The Authentic Intelligence: Illumination (White) */}
        <g className="highlighted-data" fontSize="3px" fontFamily="monospace" mask="url(#spotlightMask)">
          {binaryGrid.map((rowText, i) => (
            <text key={`h-${i}`} x="5" y={8 + i * 2.8}>{rowText}</text>
          ))}
        </g>
        
        {/* Subtle crosshairs to emphasize the "Targeting" nature */}
        <g stroke="white" strokeWidth="0.1" strokeOpacity="0.2" filter="url(#dataSpotlight)">
          <line x1="10" y1="10" x2="90" y2="10" />
          <line x1="10" y1="110" x2="90" y2="110" />
          <line x1="10" y1="10" x2="10" y2="110" />
          <line x1="90" y1="10" x2="90" y2="110" />
        </g>
      </svg>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  const methodology = [
    { title: 'THE FEED', desc: 'Ingesting non-traditional data streams to bypass market lag.', icon: 'FEED' },
    { title: 'PATTERN ISOLATION', desc: 'Identifying deviations that precede major geopolitical shifts.', icon: 'PATTERN' },
    { title: 'ADVISORY DELIVERY', desc: 'Intelligence delivered via secure nodes for critical lead time.', icon: 'ADVISORY' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      {/* Navigation Calibration: Shifted 12% Right from previous to correct the text void */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '380px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '12%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 160px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1.4 }}>
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
        
        {/* The Digital Spotlight Container (Locked to Nav Axis) */}
        <div style={{ width: '380px', flexShrink: 0, display: 'flex', justifyContent: 'center', marginRight: '12%', marginTop: '-30px' }}>
          <DigitalSpotlight />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          {methodology.map((m, i) => (
            <div key={i}>
              <h3 style={{ fontSize: '14px', margin: '0 0 15px' }}>[0{i+1}] {m.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8', maxWidth: '300px' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DNS finalize instruction remains active */}
      <footer style={{ maxWidth: '1200px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
