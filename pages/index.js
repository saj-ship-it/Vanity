import React, { useState } from 'react';

const NeuralChaos = () => {
  // Generate random positions for the noise shards
  const shards = [...Array(120)].map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.4 + 0.1
  }));

  return (
    <div style={{ position: 'relative', width: '330px', height: '330px', marginLeft: '40px', flexShrink: 0 }}>
      {/* CSS for Surreal Random Movement */}
      <style>{`
        @keyframes floatChaos {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -10px) rotate(120deg); }
          66% { transform: translate(-10px, 15px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .shard { animation: floatChaos var(--d) infinite ease-in-out; }
      `}</style>

      <svg width="330" height="330" viewBox="0 0 100 100" fill="none" style={{ filter: 'drop-shadow(0 0 15px rgba(37, 99, 235, 0.2))' }}>
        <defs>
          <radialGradient id="signalCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="40%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* THE NOISE: 120 Floating fragments on random paths */}
        <g stroke="white" strokeWidth="0.1">
          {shards.map((s) => (
            <circle 
              key={s.id} 
              className="shard"
              cx={s.x} 
              cy={s.y} 
              r={s.size} 
              strokeOpacity={s.opacity}
              style={{ '--d': `${s.duration}s`, animationDelay: `${s.delay}s` }}
            />
          ))}
        </g>

        {/* THE CLARITY: The Fixed, High-Refinement Iris */}
        <g style={{ pointerEvents: 'none' }}>
          {/* Inner Iris Density */}
          <g stroke="white" strokeWidth="0.08" strokeOpacity="0.7">
            {[...Array(72)].map((_, i) => {
              const angle = (i * Math.PI) / 36;
              const x1 = 50 + Math.cos(angle) * 8;
              const y1 = 50 + Math.sin(angle) * 8;
              const x2 = 50 + Math.cos(angle) * 30;
              const y2 = 50 + Math.sin(angle) * 30;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
          
          {/* Orbital Scanners */}
          <ellipse cx="50" cy="50" rx="40" ry="12" stroke="#2563eb" strokeWidth="0.1" strokeOpacity="0.4" transform="rotate(45 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="12" stroke="#2563eb" strokeWidth="0.1" strokeOpacity="0.4" transform="rotate(-45 50 50)" />
          
          {/* Pulsating Core */}
          <circle cx="50" cy="50" r="10" fill="url(#signalCore)" opacity="0.4">
            <animate attributeName="r" values="8;11;8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="3" fill="white" />
        </g>
      </svg>
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  const sectors = [
    { name: 'DEFENCE & INTEL', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    { name: 'MEDIA & DISINFO', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
    { name: 'ENERGY INFRA', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
    { name: 'HEALTHCARE', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
    { name: 'LOGISTICS', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
    { name: 'PRIVATE EQUITY', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg> },
    { name: 'FINANCE', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/><line x1="12" y1="20" x2="12" y2="10"/></svg> }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      <nav style={{ maxWidth: '1200px', margin: '0 auto 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '330px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '5%' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto 140px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1.5 }}>
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
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
          <NeuralChaos />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[01] THE FEED</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Ingesting non-traditional data streams to bypass standard market lag.</p>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[02] PATTERN ISOLATION</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Identifying deviations that precede major geopolitical shifts.</p>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[03] ADVISORY DELIVERY</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Intelligence delivered via secure nodes for critical lead time.</p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL SECTORS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {sectors.map((s) => (
            <div key={s.name} style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center' }}>
              {s.icon}<h4 style={{ fontSize: '12px', marginTop: '20px', letterSpacing: '0.1em' }}>{s.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
          <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" style={{ width: '90%', maxWidth: '450px', padding: '60px', border: '1px solid #222', backgroundColor: '#050505' }}>
            <h2 style={{ fontSize: '12px', marginBottom: '40px', letterSpacing: '0.3em', textAlign: 'center' }}>SECURE CHANNEL INITIALIZED</h2>
            <input name="name" required placeholder="NAME / ENTITY" style={{ width: '100%', padding: '18px', marginBottom: '20px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <input name="email" type="email" required placeholder="SECURE EMAIL" style={{ width: '100%', padding: '18px', marginBottom: '30px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', color: '#4b5563', border: 'none' }}>ABORT</button>
              <button type="submit" style={{ flex: 2, padding: '18px', backgroundColor: '#2563eb', color: 'white', border: 'none', fontWeight: 'bold' }}>TRANSMIT</button>
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
