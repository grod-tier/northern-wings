import { useState } from 'react';

const s = {
  card: {
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: 14,
    cursor: 'pointer',
    transition: 'border-color 0.15s, background 0.15s, box-shadow 0.15s',
  },
  header: { display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    objectFit: 'cover',
    background: 'var(--surface)',
    flexShrink: 0,
    border: '1px solid var(--border)',
  },
  placeholder: {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
  },
  address: { fontSize: 12, color: 'var(--text-muted)', marginTop: 2 },
  meta: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' },
  rating: { fontSize: 12, color: '#fbbf24', fontWeight: 500 },
  reviews: { fontSize: 12, color: 'var(--text-muted)' },
  website: {
    fontSize: 11,
    color: 'var(--accent-light)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 200,
  },
  tags: { display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8 },
  tag: {
    fontSize: 10,
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 99,
    padding: '2px 8px',
    color: 'var(--text-muted)',
    textTransform: 'capitalize',
  },
};

export default function BusinessCard({ business, selected, onClick }) {
  const [imgError, setImgError] = useState(false);
  const domain = (() => {
    try { return new URL(business.website).hostname.replace('www.', ''); }
    catch { return business.website; }
  })();

  const stars = business.rating
    ? '★'.repeat(Math.round(business.rating)) + '☆'.repeat(5 - Math.round(business.rating))
    : null;

  const cardStyle = {
    ...s.card,
    ...(selected ? {
      borderColor: 'var(--accent)',
      background: '#18163a',
      boxShadow: '0 0 0 1px var(--accent), 0 4px 20px var(--accent-glow)',
    } : {}),
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <div style={s.header}>
        {business.photo && !imgError ? (
          <img
            style={s.photo}
            src={business.photo}
            alt=""
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={s.placeholder}>🏢</div>
        )}
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={s.name}>{business.name}</div>
          <div style={s.address}>{business.address}</div>
        </div>
      </div>

      <div style={s.meta}>
        {stars && (
          <>
            <span style={s.rating}>{stars} {business.rating}</span>
            <span style={s.reviews}>({business.reviewCount})</span>
          </>
        )}
        <span style={s.website}>{domain}</span>
      </div>

      {business.types.length > 0 && (
        <div style={s.tags}>
          {business.types.map(t => (
            <span key={t} style={s.tag}>{t.replace(/_/g, ' ')}</span>
          ))}
        </div>
      )}
    </div>
  );
}
