import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "#f8f9fa",
        color: "#1a1a2e",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: 0 }}>My App</h1>
      <p style={{ color: "#6c757d", margin: 0 }}>Welcome to your new app.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
