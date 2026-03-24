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
      <span style={{ color: '#1f2937' }}>NODES_ACTIVE: 14,882</span>
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
          z-index: 1;
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

// --- MAIN APPLICATION ---

export default function AUI_Terminal() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('error'), 1500); // Simulate API call
  };

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      
      {/* INSTITUTIONAL HEADER */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 0', borderBottom: '1px solid #111' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.8 }}>AUTHENTIC INTELLIGENCE</strong>
          <SystemStatus />
        </div>
        <nav style={{ display: 'flex', gap: '40px', letterSpacing: '0.4em', fontSize: '9px', opacity: 0.6 }}>
          <a href="#architecture" style={{ color: 'white', textDecoration: 'none' }}>01_ARCHITECTURE</a>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>02_METHODOLOGY</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>03_SECTORS</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HERO SECTION */}
        <section style={{ position: 'relative', marginTop: '120px', marginBottom: '180px', minHeight: '450px' }}>
          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10 }}>
            <h1 style={{ fontSize: 'clamp(44px, 8vw, 82px)', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-0.04em', marginBottom: '40px' }}>
              FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span>
            </h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '19px', fontWeight: '300' }}>
              Strategic lead-time for high-stakes decision makers.
            </p>
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>
              AUI monitors latent data pipelines to detect trend breaks before they manifest in the public narrative.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>
                SCHEDULE STRATEGIC CONSULT
              </button>
            </div>
          </div>
          <div style={{ position: 'absolute', top: '35%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            <DataOrb />
          </div>
        </section>

        {/* ARCHITECTURE SCHEMATIC */}
        <section id="architecture" style={{ borderTop: '1px solid #111', paddingTop: '100px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>[01] INGESTION ARCHITECTURE</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ border: '1px solid #1a1a1a', padding: '40px', position: 'relative' }}>
               <div style={{ fontSize: '10px', color: '#2563eb', marginBottom: '20px', fontFamily: 'monospace' }}>MESH_NETWORK_V4.8</div>
               <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#9ca3af' }}>We operate a distributed mesh of peripheral nodes that ingest raw telemetry—logistics logs, frequency shifts, and geopolitical micro-signals—bypassing sanitized institutional reporting.</p>
               <div style={{ marginTop: '30px', height: '1px', width: '100%', backgroundColor: '#333' }} />
               <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontFamily: 'monospace', color: '#374151' }}>
                 <span>LATENCY: &lt;12MS</span>
                 <span>INTEGRITY: 99.9%</span>
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[ 'PERIPHERAL_NODES', 'LATENT_INVENTORY', 'SIGNAL_ISOLATION' ].map((label, i) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#2563eb' }}>0{i+1}</span>
                    <div style={{ height: '1px', flexGrow: 1, backgroundColor: '#111' }} />
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', opacity: 0.5 }}>{label}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section id="method" style={{ borderTop: '1px solid #111', paddingTop: '100px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>[02] OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
             {/* Methodology columns follow originalapproved text... */}
             <div><h3 style={{ fontSize: '13px', marginBottom: '20px' }}>INGESTION</h3><p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Direct raw stream access without third-party sanitization.</p></div>
             <div><h3 style={{ fontSize: '13px', marginBottom: '20px' }}>ISOLATION</h3><p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Algorithmic filtering of noise to extract high-probability trend breaks.</p></div>
             <div><h3 style={{ fontSize: '13px', marginBottom: '20px' }}>ADVISORY</h3><p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Zero-latency briefing delivered via encrypted sovereign channels.</p></div>
             <div style={{ borderLeft: '1px solid #111', paddingLeft: '20px', color: '#FFFDD0' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.3em' }}>STEP_04</span>
                <div style={{ fontSize: '12px', marginTop: '5px' }}>THREAT_ALERT</div>
             </div>
          </div>
        </section>

      </main>

      {/* LAYER-ISOLATED MODAL */}
      {showForm && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '420px', border: '1px solid #333', backgroundColor: '#050505', padding: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#4b5563' }}>CONSULT_INTAKE [v6.0]</span>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '10px' }}>[CLOSE]</button>
            </div>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', fontSize: '9px', color: '#4b5563', marginBottom: '10px', letterSpacing: '0.1em' }}>CORPORATE_IDENTITY</label>
              <input type="email" name="email" required style={{ width: '100%', backgroundColor: '#000', border: '1px solid #333', padding: '15px', color: 'white', fontFamily: 'monospace', marginBottom: '30px', outline: 'none' }} placeholder="identity@org.sovereign" />
              <button type="submit" style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '20px', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '11px' }}>
                {status === 'loading' ? "ESTABLISHING..." : "INITIALIZE CONTACT"}
              </button>
              {status === 'error' && <p style={{ color: '#ef4444', fontSize: '10px', marginTop: '20px', fontFamily: 'monospace' }}>ERR: ENDPOINT_NOT_ACTIVE. CONFIGURATION_REQUIRED.</p>}
            </form>
          </div>
        </div>
      )}

      <footer style={{ padding: '80px 0', borderTop: '1px solid #111', fontSize: '8px', color: '#1f2937', letterSpacing: '0.5em', textAlign: 'center' }}>
        RESTRICTED ACCESS // © 2026 AUTHENTIC INTELLIGENCE INC.
      </footer>
    </div>
  );
}
