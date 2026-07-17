import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ProductTerminal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);
  
  const [data, setData] = useState({
    composite_signal_score: 0.0,
    system_state: 'INITIALIZING_CORE...',
    metrics_delta: { temporal_divergence: 0.0, linguistic_divergence: 0.0 },
    active_multipliers: []
  });

  // Handle password validation
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // Replace 'ENTER_YOUR_SECURE_PASSWORD' with your desired dashboard password
    if (passwordInput === 'ENTER PASSWORD') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  // Only start fetching data once the user is successfully authenticated
  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchSignal() {
      try {
        const response = await fetch('/api/signal');
        const json = await response.json();
        if (json && json.target_entity) {
          setData(json);
        }
      } catch (err) {
        console.error("Failed to connect to data stream:", err);
      }
    }

    fetchSignal();
    const interval = setInterval(fetchSignal, 3000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const score = data.composite_signal_score;

  // Render the Password Lock Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'monospace', display: 'flex', alignItems: 'center', justifycontent: 'center', padding: '20px' }}>
        <Head>
          <title>AUI Terminal // Secure Access Node</title>
        </Head>
        <div style={{ border: '1px solid #222', backgroundColor: '#0a0a0a', padding: '40px 30px', borderRadius: '4px', maxWidth: '400px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ fontSize: '10px', color: '#4b5563', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 'bold' }}>
            // ACCESS_RESTRICTED_NODE
          </div>
          <h2 style={{ fontSize: '18px', letterSpacing: '0.05em', margin: '0 0 30px 0', fontWeight: 'normal' }}>AUTHENTICATION REQUIRED</h2>
          
          <form onSubmit={handleAuthSubmit}>
            <label style={{ display: 'block', fontSize: '9px', color: '#9ca3af', marginBottom: '10px', letterSpacing: '0.1em' }}>ENTER ACCESS KEY:</label>
            <input 
              type="password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ width: '100%', backgroundColor: '#000', border: authError ? '1px solid #ef4444' : '1px solid #222', padding: '14px', color: '#fff', fontFamily: 'monospace', fontSize: '14px', marginBottom: '20px', outline: 'none', boxSizing: 'border-box' }} 
              placeholder="••••••••••••"
              autoFocus
            />
            {authError && (
              <div style={{ color: '#ef4444', fontSize: '11px', marginBottom: '20px' }}>
                ✕ INVALID_KEY_ACCESS_DENIED
              </div>
            )}
            <button type="submit" style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', padding: '14px', fontWeight: 'bold', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', fontSize: '11px' }}>
              DECRYPT_NODE_INTERFACE
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Core Terminal UI if authenticated
  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'monospace', padding: '40px' }}>
      <Head>
        <title>AUI Terminal // Live Radar Stream</title>
      </Head>
      
      <div style={{ borderBottom: '1px solid #111', paddingBottom: '20px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <strong style={{ letterSpacing: '0.2em', color: '#2563eb' }}>AUTHENTIC INTELLIGENCE // APPS CORE</strong>
          <div style={{ fontSize: '10px', color: '#4b5563', marginTop: '4px' }}>SECURE_SUBDOMAIN_ISOLATION_ACTIVE</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '11px', color: '#22c55e' }}>
          ● ENGINE_ONLINE
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
        {/* Left Control Node */}
        <div style={{ border: '1px solid #111', backgroundColor: '#0a0a0a', padding: '25px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '12px', color: '#4b5563', margin: '0 0 20px 0' }}>// ACTIVE_RADAR_MONITOR</h3>
          
          <div style={{ marginBottom: '30px' }}>
            <span style={{ fontSize: '10px', color: '#9ca3af' }}>TARGET_ENTITY:</span>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '4px' }}>{data.target_entity || 'DONALD_J_TRUMP'}</div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <span style={{ fontSize: '10px', color: '#9ca3af' }}>COMPOSITE_SIGNAL_SCORE:</span>
            <div style={{ fontSize: '48px', fontWeight: '900', color: score >= 4.0 ? '#ef4444' : score >= 2.5 ? '#f59e0b' : '#2563eb', marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>
              {score.toFixed(2)}
            </div>
          </div>

          <div>
            <span style={{ fontSize: '10px', color: '#9ca3af' }}>SYSTEM_STATE:</span>
            <div style={{ fontSize: '12px', marginTop: '4px', letterSpacing: '0.1em', fontWeight: 'bold', color: score >= 4.0 ? '#ef4444' : score >= 2.5 ? '#f59e0b' : '#3b82f6' }}>
              {data.system_state}
            </div>
          </div>
        </div>

        {/* Right Terminal Analytics Node */}
        <div style={{ border: '1px solid #111', backgroundColor: '#0a0a0a', padding: '25px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '12px', color: '#4b5563', margin: '0 0 20px 0' }}>// COMPUTATIONAL_METRICS_LOG</h3>
          <div style={{ fontSize: '12px', lineHeight: '2' }}>
            <div><span style={{ color: '#4b5563' }}>[TEMPORAL DIVERGENCE (Dt)] :</span> {data.metrics_delta.temporal_divergence}</div>
            <div><span style={{ color: '#4b5563' }}>[LINGUISTIC DIVERGENCE (Dl)] :</span> {data.metrics_delta.linguistic_divergence}</div>
            <div style={{ borderTop: '1px solid #111', marginTop: '15px', paddingTop: '15px' }}>
              <span style={{ color: '#4b5563' }}>[COINCIDENCE MULTIPLIERS ACTIVE] :</span> {data.active_multipliers.length === 0 ? 'NONE' : ''}
              {data.active_multipliers.map((m, idx) => (
                <div key={idx} style={{ color: '#f59e0b', fontSize: '11px', paddingLeft: '10px' }}>
                  ↳ {m.node} IN_WINDOW (Weight: {m.weight})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
