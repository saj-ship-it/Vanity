import React, { useState, useMemo } from 'react';

// THE SEARCHLIGHT: Complete blackout until illumination
const DigitalSpotlight = () => {
  const cols = 22;
  const rows = 40;

  // Generate static binary streams
  const streams = useMemo(() => 
    [...Array(cols)].map(() => 
      [...Array(rows * 2)].map(() => (Math.random() > 0.5 ? '1' : '0')).join('\n')
    ), []
  );

  return (
    <div style={{ position: 'relative', width: '380px', height: '420px', overflow: 'hidden', backgroundColor: '#000', borderRadius: '4px', border: '1px solid #111' }}>
      <style>{`
        @keyframes slowStream {
          0% { transform: translateY(-30%); }
          100% { transform: translateY(0%); }
        }
        .stream-col {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          line-height: 1.1;
          white-space: pre;
          animation: slowStream 45s linear infinite;
        }
        @keyframes searchlight {
          0% { left: 15%; top: 15%; }
          33% { left: 65%; top: 45%; }
          66% { left: 25%; top: 75%; }
          100% { left: 15%; top: 15%; }
        }
        .light-beam {
          position: absolute;
          width: 130px; 
          height: 130px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 60%, transparent 100%);
          pointer-events: none;
          z-index: 10;
          animation: searchlight 20s infinite ease-in-out;
        }
        .data-container {
          display: flex;
          gap: 10px;
          color: white;
          /* Masking logic: only show what is under the spotlight */
          -webkit-mask-image: radial-gradient(circle 65px at var(--x) var(--y), black 0%, transparent 100%);
          mask-image: radial-gradient(circle 65px at var(--x) var(--y), black 0%, transparent 100%);
        }
      `}</style>

      {/* The Torch Beam */}
      <div className="light-beam" id="torch"></div>

      {/* The Data: Set to be completely hidden outside the mask */}
      <div className="data-container" id="mask-layer">
        {streams.map((content, i) => (
          <div key={i} className="stream-col">
            {content}
          </div>
        ))}
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const torch = document.getElementById('torch');
        const layer = document.getElementById('mask-layer');
        function moveMask() {
          const rect = torch.getBoundingClientRect();
          const parentRect = torch.parentElement.getBoundingClientRect();
          // Calculate center of the torch relative to the container
          const x = (rect.left - parentRect.left + 65) + 'px';
          const y = (rect.top - parentRect.top + 65) + 'px';
          layer.style.setProperty('--x', x);
          layer.style.setProperty('--y', y);
          requestAnimationFrame(moveMask);
        }
        moveMask();
      `}} />
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
      {/* Centered Navigation Alignment */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px' }}>AUTHENTIC INTELLIGENCE</strong>
        <div style={{ width: '380px', display: 'flex', justifyContent: 'center', gap: '40px', marginRight: '10%' }}>
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
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '-10%', marginTop: '-30px' }}>
          <DigitalSpotlight />
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
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>Intelligence delivered via secure nodes to providing critical lead time.</p>
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: '1200px', margin: '140px auto 0', borderTop: '1px solid #111', paddingTop: '40px', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
