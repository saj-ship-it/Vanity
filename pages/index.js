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
    <div style={{ position: 'relative', width: '330px', height: '330px', flexShrink: 0 }}>
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
          50% { filter: drop-shadow(0 0 15px #2563eb); stroke-opacity: 0.5; stroke-width: 2.5; }
          100% { filter: drop-shadow(0 0 2px white); stroke-opacity: 1; }
        }
        .signal-node {
          animation: randomPath var(--d) infinite ease-in-out, signalPulse 2s infinite ease-in-out;
          stroke: white;
          stroke-width: 2;
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
        <path d="M0 50 H100 M50 0 V100" stroke="white" strokeWidth="0.05" strokeOpacity="0.1" />
      </svg>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  const sectors = [
    { name: 'DEFENCE & INTEL', icon: 'SHIELD' },
    { name: 'MEDIA & DISINFO', icon: 'MEDIA' },
    { name: 'ENERGY INFRA', icon: 'ENERGY' },
    { name: 'HEALTHCARE', icon: 'HEALTH' },
    { name: 'LOGISTICS', icon: 'LOG' },
    { name: 'PRIVATE EQUITY', icon: 'PE' },
    { name: 'FINANCE', icon: 'FIN' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      {/* Centered Navigation Alignment */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '330px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '15%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto 140px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1.2 }}>
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
        
        {/* Adjusted Graphic Position: 15% offset to align with Nav */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '-15%', marginTop: '-20px' }}>
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
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Intelligence delivered via secure nodes to decision makers.</p>
          </div>
        </div>
      </section>

      <section id="sectors" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL SECTORS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {sectors.map((s) => (
            <div key={s.name} style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '12px', marginTop: '10px', letterSpacing: '0.1em' }}>{s.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
          <form action="#" style={{ width: '90%', maxWidth: '450px', padding: '60px', border: '1px solid #222', backgroundColor: '#050505' }}>
            <h2 style={{ fontSize: '12px', marginBottom: '40px', letterSpacing: '0.3em', textAlign: 'center' }}>SECURE CHANNEL INITIALIZED</h2>
            <input placeholder="NAME / ENTITY" style={{ width: '100%', padding: '18px', marginBottom: '20px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <input placeholder="SECURE EMAIL" style={{ width: '100%', padding: '18px', marginBottom: '30px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', color: '#4b5563', border: 'none', cursor: 'pointer' }}>ABORT</button>
              <button type="submit" style={{ flex: 2, padding: '18px', backgroundColor: '#2563eb', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>TRANSMIT</button>
            </div>
          </form>
        </div>
      )}

      <footer style={{ maxWidth: '1200px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
