import React, { useState, useMemo } from 'react';

// THE STABLE ORB: Abstract Binary, 16% Opacity, Vertical Rain, 12s Sweep
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
        @media (max-width: 1024px) { 
          .orb-container { width: 240px; height: 240px; margin: 40px auto; } 
        }
        @keyframes streamFall { 0% { transform: translateY(-50%); } 100% { transform: translateY(0%); } }
        .data-column { 
          font-family: 'Courier New', monospace; font-size: 10px; line-height: 1.2; white-space: pre; 
          animation: streamFall 60s linear infinite; will-change: transform; 
        }
        @keyframes spotlightMove { 
          0% { -webkit-mask-position: 15% 15%; mask-position: 15% 15%; } 
          33% { -webkit-mask-position: 85% 35%; mask-position: 85% 35%; } 
          66% { -webkit-mask-position: 25% 85%; mask-position: 25% 85%; } 
          100% { -webkit-mask-position: 15% 15%; mask-position: 15% 15%; } 
        }
        .signal-layer { 
          position: absolute; inset: 0; display: flex; gap: 10px; padding: 10px; color: #FFFDD0; font-weight: bold; z-index: 2; 
          -webkit-mask-image: radial-gradient(circle 40px at center, black 100%, transparent 100%); 
          mask-image: radial-gradient(circle 40px at center, black 100%, transparent 100%); 
          -webkit-mask-repeat: no-repeat; -webkit-mask-size: 200% 200%; 
          animation: spotlightMove 12s infinite ease-in-out; 
        }
        .noise-layer { 
          position: absolute; inset: 0; display: flex; gap: 10px; padding: 10px; color: white; opacity: 0.16; z-index: 1; 
        }
      `}</style>
      <div className="noise-layer">{streams.map((content, i) => (<div key={i} className="data-column">{content}</div>))}</div>
      <div className="signal-layer">{streams.map((content, i) => (<div key={i} className="data-column">{content}</div>))}</div>
    </div>
  );
};

// STEP 04 VISUAL: Operational Pipeline
const OperationalFlow = () => {
  const steps = ["MONITOR", "DETECT", "ANALYZE", "ALERT"];
  return (
    <div style={{ paddingLeft: '20px', borderLeft: '1px solid #1f2937', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {steps.map((step, i) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', opacity: 0.4 + (i * 0.2) }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: i === 3 ? '#FFFDD0' : 'white', marginRight: '15px', boxShadow: i === 3 ? '0 0 10px #FFFDD0' : 'none' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: i === 3 ? '#FFFDD0' : 'white', fontWeight: i === 3 ? 'bold' : 'normal' }}>STEP_0{i + 1}</span>
            <span style={{ fontSize: '12px', letterSpacing: '0.1em', color: i === 3 ? '#FFFDD0' : 'white' }}>{step}</span>
          </div>
          {i < 3 && <div style={{ position: 'absolute', height: '25px', width: '1px', backgroundColor: 'white', opacity: 0.2, marginLeft: '3.5px', marginTop: '38px' }} />}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const email = e.target.email.value;

    try {
      const response = await fetch('/api/send-briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error'); 
    }
  };

  const sectors = [
    { name: 'DEFENCE & INTEL', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'MEDIA & DISINFO', path: 'M2 3h20v14H2z M12 17v4' },
    { name: 'ENERGY INFRA', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { name: 'HEALTHCARE', path: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' },
    { name: 'LOGISTICS', path: 'M1 3h15v13H1z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z' },
    { name: 'PRIVATE EQUITY', path: 'M12 5c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3z M3 8v11c0 1.66 4.03 3 9 3s9-1.34 9-3V8' },
    { name: 'FINANCE', path: 'M18 20V4 M6 20v-4 M12 20v-10' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
      
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 0 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '60px' }}>
        <strong style={{ border: '1px solid #333', padding: '8px 15px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>AUTHENTIC INTELLIGENCE</strong>
        <nav style={{ display: 'flex', gap: '40px', letterSpacing: '0.4em', fontSize: '10px', opacity: 0.7 }}>
          <a href="#method" style={{ color: 'white', textDecoration: 'none' }}>METHOD</a>
          <a href="#sectors" style={{ color: 'white', textDecoration: 'none' }}>SECTORS</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section className="hero-section">
          <style>{`
            .hero-section { position: relative; margin-top: 140px; margin-bottom: 140px; min-height: 450px; }
            .hero-graphic { position: absolute; top: 35%; left: 75%; transform: translate(-50%, -50%); z-index: 1; }
            @media (max-width: 1024px) {
              .hero-section { display: flex; flex-direction: column; align-items: flex-start; margin-top: 80px; }
              .hero-graphic { position: relative; top: 0; left: 0; transform: none; width: 100%; display: flex; justify-content: center; margin-top: 40px; }
            }
          `}</style>
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>Predictive analytics for high-stakes decision makers.</p>
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>We monitor latent data pipelines to detect trend breaks first and before impact.</p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>REQUEST SECURE BRIEFING</button>
          </div>
          <div className="hero-graphic"><DataOrb /></div>
        </section>

        <section id="method" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL METHODOLOGY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            <style>{` @media (max-width: 1024px) { #method-grid { grid-template-columns: 1fr !important; } } `}</style>
            <div id="method-grid" style={{ display: 'contents' }}>
              <div><h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[01] THE FEED</h3><p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Raw Ingestion.</p><p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>Ingesting peripheral nodes—geopolitical shifts and disruptions—before they reach market lag.</p></div>
              <div><h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[02] PATTERN ISOLATION</h3><p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Anomalous Detection.</p><p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>Our proprietary logic filters the abyss to isolate anomalies that represent warning signs of volatility.</p></div>
              <div><h3 style={{ fontSize: '14px', margin: '0 0 20px', letterSpacing: '0.1em' }}>[03] ADVISORY DELIVERY</h3><p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Zero-Latency Access.</p><p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>Insights delivered via secure channels, giving decision-makers a window of opportunity to position before impact.</p></div>
              <OperationalFlow />
            </div>
          </div>
        </section>

        {/* RESTORED SECTORS SECTION */}
        <section id="sectors" style={{ borderTop: '1px solid #1f2937', paddingTop: '80px', marginBottom: '140px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#4b5563', marginBottom: '60px' }}>OPERATIONAL SECTORS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {sectors.map((s) => (
              <div key={s.name} style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" style={{ marginBottom: '20px' }}><path d={s.path} /></svg>
                <h4 style={{ fontSize: '11px', letterSpacing: '0.1em' }}>{s.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showForm && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zSegIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '400px', border: '1px solid #333', backgroundColor: '#050505', padding: '40px' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#FFFDD0', fontSize: '12px', letterSpacing: '0.2em' }}>TRANSMISSION SUCCESSFUL.</p>
                <button onClick={() => {setShowForm(false); setStatus('idle');}} style={{ background: 'none', border: '1px solid #333', color: 'white', padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>RETURN</button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#4b5563' }}>SECURE INTAKE [v5.1]</span>
                  <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '12px' }}>[X] CLOSE</button>
                </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '10px', color: '#9ca3af', marginBottom: '10px', letterSpacing: '0.1em' }}>ENTER WORK EMAIL</label>
                  <input id="email" type="email" name="email" required style={{ width: '100%', backgroundColor: '#000', border: '1px solid #FFFDD0', padding: '15px', color: 'white', fontFamily: 'monospace', marginBottom: '20px', outline: 'none' }} placeholder="user@organization.tld" />
                  {status === 'error' && <p style={{ color: '#eb4034', fontSize: '10px', marginBottom: '10px' }}>ERROR: ENDPOINT NOT CONFIGURED.</p>}
                  <button type="submit" disabled={status === 'loading'} style={{ width: '100%', backgroundColor: '#FFFDD0', color: 'black', padding: '20px', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '11px' }}>
                    {status === 'loading' ? "TRANSMITTING..." : "INITIALIZE BRIEFING"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <footer style={{ padding: '60px 0', borderTop: '1px solid #111', fontSize: '9px', color: '#374151', letterSpacing: '0.4em', textAlign: 'center' }}>
        © 2026 AUI INC. // AUTHENTICINTEL.COM
      </footer>
    </div>
  );
}
