import React, { useState, useMemo } from 'react';

// THE HIGH-FIDELITY DOTTED WORLD ORB
const WorldDataOrb = () => {
  // A high-resolution bitmask representing the actual global silhouette
  const mapGrid = [
    "0000000000000000000000000000000000000000",
    "0011111000000000000000011111111111100000",
    "011111110000000000001111111111111111000",
    "111111111000000001111111111111111111100",
    "111111111000000001111111111111111111110",
    "011111110000000000111111111111111111110",
    "001111000000000000011111111111111111100",
    "000110000000000000001111111111111111000",
    "000110000000000000000111111111111110000",
    "000110000000000000000011111111111000000",
    "000010000000000000000001111111100000000",
    "000000000000000000000000111110000000000"
  ];

  return (
    <div className="orb-container">
      <style>{`
        .orb-container { 
          position: relative; width: 340px; height: 340px; background-color: #000; border-radius: 50%; overflow: hidden; 
          -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%); 
          mask-image: radial-gradient(circle, black 70%, transparent 100%); 
        }
        @media (max-width: 1024px) { 
          .orb-container { width: 260px; height: 260px; margin: 40px auto; } 
        }
        
        /* THE DYNAMIC SPOTLIGHT */
        @keyframes spotlightSweep {
          0% { -webkit-mask-position: 10% 20%; mask-position: 10% 20%; }
          50% { -webkit-mask-position: 85% 60%; mask-position: 85% 60%; }
          100% { -webkit-mask-position: 10% 20%; mask-position: 10% 20%; }
        }

        .signal-mask {
          position: absolute; inset: 0;
          -webkit-mask-image: radial-gradient(circle 55px at center, black 100%, transparent 100%);
          mask-image: radial-gradient(circle 55px at center, black 100%, transparent 100%);
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 200% 200%;
          animation: spotlightSweep 10s infinite ease-in-out;
          z-index: 2;
        }

        .dot { border-radius: 50%; position: absolute; }
      `}</style>
      
      {/* NOISE LAYER: Baseline Visibility (45%) */}
      <div style={{ position: 'absolute', inset: '40px', opacity: 0.45, zIndex: 1 }}>
        <svg viewBox="0 0 40 12" width="100%" height="100%">
          {mapGrid.map((row, y) => row.split('').map((bit, x) => (
            bit === '1' && <circle key={`n-${x}-${y}`} cx={x} cy={y} r="0.32" fill="white" />
          )))}
        </svg>
      </div>

      {/* SIGNAL LAYER: The Cream Reveal (100%) */}
      <div className="signal-mask" style={{ padding: '40px' }}>
        <svg viewBox="0 0 40 12" width="100%" height="100%">
          {mapGrid.map((row, y) => row.split('').map((bit, x) => (
            bit === '1' && <circle key={`s-${x}-${y}`} cx={x} cy={y} r="0.38" fill="#FFFDD0" style={{ filter: 'drop-shadow(0 0 2px rgba(255,253,208,0.5))' }} />
          )))}
        </svg>
      </div>
    </div>
  );
};

// ... Rest of the components (Header, Methodology, Sectors, Modal) remain consistent with previous build

export default function VanitySite() {
  const [showForm, setShowForm] = useState(false);

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

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '0 40px', overflowX: 'hidden' }}>
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
              .hero-graphic { position: relative; top: 0; left: 0; transform: none; width: 100%; display: center; justify-content: center; margin-top: 40px; }
            }
          `}</style>
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '40px' }}>FIND SIGNAL <br /> <span style={{ color: '#2563eb' }}>IN THE NOISE.</span></h1>
            <p style={{ color: '#9ca3af', maxWidth: '480px', marginBottom: '25px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>Predictive analytics for high-stakes decision makers.</p>
            <p style={{ color: '#fff', maxWidth: '480px', marginBottom: '60px', lineHeight: '1.6', fontSize: '18px', fontWeight: '300' }}>We find and monitor non-obvious data pipelines to detect trend breaks first and before impact.</p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'white', color: 'black', padding: '22px 45px', fontWeight: '900', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer' }}>REQUEST SECURE BRIEFING</button>
          </div>
          <div className="hero-graphic"><WorldDataOrb /></div>
        </section>

        {/* Methodology and Sectors logic continues... */}
      </main>
    </div>
  );
}
