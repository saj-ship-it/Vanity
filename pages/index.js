import React, { useState } from 'react';

// Minimalist SVG Icons for high-end "Intelligence" aesthetic
const IconShield = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconDatabase = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>;
const IconZap = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
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
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.1em' }}>
          PHASE I // ACTIVE NODE
        </div>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 84px)', fontWeight: '900', lineHeight: '0.85', marginBottom: '40px', letterSpacing: '-0.05em' }}>
          FIND SIGNAL <br />
          <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
        </h1>
        <p style={{ color: '#9ca3af', maxWidth: '540px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
          Predictive analytics for high-stakes decision makers. <br />
          <span style={{ color: '#fff', fontWeight: '400' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</span>
        </p>
        <button 
          onClick={() => setShowForm(true)}
          style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '12px', letterSpacing: '0.2em', cursor: 'pointer', transition: '0.3s', boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)' }}>
          REQUEST SECURE BRIEFING
        </button>
      </section>

      {/* METHOD SECTION */}
      <section id="method" style={{ maxWidth: '1100px', margin: '0 auto 140px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div style={{ padding: '30px', border: '1px solid #111', borderRadius: '2px' }}>
            <IconDatabase />
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px', letterSpacing: '0.1em' }}>[01] THE FEED</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Ingesting non-traditional data streams—from satellite imagery to encrypted manifests—to bypass standard market lag.</p>
          </div>
          <div style={{ padding: '30px', border: '1px solid #111', borderRadius: '2px' }}>
            <IconShield />
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px', letterSpacing: '0.1em' }}>[02] PATTERN ISOLATION</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Proprietary filtering to identify "Asymmetric Signals"—deviations from the norm that precede geopolitical shifts.</p>
          </div>
          <div style={{ padding: '30px', border: '1px solid #111', borderRadius: '2px' }}>
            <IconZap />
            <h3 style={{ fontSize: '14px', margin: '20px 0 15px', letterSpacing: '0.1em' }}>[03] ADVISORY DELIVERY</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Intelligence delivered via secure, encrypted nodes, providing decision-makers with critical lead time on volatility.</p>
          </div>
        </div>
      </section>

      {/* SECTORS SECTION */}
      <section id="sectors" style={{ maxWidth: '1100px', margin: '0 auto 100px', borderTop: '1px solid #1f2937', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '50px' }}>CORE SECTORS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {['ENERGY INFRASTRUCTURE', 'PRIVATE EQUITY', 'SOVEREIGN RISK', 'SUPPLY CHAIN LOGISTICS', 'MINING & EXTRACTION'].map(sector => (
            <span key={sector} style={{ border: '1px solid #2563eb', padding: '12px 24px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', opacity: 0.8 }}>{sector}</span>
          ))}
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
          <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" style={{ width: '90%', maxWidth: '450px', padding: '60px', border: '1px solid #222', backgroundColor: '#050505' }}>
            <h2 style={{ fontSize: '14px', marginBottom: '40px', letterSpacing: '0.3em', textAlign: 'center' }}>SECURE CHANNEL INITIALIZED</h2>
            <input name="name" type="text" required placeholder="NAME / ENTITY" style={{ width: '100%', padding: '18px', marginBottom: '20px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <input name="email" type="email" required placeholder="ENCRYPTED EMAIL" style={{ width: '100%', padding: '18px', marginBottom: '30px', backgroundColor: '#0a0a0a', border: '1px solid #222', color: 'white' }} />
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', color: '#4b5563', border: 'none', cursor: 'pointer', fontSize: '11px' }}>ABORT</button>
              <button type="submit" style={{ flex: 2, padding: '18px', backgroundColor: '#2563eb', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px', letterSpacing: '0.1em' }}>TRANSMIT REQUEST</button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer style={{ maxWidth: '1100px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // CONFIDENTIALITY PROTOCOLS ACTIVE // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
