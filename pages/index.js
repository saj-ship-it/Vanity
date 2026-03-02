import React from 'react';
import { render } from 'react-dom';

const VanitySite = () => (
  <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', padding: '80px 40px' }}>
    <nav style={{ marginBottom: '120px', letterSpacing: '0.5em', fontSize: '10px', opacity: 0.6 }}>AUTHENTIC INTELLIGENCE</nav>
    <h1 style={{ fontSize: '72px', fontWeight: '900', lineHeight: '0.85', marginBottom: '40px' }}>
      FIND SIGNAL <br /><span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
    </h1>
    <p style={{ color: '#888', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6' }}>
      Investigative analytics for high-stakes decision makers.
    </p>
    <button style={{ backgroundColor: 'white', color: 'black', padding: '20px 40px', fontWeight: 'bold', border: 'none' }}>
      REQUEST SECURE BRIEFING
    </button>
  </div>
);

