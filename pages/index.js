import React, { useState, useMemo } from 'react';

const BinaryWorldMap = () => {
  const [hoverPos, setHoverPos] = useState({ x: 50, y: 50 });

  // High-fidelity SVG path for a stylized world map
  const mapPath = "M30,25 c0,0 5,-5 15,-2 s10,8 20,5 s15,-15 30,-10 s10,20 5,30 s-20,15 -40,10 s-30,10 -40,-5 s-5,-20 10,-28 Z M130,20 c10,-5 30,-5 45,5 s15,30 0,45 s-40,10 -55,-10 s-10,-30 10,-40 Z M140,75 c5,0 15,5 15,15 s-10,15 -20,10 s-10,-20 5,-25 Z M40,65 c5,5 5,15 0,25 s-15,10 -20,0 s0,-20 20,-25 Z";

  // Create a dense grid of coordinates for the 1s and 0s
  const binaryGrid = useMemo(() => {
    const points = [];
    for (let x = 0; x <= 200; x += 4) {
      for (let y = 0; y <= 100; y += 5) {
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
        @keyframes sweep {
          0% { cx: 20%; cy: 30%; }
          33% { cx: 80%; cy: 40%; }
          66% { cx: 40%; cy: 80%; }
          100% { cx: 20%; cy: 30%; }
        }
        .spotlight-circle {
          animation: sweep 12s infinite ease-in-out;
        }
        .binary-text { font-family: 'Courier New', monospace; font-size: 3.5px; transition: fill 0.3s; }
      `}</style>

      <svg viewBox="0 0 200 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ padding: '20px' }}>
        <defs>
          {/* This mask defines where the land is */}
          <mask id="mapMask">
            <path d={mapPath} fill="white" />
          </mask>
          
          {/* This mask defines where the spotlight is */}
          <mask id="spotlightMask">
            <circle className="spotlight-circle" r="25" fill="white" />
          </mask>
        </defs>

        {/* LAYER 1: The Ambient Noise (16% Opacity World) */}
        <g mask="url(#mapMask)" opacity="0.16">
          {binaryGrid.map((p, i) => (
            <text key={`bg-${i}`} x={p.x} y={p.y} className="binary-text" fill="white">{p.val}</text>
          ))}
        </g>

        {/* LAYER 2: The Signal (The Cream Spotlight Reveal) */}
        <g mask="url(#mapMask)">
          <g mask="url(#spotlightMask)">
            {binaryGrid.map((p, i) => (
              <text key={`sig-${i}`} x={p.x} y={p.y} className="binary-text" fill="#FFFDD0" fontWeight="bold">{p.val}</text>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default function FinalLandingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', padding: '0 40px' }}>
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 0', display: 'flex', gap: '60px', alignItems: 'center' }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px' }}>AUTHENTIC INTELLIGENCE</strong>
        <nav style={{ display: 'flex', gap: '40px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '500px' }}>
          <div style={{ flex: '1', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '20px 40px', fontWeight: 'bold', border: 'none', cursor: 'pointer', letterSpacing: '0.1em' }}>REQUEST SECURE BRIEFING</button>
          </div>

          <div style={{ position: 'absolute', right: '10%', top: '0' }}>
            <BinaryWorldMap />
          </div>
        </section>

        {/* Methodology: Monitor, Detect, Analyze, Alert */}
        <section id="method" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginTop: '100px' }}>
           {/* Insert Methodology Content Here */}
        </section>
      </main>
    </div>
  );
}
