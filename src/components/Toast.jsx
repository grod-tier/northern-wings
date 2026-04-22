import { useState, useCallback, useEffect } from 'react';

const styles = {
  container: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    zIndex: 100,
  },
  toast: {
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '12px 16px',
    fontSize: 13,
    boxShadow: '0 8px 32px #0008',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    maxWidth: 340,
    animation: 'slideUp 0.2s ease',
  },
};

function ToastItem({ message, type, onRemove }) {
  useEffect(() => {
    const t = setTimeout(onRemove, 4000);
    return () => clearTimeout(t);
  }, [onRemove]);

  const borderColor = type === 'error' ? 'var(--red)' : 'var(--green)';
  const color = type === 'error' ? '#fca5a5' : '#86efac';

  return (
    <div style={{ ...styles.toast, borderColor, color }}>
      <span>{type === 'error' ? '⚠' : '✓'}</span>
      {message}
    </div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  if (toasts.length === 0) return null;
  return (
    <div style={styles.container}>
      {toasts.map(t => (
        <ToastItem key={t.id} {...t} onRemove={() => removeToast(t.id)} />
      ))}
    </div>
  );
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'error') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback(id => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}
