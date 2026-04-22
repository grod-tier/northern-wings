import SearchForm from './SearchForm.jsx';
import BusinessCard from './BusinessCard.jsx';

const s = {
  sidebar: {
    background: 'var(--surface)',
    borderRight: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: 380,
    flexShrink: 0,
  },
  top: { padding: '28px 24px 0', flexShrink: 0 },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: '-0.03em',
    marginBottom: 6,
  },
  sub: { fontSize: 13, color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.5 },
  resultsSection: { flex: 1, overflowY: 'auto', padding: '16px 24px 24px' },
  resultsHeader: {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--text-muted)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  count: {
    background: 'var(--accent)',
    color: '#fff',
    fontSize: 10,
    fontWeight: 700,
    padding: '2px 7px',
    borderRadius: 99,
  },
  list: { display: 'flex', flexDirection: 'column', gap: 8 },
  empty: { fontSize: 13, color: 'var(--text-muted)', paddingTop: 16 },
};

export default function Sidebar({ onSelectBusiness, selectedId, addToast }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleResults(data) {
    if (data.error) {
      addToast(data.error);
      return;
    }
    setResults(data.results);
    if (data.message) addToast(data.message);
  }

  return (
    <aside style={s.sidebar}>
      <div style={s.top}>
        <div style={s.title}>Find & Redesign</div>
        <div style={s.sub}>Search local businesses, then let AI redesign their homepage.</div>
        <SearchForm
          onResults={handleResults}
          onSearchStart={() => setLoading(true)}
        />
      </div>

      {results !== null && (
        <div style={s.resultsSection}>
          <div style={s.resultsHeader}>
            Results <span style={s.count}>{results.length}</span>
          </div>
          <div style={s.list}>
            {results.length === 0 ? (
              <div style={s.empty}>No businesses with websites found. Try a different niche or zip code.</div>
            ) : results.map((b, i) => (
              <BusinessCard
                key={i}
                business={b}
                selected={selectedId === i}
                onClick={() => onSelectBusiness(b, i)}
              />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

// useState imported at module level
import { useState } from 'react';
