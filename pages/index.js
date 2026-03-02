import React from 'react';

export default function VanitySite() {
  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', padding: '80px 40px' }}>
      {/* Navigation */}
      <nav style={{ marginBottom: '100px', display: 'flex', justifyContent: 'space-between', letterSpacing: '0.3em', fontSize: '10px', opacity: 0.6 }}>
        <strong>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>METHOD</span>
          <span>SECTORS</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '900px', marginBottom: '120px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', lineHeight: '0.85', marginBottom: '40px', letterSpacing: '-0.04em' }}>
          FIND SIGNAL <br />
          <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
        </h1>
        <p style={{ color: '#888', maxWidth: '520px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px' }}>
          Investigative analytics for high-stakes decision makers. We monitor non-obvious data pipelines to detect trend breaks before they manifest in the public record.
        </p>
        <button style={{ backgroundColor: 'white', color: 'black', padding: '20px 40px', fontWeight: 'bold', border: 'none', fontSize: '12px', letterSpacing: '0.1em' }}>
          REQUEST SECURE BRIEFING
        </button>
      </section>

      {/* The Methodology / Content you were missing */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', borderTop: '1px solid #222', paddingTop: '60px' }}>
        <div>
          <h3 style={{ fontSize: '14px', letterSpacing: '0.2em', marginBottom: '20px', color: '#2563eb' }}>[01] GROUND TRUTH</h3>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>We leverage proprietary sources—from infrastructure logs to sentiment shifts—to build a foundation of absolute truth.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '14px', letterSpacing: '0.2em', marginBottom: '20px', color: '#2563eb' }}>[02] ADVIDORY NODES</h3>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Our engine scans 24/7 for pattern deviations, providing first-mover advantage in high-volatility environments.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '14px', letterSpacing: '0.2em', marginBottom: '20px', color: '#2563eb' }}>[03] SECURED ASSETS</h3>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Intelligence requirements are converted into encrypted dashboards. We protect your competitive territory.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '140px', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#444', letterSpacing: '0.3em' }}>
        © 2026 AUI INC. // CONFIDENTIAL // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
