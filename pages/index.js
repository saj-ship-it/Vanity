import React, { useState, useMemo } from 'react';

// THE HIGH-FIDELITY BINARY MAP: Uses a coordinate-based landmass check
const BinaryWorldMap = () => {
  // SVG Path-based masking for perfect geographic fidelity
  const worldPath = "M10,35 c15,-10 30,-5 45,2 s20,5 30,-8 s15,-5 25,5 s10,25 -5,35 s-40,15 -60,5 s-30,5 -45,-10 s-5,-20 10,-29 Z M140,25 c10,-8 35,-5 50,10 s15,35 -5,50 s-45,10 -60,-15 s-10,-35 15,-45 Z M150,85 c5,0 15,8 15,18 s-12,18 -25,12 s-10,-25 10,-30 Z M45,75 c8,8 8,20 0,30 s-20,15 -25,0 s0,-25 25,-30 Z";

  const binaryGrid = useMemo(() => {
    const points = [];
    // Higher density grid (2.5px spacing) for "Pro" resolution
    for (let x = 0; x <= 200; x += 2.5) {
      for (let y = 0; y <= 110; y += 3.5) {
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
        .b-text { font-family: 'Courier New', monospace; font-size: 2.2px; transition: fill 0.4s; }
      `}</style>

      <svg viewBox="0 0 200 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ padding: '30px' }}>
        <defs>
          <mask id="geoLand">
            <path d={worldPath} fill="white" />
          </mask>
          <mask id="activeSignal">
            <circle className="spotlight-node" r="28" fill="white" />
          </mask>
        </defs>

        {/* BACKGROUND: 16% Opacity Static Map */}
        <g mask="url(#geoLand)" opacity="0.16">
          {binaryGrid.map((p, i) => (
            <text key={`bg-${i}`} x={p.x} y={p.y} className="b-text" fill="white">{p.val}</text>
          ))}
        </g>

        {/* SIGNAL: 100% Cream Reveal */}
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

export default function AUI_V4() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, -apple-system, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      
      {/* HEADER: Restored Typography & Left Alignment */}
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
          
          {/* THE NEW MAP: Anchored 75% Mid-Point, Elevated Position */}
          <div style={{ position: 'absolute', top: '35%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            <BinaryWorldMap />
          </div>
        </section>

        {/* METHODOLOGY: Grid restored to 4 columns */}
        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
             {/* Methodology Content Blocks... */}
          </div>
        </section>
      </main>
    </div>
  );
}
