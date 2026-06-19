import React, { useState, useEffect } from 'react';

// --- PERSISTENT INSTITUTIONAL HEADER STATUS ---
const SystemStatus = () => {
  const [time, setTime] = useState(new Date().toUTCString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toUTCString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontSize: '9px', fontFamily: 'monospace', color: '#4b5563', letterSpacing: '0.1em' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
        <span>SYSTEM_OPERATIONAL</span>
      </div>
      <span>{time}</span>
    </div>
  );
};

export default function AUITerminal() {
  const [view, setView] = useState('home'); // 'home' or 'intake'
  const [status, setStatus] = useState('idle');

  // Restored: Complete Descriptive 4-Step Operational Narrative Grid
  const processSteps = [
    { title: 'PHASE 01 // MAP LANDSCAPE', desc: 'Identify custom, non-obvious vulnerabilities and strategic variables specific to your sector.' },
    { title: 'PHASE 02 // BUILD PIPELINES', desc: 'Construct dedicated data architecture traps to ingest, filter, and verify pristine data feeds.' },
    { title: 'PHASE 03 // MONITOR SHIFTS', desc: 'Machine learning tracks raw streams 24/7, watching for subtle pattern breaks and anomalies.' },
    { title: 'PHASE 04 // ADVANCE WARNING', desc: 'Issue predictive trend break alerts directly to your secure dashboard before the market reacts.' }
  ];

  // Restored: Operational Sectors Array
  const sectors = [
    { name: 'DEFENCE & INTEL', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'MEDIA & DISINFO', path: 'M2 3h20v14H2z M12 17v4' },
    { name: 'ENERGY INFRA', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'LOGISTICS', path: 'M1 3h15v13H1z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z' },
    { name: 'PRIVATE EQUITY', path: 'M12 5c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3z M3 8v11c0 1.66 4.03 3 9 3s9-1.34 9-3V8' },
    { name: 'FINANCE', path: 'M18 20V4 M6 20v-4 M12 20v-10' }
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const inputEmail = e.target.email.value;

    try {
      const response = await fetch('/api/send-briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      
      {/* HEADER SECTION */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '25px 0 15px 0', borderBottom: '1px solid #111' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.8 }}>AUTHENTIC INTELLIGENCE</strong>
          {view === 'home' && <SystemStatus />}
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {view === 'home' ? (
          /* VIEW 01: CORE ACTIVE SYSTEM PORTAL */
          <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <style>{`
              @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
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
            `}</style>
            
            <section style={{ position: 'relative', marginTop: '50px', marginBottom: '100px', minHeight: '520px', display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: 'clamp(44px, 8vw, 82px)', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.04em', marginBottom: '35px' }}>
                  FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
                </h1>
                <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '50px', lineHeight: '1.6', fontSize: '19px', fontWeight: '300' }}>
                  Data is not intelligence. We track complex, hidden variables to deliver actionable foresight before a trend even forms.
                </p>
                <button onClick={() => setView('intake')} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
                  SCHEDULE STRATEGIC CONSULT
                </button>
              </div>
              
              {/* FIXED HOISTED MASKED CONTEXT GLOBE */}
              <div style={{ position: 'absolute', right: '-15%', top: '45%', transform: 'translateY(-50%)', width: '780px', height: '780px', pointerEvents: 'none' }}>
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

            {/* RESTORED: INTEGRATED ARCHITECTURE PROCESS TIMELINE DISPLAY */}
            <section id="process" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '100px' }}>
              <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '50px' }}>[02] PREDICTIVE INTELLIGENCE PROCESS</h2>
              
              {/* Restored: UI frame wrapper displaying the centered 4-step process-map.png exclusively */}
              <div style={{ width: '100%', backgroundColor: '#0a0a0a', border: '1px solid #111', padding: '40px 20px', marginBottom: '60px', borderRadius: '4px', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                <img 
                  src="/process-map.png" 
                  alt="AUI 4-Phase System Infrastructure Map" 
                  style={{ width: '60%', height: 'auto', display: 'block', opacity: 0.9 }}
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              </div>

              {/* Restored: Text Layout Descriptions Grid Breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
                {processSteps.map((step) => (
                  <div key={step.title} style={{ borderLeft: '2px solid #2563eb', paddingLeft: '20px' }}>
                    <h4 style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.2em', color: '#fff', marginBottom: '15px' }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', fontWeight: '300' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* OPERATIONAL SECTORS SECTION */}
            <section id="sectors" style={{ borderTop: '1px solid #111', paddingTop: '80px', marginBottom: '140px' }}>
              <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>[03] OPERATIONAL SECTORS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: '#111', border: '1px solid #111' }}>
                {sectors.map((s) => (
                  <div key={s.name} style={{ backgroundColor: '#050505', padding: '60px 20px', textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" style={{ marginBottom: '20px' }}><path d={s.path} /></svg>
                    <h4 style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#fff' }}>{s.name}</h4>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* VIEW 02: APPLICATION INTAKE PORTAL */
          <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'terminalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <style>{`@keyframes terminalSlideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            
            <div style={{ width: '440px', border: '1px solid #222', backgroundColor: '#0a0a0a', padding: '60px 40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.4em', color: '#4b5563', fontWeight: 'bold' }}>CONSULT_INTAKE [v12.0]</span>
                <button onClick={() => { setView('home'); setStatus('idle'); }} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer', fontSize: '10px' }}>[X] CANCEL</button>
              </div>

              {status === 'success' ? (
                <div style={{ padding: '20px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#22c55e', marginBottom: '15px', fontWeight: 'bold' }}>TRANSMISSION_SUCCESSFUL</div>
                  <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>Secure digital handshake recorded. Advisory routing initiated via encrypted communication tunnels.</p>
                  <button onClick={() => { setView('home'); setStatus('idle'); }} style={{ border: '1px solid #333', color: 'white', background: 'none', padding: '12px 30px', fontSize: '10px', letterSpacing: '0.1em', cursor: 'pointer' }}>RETURN_TO_CORE</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label style={{ display: 'block', fontSize: '9px', color: '#4b5563', marginBottom: '15px', letterSpacing: '0.2em' }}>ENTITY_IDENTITY</label>
                  <input type="email" name="email" required style={{ width: '100%', backgroundColor: '#000', border: '1px solid #222', padding: '18px', color: 'white', fontFamily: 'monospace', marginBottom: '35px', outline: 'none', fontSize: '14px' }} placeholder="identity@org.sovereign" />
                  
                  <button type="submit" disabled={status === 'loading'} style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '22px', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '11px' }}>
                    {status === 'loading' ? "ROUTING HANDSHAKE..." : "INITIALIZE SECURE CONNECTION"}
                  </button>

                  {status === 'error' && (
                    <p style={{ color: '#ef4444', fontSize: '10px', marginTop: '25px', fontFamily: 'monospace', textAlign: 'center' }}>
                      TRANSMISSION LINK FAULT. VERIFY MAIL COMPONENT VARIABLES.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FIXED LEGIBILITY SYSTEM SUB-FOOTER LINE */}
      <div style={{ width: '100%', textAlign: 'center', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.3em', color: '#9ca3af', paddingBottom: '30px', borderTop: '1px solid #111', paddingTop: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        INQUIRIES // info@findsignal.ai
      </div>

      {/* FIXED LEGIBILITY COMPRESSED FOOTER */}
      <footer style={{ padding: '0 0 80px 0', fontSize: '8px', color: '#6b7280', letterSpacing: '0.5em', textAlign: 'center' }}>
        RESTRICTED ACCESS // © 2026 AUTHENTIC INTELLIGENCE INC.
      </footer>
    </div>
  );
}
