import React, { useState, useMemo } from 'react';

const NeuralDetection = () => {
  const nodes = useMemo(() => [...Array(80)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    midX: Math.random() * 100,
    midY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.5 + 0.1,
    isSignal: i === 42 
  })), []);

  return (
    <div style={{ position: 'relative', width: '330px', height: '330px' }}>
      <style>{`
        @keyframes randomPath {
          0% { transform: translate(0, 0); }
          33% { transform: translate(var(--mx), var(--my)); }
          66% { transform: translate(var(--ex), var(--ey)); }
          100% { transform: translate(0, 0); }
        }
        .node { 
          animation: randomPath var(--d) infinite ease-in-out;
          animation-delay: var(--del);
        }
        @keyframes signalPulse {
          0% { filter: drop-shadow(0 0 2px white); stroke-opacity: 1; }
          50% { filter: drop-shadow(0 0 15px #2563eb); stroke-opacity: 0.6; stroke-width: 3; }
          100% { filter: drop-shadow(0 0 2px white); stroke-opacity: 1; }
        }
        .signal-node {
          animation: randomPath var(--d) infinite ease-in-out, signalPulse 2s infinite ease-in-out;
          stroke: white;
          stroke-width: 2.5;
        }
      `}</style>

      <svg width="330" height="330" viewBox="0 0 100 100" fill="none">
        {nodes.map((n) => (
          <circle 
            key={n.id} 
            className={n.isSignal ? "signal-node" : "node"}
            cx={n.startX} 
            cy={n.startY} 
            r={n.isSignal ? n.size + 1.5 : n.size} 
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity={n.isSignal ? 1 : n.opacity}
            style={{ 
              '--mx': `${n.midX - n.startX}px`,
              '--my': `${n.midY - n.startY}px`,
              '--ex': `${n.endX - n.startX}px`,
              '--ey': `${n.endY - n.startY}px`,
              '--d': `${n.duration}s`,
              '--del': `${n.delay}s`
            }}
          />
        ))}
        <path d="M48 50 H52 M50 48 V52" stroke="white" strokeWidth="0.2" strokeOpacity="0.4" />
      </svg>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      {/* HEADER SECTION */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
          AUTHENTIC INTELLIGENCE
        </div>

        {/* Locked Axis Nav: This sits exactly above the graphic */}
        <div style={{ width: '330px', display: 'flex', justifyContent: 'center', gap: '40px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7, marginRight: '40px' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ maxWidth: '1200px', margin: '100px auto 140px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>
            FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
          </h1>
          <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
            Predictive analytics for high-stakes decision makers. <br />
            <span style={{ color: '#fff' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</span>
          </p>
          <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
            REQUEST SECURE BRIEFING
          </button>
        </div>
        
        {/* The Graphic: Locked to the Nav Axis above */}
        <div style={{ width: '330px', display: 'flex', justifyContent: 'center', marginRight: '40px', marginTop: '-40px' }}>
          <NeuralDetection />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[01] THE FEED</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Ingesting non-traditional data streams to bypass standard market lag.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[02] PATTERN ISOLATION</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Identifying deviations that precede major geopolitical and market shifts.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[03] ADVISORY DELIVERY</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Intelligence delivered via secure nodes to provide critical lead time.</p>
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: '1200px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
