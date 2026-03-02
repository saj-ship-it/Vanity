import React, { useState } from 'react';

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', padding: '80px 40px', scrollBehavior: 'smooth' }}>
      
      {/* Navigation */}
      <nav style={{ marginBottom: '100px', display: 'flex', justifyContent: 'space-between', letterSpacing: '0.3em', fontSize: '10px', opacity: 0.6 }}>
        <strong>AUTHENTIC INTELLIGENCE // EST. 2026</strong>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '900px', marginBottom: '140px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', lineHeight: '0.85', marginBottom: '40px', letterSpacing: '-0.04em' }}>
          FIND SIGNAL <br />
          <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
        </h1>
        <p style={{ color: '#888', maxWidth: '520px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px' }}>
          Predictive analytics for high-stakes decision makers. <br />
          We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.
        </p>
        <button 
          onClick={() => setShowForm(true)}
          style={{ backgroundColor: 'white', color: 'black', padding: '20px 40px', fontWeight: 'bold', border: 'none', fontSize: '12px', letterSpacing: '0.1em', cursor: 'pointer' }}>
          REQUEST SECURE BRIEFING
        </button>
      </section>

      {/* METHOD SECTION */}
      <section id="method" style={{ marginBottom: '140px', borderTop: '1px solid #222', paddingTop: '60px' }}>
        <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', color: '#2563eb', marginBottom: '60px' }}>OUR METHODOLOGY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>[01] THE FEED</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
              We ingest non-traditional data streams—from satellite imagery and logistics manifests to localized sentiment shifts—to bypass standard market lag.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>[02] PATTERN ISOLATION</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
              Our proprietary engine filters noise to identify "Asymmetric Signals"—deviations from the norm that precede major geopolitical or economic shifts.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>[03] ADVISORY DELIVERY</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
              Intelligence is delivered via encrypted channels, providing decision-makers with a 72-hour lead time on volatile trend breaks.
            </p>
          </div>
        </div>
      </section>

      {/* SECTORS SECTION */}
      <section id="sectors" style={{ borderTop: '1px solid #222', paddingTop: '60px', marginBottom: '100px' }}>
        <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', color: '#2563eb', marginBottom: '40px' }}>OPERATIONAL SECTORS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', color: '#999' }}>
          <div style={{ borderLeft: '1px solid #2563eb', paddingLeft: '20px' }}>
            <h4 style={{ color: 'white', fontSize: '14px', marginBottom: '5px' }}>Infrastructure & Energy</h4>
            <p style={{ fontSize: '12px' }}>Monitoring supply chain resilience and resource scarcity indicators.</p>
          </div>
          <div style={{ borderLeft: '1px solid #2563eb', paddingLeft
