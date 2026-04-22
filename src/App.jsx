import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Canvas from './components/Canvas.jsx';
import { ToastContainer, useToast } from './components/Toast.jsx';

const s = {
  app: { display: 'flex', flexDirection: 'column', height: '100vh' },
  header: {
    borderBottom: '1px solid var(--border)',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'var(--surface)',
    flexShrink: 0,
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: '-0.04em',
    color: 'var(--text)',
  },
  logoAccent: { color: 'var(--accent-light)' },
  badge: {
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    fontWeight: 500,
    color: 'var(--text-muted)',
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: 99,
    padding: '2px 10px',
  },
  main: { display: 'flex', flex: 1, overflow: 'hidden' },
};

export default function App() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const { toasts, addToast, removeToast } = useToast();

  function handleSelectBusiness(business, index) {
    setSelectedBusiness(business);
    setSelectedId(index);
  }

  return (
    <div style={s.app}>
      <header style={s.header}>
        <div style={s.logo}>
          Site<span style={s.logoAccent}>Redesigner</span>
        </div>
        <div style={s.badge}>Powered by Claude + Impeccable</div>
      </header>

      <main style={s.main}>
        <Sidebar
          onSelectBusiness={handleSelectBusiness}
          selectedId={selectedId}
          addToast={addToast}
        />
        <Canvas
          business={selectedBusiness}
          addToast={addToast}
        />
      </main>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
