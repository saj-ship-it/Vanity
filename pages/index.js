import React, { useState } from 'react';

// TRON-STYLE GLOWING SURREALIST HEAD
const TronHead = () => (
  <svg 
    width="600" height="600" viewBox="0 0 100 100" fill="none" 
    style={{ marginLeft: '20px', flexShrink: 0 }}
  >
    <defs>
      {/* THE BLOOM EFFECT (GLOW) */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="0.8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g filter="url(#glow)">
      {/* Profile Profile - Intricate Data Paths */}
      <path 
        d="M30 85 C35 80, 48 72, 52 65 M52 65 C65 55, 75 40, 75 25 C75 10, 60 5, 45 8 C30 11, 22 25, 22 40" 
        stroke="#00ffff" strokeWidth="0.3" strokeOpacity="0.8" 
      />
      
      {/* Surreal Inner Circuitry */}
      <g stroke="#00ffff" strokeWidth="0.1" strokeOpacity="0.5">
        {[...Array(20)].map((_, i) => (
          <line 
            key={i} 
            x1={30 + i} y1={20 + (i * 2)} 
            x2={70 - (i / 2)} y2={40 + Math.sin(i) * 10} 
          />
        ))}
        {/* Connection Nodes */}
        <circle cx="52" cy="65" r="0.8" fill="#00ffff" />
        <circle cx="45" cy="8" r="0.5" fill="#00ffff" />
      </g>

      {/* The "Gaze" - High Intensity Cyan */}
      <circle cx="68" cy="30" r="1.2" stroke="#fff" strokeWidth="0.4" />
      <line x1="68" y1="30" x2="100" y2="30" stroke="#00ffff" strokeWidth="0.05" strokeDasharray="2 1" />
    </g>
  </svg>
);

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', color: 'white', minHeight: '100vh', fontFamily: 'monospace', padding: '60px 20px', overflowX: 'hidden' }}>
      
      {/* TRON PERSPECTIVE GRID BACKGROUND (SUBTLE) */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '30vh', background: 'linear-gradient(transparent, rgba(0, 255, 255, 0.1))', transform: 'perspective(500px) rotateX(60deg)', borderTop: '1px solid #00ffff', zIndex: 0, opacity: 0.3 }}></div>

      <nav style={{ maxWidth: '1200px', margin: '0 auto 80px', display: 'flex', justifyContent: 'space-between', zIndex: 1, position: 'relative' }}>
        <strong style={{ color: '#00ffff', letterSpacing: '0.5em', fontSize: '10px' }}>AUTHENTIC_INTELLIGENCE // v2.0</strong>
        <div style={{ display: 'flex', gap: '30px', fontSize: '10px' }}>
          <a href="#method" style={{ color: '#00ffff', textDecoration: 'none' }}>[ METHOD ]</a>
          <a href="#sectors" style={{ color: '#00ffff', textDecoration: 'none' }}>[ SECTORS ]</a>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto 140px', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 76px)', fontWeight: '900', lineHeight: '0.9', color: 'white', textShadow: '0 0 20px rgba(0,255,255,0.5)' }}>
            FIND SIGNAL <br /> <span style={{ color: '#00ffff' }}>IN THE NOISE.</span>
          </h1>
          <p style={{ color: '#666', maxWidth: '480px', margin: '40px 0', lineHeight: '1.6', fontSize: '18px' }}>
            Predictive analytics for high-stakes decision makers. <br />
            <span style={{ color: '#00ffff' }}>Monitoring data pipelines in the digital abyss.</span>
          </p>
          <button onClick={() => setShowForm(true)} style={{ backgroundColor: '#00ffff', color: 'black', padding: '20px 40px', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 0 15px #00ffff' }}>
            INITIALIZE BRIEFING
          </button>
        </div>
        
        <TronHead />
      </section>

      {/* Rest of sections would follow the same neon/grid theme... */}
    </div>
  );
}
