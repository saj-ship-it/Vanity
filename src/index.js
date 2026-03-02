import React from "react";
import { render } from "react-dom";

const VanitySite = () => (
  <div
    style={{
      backgroundColor: "#050505",
      color: "white",
      minHeight: "100vh",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: "80px 40px",
      textAlign: "left",
    }}
  >
    {/* Navigation */}
    <nav
      style={{
        marginBottom: "120px",
        letterSpacing: "0.5em",
        fontSize: "10px",
        opacity: 0.6,
        fontWeight: "bold",
      }}
    >
      AUTHENTIC INTELLIGENCE // EST. 2026
    </nav>

    {/* Hero Section */}
    <section style={{ maxWidth: "800px" }}>
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "900",
          lineHeight: "0.85",
          marginBottom: "40px",
          letterSpacing: "-0.04em",
        }}
      >
        FIND SIGNAL <br />
        <span style={{ color: "#2563eb" }}>IN THE NOISE.</span>
      </h1>

      <p
        style={{
          color: "#888",
          maxWidth: "480px",
          marginBottom: "60px",
          lineHeight: "1.6",
          fontSize: "18px",
          fontWeight: "300",
        }}
      >
        Investigative analytics for high-stakes decision makers. We monitor
        non-obvious data pipelines to detect trend breaks before they manifest
        in the public record.
      </p>

      <button
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "20px 40px",
          fontWeight: "900",
          border: "none",
          fontSize: "12px",
          letterSpacing: "0.2em",
          cursor: "pointer",
        }}
      >
        REQUEST SECURE BRIEFING
      </button>
    </section>

    {/* Philosophy Grid */}
    <section
      style={{
        marginTop: "140px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px",
        opacity: 0.8,
      }}
    >
      <div>
        <div
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "10px",
          }}
        >
          [01]
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Ground Truth
        </div>
      </div>
      <div>
        <div
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "10px",
          }}
        >
          [02]
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Pattern Mapping
        </div>
      </div>
      <div>
        <div
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "10px",
          }}
        >
          [03]
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Predictive Risk
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer
      style={{
        marginTop: "160px",
        borderTop: "1px solid #222",
        paddingTop: "40px",
        fontSize: "9px",
        color: "#444",
        letterSpacing: "0.3em",
      }}
    >
      CONFIDENTIAL // AUI INC. // AUTHENTICINTEL.COM
    </footer>
  </div>
);

render(<VanitySite />, document.getElementById("root"));
