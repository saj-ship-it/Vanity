import React, { useState, useMemo, useEffect } from 'react';

// --- SYSTEM COMPONENTS ---

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

const DataOrb = () => {
  const cols = 22; 
  const rows = 40;
  const streams = useMemo(() => 
    [...Array(cols)].map(() => 
      [...Array(rows * 2)].map(() => (Math.random() > 0.5 ? '1' : '0')).join('\n')
    ), []
  );

  return (
    <div className="orb-container">
      <style>{`
        .orb-container { 
          position: relative; width: 300px; height: 300px; background-color: #000; border-radius: 50%; overflow: hidden; 
          -webkit-mask-image: radial-gradient(circle, black 65%, transparent 100%); 
          mask-image: radial-gradient(circle, black 65%, transparent 100%);
        }
        @keyframes streamFall { 0% { transform: translateY(-50%); } 100% { transform: translateY(0%); } }
        .data-column { font-family: 'Courier New', monospace; font-size: 10px; line-height: 1.2; white-space: pre; animation: streamFall 60s linear infinite; }
        @keyframes spotlightMove { 
          0% { -webkit-mask-position: 15% 15%; mask-position: 15% 15%; } 
          50% { -webkit-mask-position: 85% 50%; mask-position: 85% 50%; } 
          100% { -webkit-mask-position: 15% 15%; mask-position: 15% 15%; } 
        }
        .signal-layer { 
          position: absolute; inset: 0; display: flex; gap: 10px; padding: 10px; color: #FFFDD0; font-weight: bold; z-index: 2; 
          -webkit-mask-image: radial-gradient(circle 45px at center, black 100%, transparent 100%);
          mask-image: radial-gradient(circle 45px at center, black 100%, transparent 100%);
          -webkit-mask-repeat: no-repeat; -webkit-mask-size: 200% 200%; animation: spotlightMove 12s infinite ease-in-out; 
        }
        .noise-layer { position: absolute; inset: 0; display: flex; gap: 10px; padding: 10px; color: white; opacity: 0.12; z-index: 1; }
      `}</style>
      <div className="noise-layer">{streams.map((content, i) => (<div key={i} className="data-column">{content}</div>))}</div>
      <div className="signal-layer">{streams.map((content, i) => (<div key={i} className="data-column">{content}</div>))}</div>
    </div>
  );
};

export default function AUITerminal() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('idle');

  const sectors = [
    { name: 'DEFENCE & INTEL', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'MEDIA & DISINFO', path: 'M2 3h20v14H2z M12 17v4' },
    { name: 'ENERGY INFRA', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'LOGISTICS', path: 'M1 3h15v13H1z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z' },
    { name: 'PRIVATE EQUITY', path: 'M12 5c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3z M3 8v11c0 1.66 4.03 3 9 3s9-1.34 9-3V8' },
    { name: 'FINANCE', path: 'M18 20V4 M6 20v-4 M12 20v-10' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 40px' }}>
      
      {/* HEADER: Persistent */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 0', borderBottom: '1px solid #111' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.8 }}>AUTHENTIC INTELLIGENCE</strong>
          {!showForm && <SystemStatus />}
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HERO: ONLY RENDERS IF FORM IS HIDDEN */}
        {!showForm ? (
          <>
            <section style={{ position: 'relative', marginTop: '120px', marginBottom: '180px', minHeight: '450px' }}>
              <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: 'clamp(44px, 8vw, 82px)', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.04em', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
                <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '19px', fontWeight: '300' }}>Strategic lead-time for high-stakes decision makers.</p>
                <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>AUI monitors latent data pipelines to detect trend breaks before they manifest in the public narrative.</p>
                <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>SCHEDULE STRATEGIC CONSULT</button>
              </div>
              <div style={{ position: 'absolute', top: '35%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                <DataOrb />
              </div>
            </section>

            <section id="sectors" style={{ borderTop: '1px solid #111', paddingTop: '100px', marginBottom: '140px' }}>
              <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>[03] OPERATIONAL SECTORS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: '#111', border: '1px solid #111' }}>
                {sectors.map((s) => (
                  <div key={s.name} style={{ backgroundColor: '#050505', padding: '60px 20px', textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" style={{ marginBottom: '20px' }}><path d={s.path} /></svg>
                    <h4 style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#fff' }}>{s.name}</h4>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* MODAL VIEW: ZERO INTERFERENCE */
          <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.4s ease' }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
            <div style={{ width: '420px', border: '1px solid #222', backgroundColor: '#0a0a0a', padding: '60px 40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.4em', color: '#4b5563', fontWeight: 'bold' }}>CONSULT_INTAKE [v8.0]</span>
                <button onClick={() => {setShowForm(false); setStatus('idle');}} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer', fontSize: '10px' }}>[X] CANCEL</button>
              </div>
              
              <form onSubmit={(e) => { e.preventDefault(); setStatus('loading'); setTimeout(() => setStatus('error'), 1200); }}>
                <label style={{ display: 'block', fontSize: '9px', color: '#4b5563', marginBottom: '15px', letterSpacing: '0.2em' }}>ENTITY_IDENTITY</label>
                <input type="email" name="email" required style={{ width: '100%', backgroundColor: '#000', border: '1px solid #222', padding: '18px', color: 'white', fontFamily: 'monospace', marginBottom: '35px', outline: 'none', fontSize: '14px' }} placeholder="identity@org.sovereign" />
                <button type="submit" style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '22px', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '11px' }}>
                  {status === 'loading' ? "INITIALIZING..." : "SECURE CONNECTION"}
                </button>
                {status === 'error' && <p style={{ color: '#ef4444', fontSize: '10px', marginTop: '25px', fontFamily: 'monospace', textAlign: 'center' }}>ERR: ENDPOINT_OFFLINE</p>}
              </form>
            </div>
          </div>
        )}
      </main>

      <footer style={{ padding: '80px 0', borderTop: '1px solid #111', fontSize: '8px', color: '#1f2937', letterSpacing: '0.5em', textAlign: 'center' }}>
        RESTRICTED ACCESS // © 2026 AUTHENTIC INTELLIGENCE INC.
      </footer>
    </div>
  );
}
