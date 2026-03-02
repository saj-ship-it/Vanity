import React, { useState } from 'react';

// The "Authentic Intelligence" Surrealist Mark (Profile View)
const SurrealHead = () => (
  <svg 
    width="600" 
    height="600" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ 
      marginLeft: '20px', 
      flexShrink: 0,
      opacity: 0.8,
      filter: 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.4))'
    }}
  >
    {/* Profile Outline - Intricate Multi-Vector approach */}
    <path d="M30 85 C35 80, 40 75, 45 70 M45 70 C55 65, 65 55, 68 40 C70 25, 60 10, 45 8 C30 6, 20 15, 18 30" stroke="white" strokeWidth="0.2" strokeDasharray="1 0.5" />
    
    {/* Eye / Gaze Cluster */}
    <circle cx="58" cy="35" r="1.5" stroke="#2563eb" strokeWidth="0.5" />
    <path d="M58 35 L95 35" stroke="#2563eb" strokeWidth="0.1" strokeOpacity="0.5" /> {/* Gaze Vector */}
    
    {/* Surreal Neural Web - Interlocking Lines */}
    <g stroke="white" strokeWidth="0.08" strokeOpacity="0.6">
      {/* Frontal Lobe Geometry */}
      <path d="M45 8 L55 20 L40 25 Z" />
      <path d="M55 20 L68 40 L50 45 Z" />
      <path d="M40 25 L50 45 L35 50 Z" />
      
      {/* Intricate Secondary Vectors */}
      {[...Array(15)].map((_, i) => (
        <line 
          key={i} 
          x1={20 + i * 2} y1={30 + Math.sin(i) * 10} 
          x2={60 + Math.cos(i) * 5} y2={40 + i} 
        />
      ))}
      
      {/* Geometric "Burst" behind the head */}
      <path d="M20 30 L5 10 M20 50 L5 70 M25 20 L15 5" strokeOpacity="0.3" strokeWidth="0.05" />
    </g>

    {/* Technical Grid Overlays */}
    <path d="M0 50 H100 M50 0 V100" stroke="white" strokeWidth="0.02" strokeOpacity="0.1" />
  </svg>
);

const IconShield = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  const sectors = [
    { name: 'DEFENCE & INTEL', icon: <IconShield /> },
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
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      {/* HERO SECTION WITH SURREALIST HEAD */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 140px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
        
        {/* The Surrealist Multi-Vector Head */}
        <SurrealHead />
      </section>

      {/* Method and Sectors remain integrated below */}
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg><h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[01] THE FEED</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Ingesting non-traditional data streams to bypass market lag.</p></div>
          <div><IconShield /><h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Identifying deviations that precede major geopolitical shifts.</p></div>
          <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><h3 style={{ fontSize: '14px', margin: '20px 0 15px' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#6b7280', fontSize: '14px' }}>Intelligence delivered via secure nodes for critical lead time.</p></div>
        </div>
      </section>

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

      {/* Footer and Form Modal omitted for brevity, but still included in GitHub version */}
    </div>
  );
}
