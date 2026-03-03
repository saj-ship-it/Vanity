import React, { useState, useMemo } from 'react';

// THE SEARCHLIGHT: High-contrast illumination of slow-moving binary data
const DigitalSpotlight = () => {
  const cols = 22;
  const rows = 40;

  // Generate fixed binary strings for the columns to prevent "flickering"
  const streams = useMemo(() => 
    [...Array(cols)].map(() => 
      [...Array(rows * 2)].map(() => (Math.random() > 0.5 ? '1' : '0')).join('\n')
    ), []
  );

  return (
    <div style={{ position: 'relative', width: '380px', height: '420px', overflow: 'hidden', backgroundColor: '#000' }}>
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
          animation: slowStream var(--speed) linear infinite;
        }
        @keyframes searchlight {
          0% { left: 10%; top: 10%; }
          33% { left: 60%; top: 50%; }
          66% { left: 20%; top: 80%; }
          100% { left: 10%; top: 10%; }
        }
        .light-mask {
          position: absolute;
          width: 120px; /* Tight, focused beam */
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%, transparent 80%);
          pointer-events: none;
          z-index: 10;
          animation: searchlight 18s infinite ease-in-out;
          mix-blend-mode: hard-light;
          filter: blur(4px);
        }
        .abyss {
          display: flex;
          gap: 10px;
          opacity: 0.03; /* Nearly invisible noise */
          color: #fff;
        }
        .revealed {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          gap: 10px;
          color: #fff;
          mask-image: radial-gradient(circle 60px at var(--x) var(--y), black 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle 60px at var(--x) var(--y), black 0%, transparent 100%);
        }
      `}</style>

      {/* The Dynamic Masking Element */}
      <div className="light-mask" id="spotlight-element"></div>

      {/* The Background Noise (The Abyss) */}
      <div className="abyss">
        {streams.map((content, i) => (
          <div key={i} className="stream-col" style={{ '--speed': '35s' }}>
            {content}
          </div>
        ))}
      </div>

      {/* The Reveal Layer: This is only visible via JS-updated masking coordinates */}
      <div className="revealed" id="revealed-layer">
        {streams.map((content, i) => (
          <div key={i} className="stream-col" style={{ '--speed': '35s' }}>
            {content}
          </div>
        ))}
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const light = document.getElementById('spotlight-element');
        const revealed = document.getElementById('revealed-layer');
        function updateMask() {
          const rect = light.getBoundingClientRect();
          const parentRect = light.parentElement.getBoundingClientRect();
          const x = (rect.left - parentRect.left + 60) + 'px';
          const y = (rect.top - parentRect.top + 60) + 'px';
          revealed.style.setProperty('--x', x);
          revealed.style.setProperty('--y', y);
          requestAnimationFrame(updateMask);
        }
        updateMask();
      `}} />
    </div>
  );
};

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 20px', scrollBehavior: 'smooth' }}>
      
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
