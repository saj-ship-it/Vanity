import React, { useState, useEffect } from 'react';

// --- PERSISTENT INSTITUTIONAL HEADER STATUS ---
const SystemStatus = () => {
  const [time, setTime] = useState(new Date().toUTCString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toUTCString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="system-status-container" style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '9px', fontFamily: 'monospace', color: '#4b5563', letterSpacing: '0.1em' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
        <span>SYSTEM_OPERATIONAL</span>
      </div>
      <span className="time-ticker-desktop">{time}</span>
    </div>
  );
};

export default function AUITerminal() {
  const [view, setView] = useState('home'); // 'home' or 'intake'
  const [status, setStatus] = useState('idle');

  // Forces window frames back to the top whenever the viewport switches views
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [view]);

  // Descriptive 4-Step Operational Narrative Grid
  const processSteps = [
    { title: 'PHASE 01 // MAP LANDSCAPE', desc: 'Identify custom, non-obvious vulnerabilities and strategic variables specific to your sector.' },
    { title: 'PHASE 02 // BUILD PIPELINES', desc: 'Construct dedicated data architecture traps to ingest, filter, and verify pristine data feeds.' },
    { title: 'PHASE 03 // MONITOR SHIFTS', desc: 'Machine learning tracks raw streams 24/7, watching for subtle pattern breaks and anomalies.' },
    { title: 'PHASE 04 // ADVANCE WARNING', desc: 'Issue predictive trend break alerts directly to your secure dashboard before the market reacts.' }
  ];

  // Harmonized Operational Sectors (Unified Casing & Status Copy)
  const sectors = [
    { name: 'Defence & Intelligence', status: 'SIGNAL_ISOLATION // ACTIVE', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'Media & Entertainment', status: 'NARRATIVE_TRACKING // LIVE', path: 'M2 3h20v14H2z M12 17v4' },
    { name: 'Energy & Infrastructure', status: 'ANOMALY_DETECTION // MONITORING', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'Logistics', status: 'SUPPLY_CHAIN_INTERCEPT // TRACKING', path: 'M1 3h15v13H1z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z' },
    { name: 'Politics', status: 'ASYMMETRIC_SURVEILLANCE // ONLINE', path: 'M12 5c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3z M3 8v11c0 1.66 4.03 3 9 3s9-1.34 9-3V8' },
    { name: 'Financial Markets', status: 'VOLATILITY_INTERCEPT // SHIELDED', path: 'M18 20V4 M6 20v-4 M12 20v-10' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => { setStatus('success'); }, 1000);
  };

  const selectSectorNode = () => {
    setView('intake');
    setStatus('idle');
  };

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 20px', overflowX: 'hidden', scrollBehavior: 'smooth', scrollPaddingTop: '130px' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes terminalSlideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dynamicSpotlight {
          0% { cx: 320px; cy: 300px; r: 75px; }
          25% { cx: 480px; cy: 340px; r: 80px; }
          50% { cx: 450px; cy: 500px; r: 85px; }
          75% { cx: 300px; cy: 460px; r: 80px; }
          100% { cx: 320px; cy: 300px; r: 75px; }
        }
        .spotlight-lens {
          animation: dynamicSpotlight 16s infinite ease-in-out;
        }
        
        .header-fixed-carrier {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 200;
          background-color: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #111;
          padding: 15px 20px 12px 20px;
        }
        
        .header-container { display: flex; flex-direction: column; gap: 12px; max-width: 1200px; margin: 0 auto; width: 100%; }
        .header-meta-row { display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 100%; }
        
        .time-ticker-desktop { display: none; }
        
        .hero-layout { display: flex; flex-direction: column; position: relative; margin-top: 130px; margin-bottom: 20px; min-height: auto; align-items: center; text-align: center; }
        
        .globe-container { position: relative; width: 90vw; max-width: 480px; height: 420px; margin-top: -10px; margin-bottom: -10px; overflow: hidden; pointer-events: none; display: flex; justify-content: center; align-items: center; margin-left: auto; margin-right: auto; }
        
        .process-img { width: 100%; height: auto; display: block; opacity: 0.9; mix-blend-mode: screen; }
        .responsive-sectors { display: grid; grid-template-columns: 1fr; gap: 24px; }
        
        /* FIXED: Corrected style declarations to standard CSS background properties */
        .sector-node-card {
          background-color: #050505;
          border: 1px solid #1a1a1a;
          padding: 40px 30px 30px 30px;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        
        .nav-links { display: flex; justify-content: space-around; width: 100%; gap: 4px; font-family: monospace; letter-spacing: 0.05em; }
        .nav-links a, .nav-links button { color: #a3a3a3; background: none; border: none; padding: 0; text-decoration: none; font-size: 11px; font-weight: bold; white-space: nowrap; font-family: monospace; cursor: pointer; }
        .nav-links a:hover, .nav-links button:hover { color: #2563eb; }
        .mobile-prefix-marker { display: none; }

        .intake-terminal-box {
          width: 100%;
          max-width: 440px;
          border: 1px solid #222;
          background-color: #0a0a0a;
          padding: 30px 20px;
          margin: 140px auto 40px auto;
          box-sizing: border-box;
        }

        /* Tablet & Desktop Adjustments Override */
        @media (min-width: 768px) {
          .header-fixed-carrier { padding: 25px 40px 15px 40px; }
          .header-container { gap: 15px; }
          .header-meta-row { align-items: center; gap: 15px; }
          
          .time-ticker-desktop { display: inline; }
          .mobile-prefix-marker { display: inline; }
          
          .hero-layout { flex-direction: row; text-align: left; align-items: center; min-height: 460px; margin-bottom: 40px; margin-top: 160px; }
          
          .globe-container { position: absolute; right: -2vw; top: 45%; transform: translateY(-50%); width: 580px; height: 580px; max-width: none; margin-top: 0; margin-bottom: 0; left: auto; margin-left: 0; margin-right: 0; }
          
          .process-img { width: 60%; }
          .responsive-sectors { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
          .sector-node-card:hover { border-color: #2563eb; transform: translateY(-2px); }
          
          .nav-links { justify-content: flex-start; gap: 30px; letter-spacing: 0.2em; }
          .nav-links a { font-size: 11px; }
          
          .intake-terminal-box { padding: 40px 25px; margin-top: 180px; }
        }
      `}</style>
      
      {/* HEADER WRAPPER */}
      <div className="header-fixed-carrier">
        <header className="header-container">
          <div className="header-meta-row">
            <strong style={{ border: '1px solid #333', padding: '6px 12px', letterSpacing: '0.3em', fontSize: '9px', opacity: 0.9, display: 'inline-block' }}>AUTHENTIC INTELLIGENCE</strong>
            <SystemStatus />
          </div>
          
          {/* LINK ROW */}
          <nav className="nav-links">
            {view === 'home' ? (
              <>
                <a href="#objective"><span className="mobile-prefix-marker">// </span>01_OBJ</a>
                <a href="#process"><span className="mobile-prefix-marker">// </span>02_PROCESS</a>
                <a href="#sectors"><span className="mobile-prefix-marker">// </span>03_SECTORS</a>
              </>
            ) : (
              <button onClick={() => setView('home')} style={{ color: '#fff', letterSpacing: '0.1em' }}>
                [X] RETURN_TO_CORE_INTERFACE
              </button>
            )}
          </nav>
        </header>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {view === 'home' ? (
          /* VIEW 01: CORE ACTIVE SYSTEM PORTAL */
          <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
            
            {/* HERO SECTION */}
            <section className="hero-layout">
              <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10, padding: '0 10px' }}>
                <h1 style={{ fontSize: 'clamp(40px, 7vw, 82px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '25px' }}>
                  FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
                </h1>
                <p style={{ color: '#9ca3af', maxWidth: '440px', margin: '0 auto', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
                  Predictive Intelligence for Enterprise
                </p>
              </div>
              
              {/* RESPONSIVE MASKED GLOBE */}
              <div className="globe-container">
                <svg viewBox="0 0 780 780" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <mask id="lensReveal">
                      <rect width="780" height="780" fill="white" />
                      <circle className="spotlight-lens" fill="black" filter="blur(25px)" />
                    </mask>
                  </defs>
                  <image href="/globe-signal.png" width="780" height="780" style={{ mixBlendMode: 'screen' }} />
                  <rect width="780" height="780" fill="#050505" fillOpacity="0.75" mask="url(#lensReveal)" />
                </svg>
              </div>
            </section>

            {/* SECTION [01.5]: THE MANIFESTO BRIDGE */}
            <section id="objective" style={{ borderTop: '1px solid #111', paddingTop: '60px', paddingBottom: '40px', maxWidth: '1000px' }}>
              <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '30px' }}>[01] CORE MISSION OBJECTIVE</h2>
              <p style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: '600', lineHeight: '1.4', letterSpacing: '-0.02em', color: '#fff' }}>
                We deploy <span style={{ color: '#2563eb' }}>customized intelligence pipelines</span> engineered to detect hidden risks, opportunities, and threats—giving high-stakes decision-makers the absolute advance warning required to act first.
              </p>
            </section>

            {/* INTEGRATED PROCESS Display */}
            <section id="process" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '50px' }}>[02] PREDICTIVE INTELLIGENCE PROCESS</h2>
              
              <div style={{ width: '100%', padding: '20px 0', marginBottom: '50px', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                <img 
                  src="/process-map.png" 
                  alt="AUI 4-Phase System Infrastructure Map" 
                  className="process-img"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
                {processSteps.map((step) => (
                  <div key={step.title} style={{ borderLeft: '2px solid #2563eb', paddingLeft: '20px' }}>
                    <h4 style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.2em', color: '#fff', marginBottom: '15px' }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', fontWeight: '300' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* HARMONIZED OPERATIONAL SECTORS MATRIX */}
            <section id="sectors" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '100px' }}>
              <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '20px' }}>[03] OPERATIONAL SECTORS</h2>
              
              <p style={{ fontSize: 'clamp(20px, 3.2vw, 30px)', fontWeight: '600', lineHeight: '1.4', letterSpacing: '-0.02em', color: '#9ca3af', maxWidth: '1000px', marginBottom: '60px' }}>
                Each node represents a fully isolated, <span style={{ color: '#fff' }}>100% custom architecture</span> under the absolute control of the user, deployed to secure sovereign operational advantages.
              </p>

              <div className="responsive-sectors">
                {sectors.map((s) => (
                  <div 
                    key={s.name} 
                    onClick={triggerIntakePortal}
                    className="sector-node-card"
                  >
                    <div style={{ textAlign: 'center', width: '100%' }}>
                      <h4 style={{ fontSize: '16px', letterSpacing: '0.1em', color: '#fff', fontWeight: 'bold', fontFamily: 'monospace', margin: '0 0 25px 0' }}>
                        {s.name.toUpperCase()}
                      </h4>
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '45px' }}>
                        <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.15">
                          <path d={s.path} />
                        </svg>
                      </div>
                    </div>

                    <div style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.15em', color: '#9ca3af', borderTop: '1px solid #1a1a1a', paddingTop: '15px', textAlign: 'center', marginTop: 'auto' }}>
                      {s.status}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* VIEW 02: APPLICATION INTAKE PORTAL */
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'terminalSlideUp 0.3s ease-out' }}>
            <div className="intake-terminal-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: '#4b5563', fontWeight: 'bold', fontFamily: 'monospace' }}>CONSULT_INTAKE [v12.0]</span>
                <button onClick={() => setView('home')} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer', fontSize: '10px', fontFamily: 'monospace' }}>[X] CANCEL</button>
              </div>

              {status === 'success' ? (
                <div style={{ padding: '10px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#22c55e', marginBottom: '15px', fontWeight: 'bold', fontFamily: 'monospace' }}>TRANSMISSION_SUCCESSFUL</div>
                  <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px', fontWeight: '300' }}>Secure digital handshake recorded. Advisory routing initiated via encrypted communication tunnels.</p>
                  <button onClick={() => setView('home')} style={{ border: '1px solid #333', color: 'white', background: 'none', padding: '12px 30px', fontSize: '10px', letterSpacing: '0.1em', cursor: 'pointer', fontFamily: 'monospace' }}>RETURN_TO_CORE</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label style={{ display: 'block', fontSize: '9px', color: '#4b5563', marginBottom: '15px', letterSpacing: '0.2em', fontFamily: 'monospace' }}>ENTITY_IDENTITY</label>
                  <input type="email" name="email" required style={{ width: '100%', backgroundColor: '#000', border: '1px solid #222', padding: '18px', color: 'white', fontFamily: 'monospace', marginBottom: '35px', outline: 'none', fontSize: '14px', boxSizing: 'border-box' }} placeholder="identity@org.sovereign" />
                  
                  <button type="submit" disabled={status === 'loading'} style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '22px', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '11px' }}>
                    {status === 'loading' ? "ROUTING HANDSHAKE..." : "INITIALIZE SECURE CONNECTION"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <div style={{ width: '100%', textAlign: 'center', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.3em', color: '#9ca3af', paddingBottom: '30px', borderTop: '1px solid #111', paddingTop: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        INQUIRIES // info@findsignal.ai
      </div>

      <footer style={{ padding: '0 0 60px 0', fontSize: '8px', color: '#6b7280', letterSpacing: '0.5em', textAlign: 'center' }}>
        © 2026 AUTHENTIC INTELLIGENCE INC.
      </footer>
    </div>
  );
}
