import { useState } from 'react';

const s = {
  form: { display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 20, borderBottom: '1px solid var(--border)' },
  field: { display: 'flex', flexDirection: 'column', gap: 6 },
  label: { fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' },
  input: {
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '11px 14px',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    width: '100%',
  },
  btn: {
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: 'var(--radius)',
    padding: '12px 20px',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background 0.15s, box-shadow 0.15s',
  },
  spinner: {
    width: 16,
    height: 16,
    border: '2px solid #ffffff30',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 0.7s linear infinite',
    flexShrink: 0,
  },
};

export default function SearchForm({ onResults, onSearchStart }) {
  const [zipcode, setZipcode] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    onSearchStart?.();
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zipcode: zipcode.trim(), niche: niche.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Search failed');
      onResults(data);
    } catch (err) {
      onResults({ error: err.message });
    } finally {
      setLoading(false);
    }
  }

  const focusStyle = key => focused === key
    ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 3px var(--accent-glow)' }
    : {};

  return (
    <form style={s.form} onSubmit={handleSubmit}>
      <div style={s.field}>
        <label style={s.label} htmlFor="zipcode">Zip Code</label>
        <input
          id="zipcode"
          style={{ ...s.input, ...focusStyle('zip') }}
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
          onFocus={() => setFocused('zip')}
          onBlur={() => setFocused(null)}
          placeholder="e.g. 90210"
          maxLength={10}
          required
        />
      </div>
      <div style={s.field}>
        <label style={s.label} htmlFor="niche">Business Niche</label>
        <input
          id="niche"
          style={{ ...s.input, ...focusStyle('niche') }}
          value={niche}
          onChange={e => setNiche(e.target.value)}
          onFocus={() => setFocused('niche')}
          onBlur={() => setFocused(null)}
          placeholder="e.g. dental clinic, pizza"
          required
        />
      </div>
      <button
        style={{
          ...s.btn,
          opacity: loading ? 0.7 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <><div style={s.spinner} /> Searching…</>
        ) : (
          <><SearchIcon /> Search Businesses</>
        )}
      </button>
    </form>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
