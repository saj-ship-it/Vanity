import React, { useState, useMemo } from 'react';

// HIGH-FIDELITY GEOGRAPHIC MASK DATA
const WorldMapMask = () => (
  <path d="M15,35 c2,-5 15,-10 25,-5 c5,2 8,15 5,25 c-5,10 -20,15 -30,5 Z M70,25 c10,-10 40,-5 55,10 c15,15 10,40 -10,50 c-20,10 -50,5 -65,-10 Z M140,40 c10,-5 25,0 25,15 c0,15 -10,25 -25,20 Z M45,75 c10,5 10,20 0,30 c-10,10 -25,5 -25,-10 Z M110,85 c5,0 15,5 15,15 c0,10 -10,15 -20,10 Z" fill="white" />
);

const BinaryWorldMap = () => {
  const binaryGrid = useMemo(() => {
    const points = [];
    // Ultra-dense grid for high-end "dotted" resolution
    for (let x = 0; x <= 200; x += 3.5) {
      for (let y = 0; y <= 110; y += 4.5) {
        points.push({ x, y, val: Math.random() > 0.5 ? '1' : '0' });
      }
    }
    return points;
  }, []);

  return (
    <div className="orb-container">
      <style>{`
        .orb-container { 
          position: relative; width: 380px; height: 380px; background-color: #000; border-radius: 50%; overflow: hidden;
          -webkit-mask-image: radial-gradient(circle, black 65%, transparent 100%);
          mask-image: radial-gradient(circle, black 65%, transparent 100%);
        }
        @keyframes sweep {
          0% { cx: 20%; cy: 30%; }
          50% { cx: 80%; cy: 60%; }
          100% { cx: 20%; cy: 30%; }
        }
        .spotlight-node { animation: sweep 12s infinite ease-in-out; }
        .b-text { font-family: 'Courier New', monospace; font-size: 2.8px; }
      `}</style>

      <svg viewBox="0 0 200 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ padding: '30px' }}>
        <defs>
          <mask id="geoLand">
            <WorldMapMask />
          </mask>
          <mask id="activeSignal">
            <circle className="spotlight-node" r="35" fill="white" />
          </mask>
        </defs>

        {/* BASELINE NOISE (16% Opacity World) */}
        <g mask="url(#geoLand)" opacity="0.16">
          {binaryGrid.map((p, i) => (
            <text key={`bg-${i}`} x={p.x} y={p.y} className="b-text" fill="white">{p.val}</text>
          ))}
        </g>

        {/* ACTIVE SIGNAL (100% Cream Reveal) */}
        <g mask="url(#geoLand)">
          <g mask="url(#activeSignal)">
            {binaryGrid.map((p, i) => (
              <text key={`sig-${i}`} x={p.x} y={p.y} className="b-text" fill="#FFFDD0" fontWeight="bold">{p.val}</text>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 0 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '60px' }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>AUTHENTIC INTELLIGENCE</strong>
        <nav style={{ display: 'flex', gap: '40px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ position: 'relative', marginTop: '140px', marginBottom: '140px', minHeight: '450px' }}>
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>Predictive analytics for high-stakes decision makers.</p>
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>REQUEST SECURE BRIEFING</button>
          </div>
          
          <div style={{ position: 'absolute', top: '35%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            <BinaryWorldMap />
          </div>
        </section>

        {/* METHODOLOGY SECTION: Simplified Grid */}
        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px' }}>
            <div>
              <h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[01] THE FEED</h3>
              <p style={{ color: '#fff', fontSize: '15px', fontWeight: '500', marginBottom: '15px', lineHeight: '1.4' }}>Unfiltered ingestion of non-traditional data streams.</p>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>We bypass market lag by ingesting raw data from peripheral nodes—geopolitical shifts and logistical disruptions—before they are sanitized for consumption.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[02] PATTERN ISOLATION</h3>
              <p style={{ color: '#fff', fontSize: '15px', fontWeight: '500', marginBottom: '15px', lineHeight: '1.4' }}>Identifying deviations that precede major systemic shifts.</p>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>We don't look for trends; we look for trend-breaks. Our proprietary logic filters the abyss to isolate anomalies that represent early-warning signs of volatility.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[03] ADVISORY DELIVERY</h3>
              <p style={{ color: '#fff', fontSize: '15px', fontWeight: '500', marginBottom: '15px', lineHeight: '1.4' }}>Intelligence delivered via secure channels to provide lead time.</p>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Insights are delivered with zero-latency, giving decision-makers a window of opportunity to position before the curve.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 0', borderTop: '1px solid #111', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
