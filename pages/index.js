import React, { useState, useMemo } from 'react';

// THE SOVEREIGN ORB: 1s and 0s clipped into perfect geographical shapes
const BinaryWorldMap = () => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 30, y: 30 });

  // A HIGH-FIDELITY, STYLIZED WORLD MAP PATH (Vector Data)
  const mapPathData = "M25,25 c-5,-5 15,-10 30,-5 s15,10 30,5 s10,-10 25,-10 s10,15 -5,25 s-30,15 -50,5 s-30,10 -40,-5 s-5,-15 10,-20 Z M130,20 c15,-10 40,-5 55,10 s10,35 -10,50 s-50,15 -65,-10 s-10,-40 20,-50 Z M150,85 c5,0 15,5 15,15 s-10,15 -20,10 s-10,-20 5,-25 Z M40,75 c8,8 8,20 0,30 s-20,15 -25,0 s0,-25 25,-30 Z M110,35 c10,0 15,10 10,20 s-15,15 -20,10 s-10,-20 10,-30 Z";

  // Create a strict grid of coordinates for the 1s and 0s
  const dataPoints = useMemo(() => {
    const points = [];
    // High density grid (4px spacing) for high-resolution look
    for (let x = 0; x <= 200; x += 4) {
      for (let y = 0; y <= 110; y += 5) {
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
          border: 1px solid #111;
          -webkit-mask-image: radial-gradient(circle, black 65%, transparent 100%);
          mask-image: radial-gradient(circle, black 65%, transparent 100%);
        }
        @media (max-width: 1024px) { 
          .orb-container { width: 280px; height: 280px; margin: 40px auto; } 
        }
        @keyframes spotlightSweep {
          0% { cx: 20%; cy: 30%; }
          50% { cx: 85%; cy: 50%; }
          100% { cx: 20%; cy: 30%; }
        }
        .active-signal { animation: spotlightSweep 10s infinite ease-in-out; }
        .b-text { font-family: 'Courier New', monospace; font-size: 3.5px; transition: fill 0.3s; }
      `}</style>

      <svg viewBox="0 0 200 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ padding: '30px' }}>
        <defs>
          {/* This MASK defines where the binary data can appear (the geography) */}
          <mask id="geoLandmask">
            <path d={mapPathData} fill="white" />
          </mask>
          
          {/* This MASK defines where the spotlight can appear */}
          <mask id="activeSpotlight">
            <circle className="active-signal" r="28" fill="white" />
          </mask>
        </defs>

        {/* LAYER 1: The Ambient Noise (16% Opacity Static Map) */}
        <g mask="url(#geoLandmask)" opacity="0.16">
          {dataPoints.map((p, i) => (
            <text key={`ambient-${i}`} x={p.x} y={p.y} className="b-text" fill="white">{p.val}</text>
          ))}
        </g>

        {/* LAYER 2: The Active Signal (Cream Spotlight Reveal) */}
        <g mask="url(#geoLandmask)">
          <g mask="url(#activeSpotlight)">
            {dataPoints.map((p, i) => (
              <text key={`signal-${i}`} x={p.x} y={p.y} className="b-text" fill="#FFFDD0" fontWeight="bold">{p.val}</text>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default function AUI_Final() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, -apple-system, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      
      {/* HEADER: Left-Aligned with Logo Axis */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 0 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '60px' }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>AUTHENTIC INTELLIGENCE</strong>
        <nav style={{ display: 'flex', gap: '40px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* HERO SECTION */}
        <section className="hero-section">
          <style>{`
            .hero-section { position: relative; margin-top: 140px; margin-bottom: 140px; min-height: 450px; }
            /* Anchor the graphic to the specific 75% midpoint */
            .hero-graphic { position: absolute; top: 35%; left: 75%; transform: translate(-50%, -50%); z-index: 1; }
            @media (max-width: 1024px) {
              .hero-section { display: flex; flex-direction: column; align-items: flex-start; margin-top: 80px; }
              .hero-graphic { position: relative; top: 0; left: 0; transform: none; width: 100%; display: center; justify-content: center; margin-top: 40px; }
            }
          `}</style>
          
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>Predictive analytics for high-stakes decision makers.</p>
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>REQUEST SECURE BRIEFING</button>
          </div>
          
          <div className="hero-graphic"><BinaryWorldMap /></div>
        </section>
        
        {/* METHODOLOGY: Grid restored to 4 columns */}
        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {/* Methodology Content Blocks... */}
          </div>
        </section>
      </main>
    </div>
  );
}
