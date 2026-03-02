import React, { useState } from 'react';

// Specialized Sector Icons
const IconDefense = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>;
const IconMedia = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IconEnergy = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconEquity = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconLogistics = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      {/* Navigation */}
      <nav style={{ maxWidth: '1100px', margin: '0 auto 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 140px' }}>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 84px)', fontWeight: '900', lineHeight: '0.85', marginBottom: '40px', letterSpacing: '-0.05em' }}>
          FIND SIGNAL <br />
          <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
        </h1>
        <p style={{ color: '#9ca3af', maxWidth: '540px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
          Predictive analytics for high-stakes decision makers. <br />
          <span style={{ color: '#fff' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</span>
        </p>
        <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '12px', letterSpacing: '0.2em', cursor: 'pointer' }}>
          REQUEST SECURE BRIEFING
        </button>
      </section>

      {/* SECTORS SECTION - VISUALLY IMPROVED */}
      <section id="sectors" style={{ maxWidth: '1100px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL SECTORS</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          
          {/* Defense Sector */}
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', textAlign: 'center' }}>
            <IconDefense />
            <h4 style={{ fontSize: '12px', marginTop: '20px', letterSpacing: '0.1em' }}>DEFENSE & INTEL</h4>
            <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '10px' }}>Geopolitical volatility & threat vectors.</p>
          </div>

          {/* Media Sector */}
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', textAlign: 'center' }}>
            <IconMedia />
            <h4 style={{ fontSize: '12px', marginTop: '20px', letterSpacing: '0.1em' }}>MEDIA & DISCO</h4>
            <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '10px' }}>Information warfare & sentiment trends.</p>
          </div>

          {/* Energy Sector */}
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', textAlign: 'center' }}>
            <IconEnergy />
            <h4 style={{ fontSize: '12px', marginTop: '20px', letterSpacing: '0.1em' }}>ENERGY INFRA</h4>
            <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '10px' }}>Resource scarcity & grid resilience.</p>
          </div>

          {/* Equity Sector */}
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', textAlign: 'center' }}>
            <IconEquity />
            <h4 style={{ fontSize: '12px', marginTop: '20px', letterSpacing: '0.1em' }}>PRIVATE EQUITY</h4>
            <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '10px' }}>Asymmetric market entry points.</p>
          </div>

          {/* Logistics Sector */}
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', textAlign: 'center' }}>
            <IconLogistics />
            <h4 style={{ fontSize: '12px', marginTop: '20px', letterSpacing: '0.1em' }}>SUPPLY CHAIN</h4>
            <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '10px' }}>Systemic friction & bottleneck detection.</p>
          </div>

        </div>
      </section>

      {/* FORM MODAL */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
          <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" style={{ width: '90%', maxWidth: '450px', padding: '60px', border: '1px solid #222', backgroundColor: '#050505' }}>
            <h2 style={{ fontSize: '12px', marginBottom: '40px', letterSpacing: '0.3em', textAlign: 'center' }}>SECURE CHANNEL INITIALIZED</h2>
            <input name="name" required placeholder="NAME / ENTITY" style={{ width: '100%', padding: '18px', marginBottom: '20px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <input name="email" type="email" required placeholder="ENCRYPTED EMAIL" style={{ width: '100%', padding: '18px', marginBottom: '30px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', color: '#4b5563', border: 'none', cursor: 'pointer' }}>ABORT</button>
              <button type="submit" style={{ flex: 2, padding: '18px', backgroundColor: '#2563eb', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>TRANSMIT</button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer style={{ maxWidth: '1100px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
