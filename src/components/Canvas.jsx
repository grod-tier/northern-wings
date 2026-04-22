import { useState, useEffect, useRef } from 'react';

const s = {
  canvas: { flex: 1, background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 },
  toolbar: {
    borderBottom: '1px solid var(--border)',
    padding: '14px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'var(--surface)',
    flexShrink: 0,
  },
  toolbarTitle: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, flex: 1 },
  muted: { color: 'var(--text-muted)', fontWeight: 400 },
  body: { flex: 1, display: 'grid', overflow: 'hidden' },
  pane: { overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)' },
  paneLabel: {
    fontSize: 11,
    fontWeight: 500,
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '10px 16px',
    borderBottom: '1px solid var(--border)',
    background: 'var(--surface)',
    flexShrink: 0,
  },
  iframe: { flex: 1, border: 'none', background: '#fff', width: '100%' },
  empty: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    color: 'var(--text-muted)',
    textAlign: 'center',
    padding: 48,
    animation: 'fadeIn 0.3s ease',
  },
  emptyIcon: { fontSize: 48, opacity: 0.3 },
  emptyTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 18,
    color: 'var(--text)',
    opacity: 0.4,
  },
  emptySubText: { fontSize: 13, lineHeight: 1.6, maxWidth: 280 },
  loadingWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 48,
    animation: 'fadeIn 0.2s ease',
  },
  bigSpinner: {
    width: 48,
    height: 48,
    border: '3px solid var(--accent-glow)',
    borderTopColor: 'var(--accent-light)',
    borderRadius: '50%',
    animation: 'spin 0.9s linear infinite',
  },
  loadingTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: '-0.03em',
  },
  loadingText: { color: 'var(--text-muted)', fontSize: 13, textAlign: 'center', maxWidth: 280 },
  steps: { display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 },
};

const REDESIGN_STEPS = [
  'Analyzing existing design',
  'Developing visual concept',
  'Generating HTML & CSS',
  'Applying design polish',
];

function TabBar({ view, onChange }) {
  const tabs = ['split', 'original', 'redesign'];
  return (
    <div style={{ display: 'flex', gap: 2, background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 10, padding: 3 }}>
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => onChange(t)}
          style={{
            padding: '5px 12px',
            borderRadius: 7,
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
            color: view === t ? 'var(--text)' : 'var(--text-muted)',
            background: view === t ? 'var(--surface)' : 'transparent',
            boxShadow: view === t ? '0 1px 4px #0003' : 'none',
            border: 'none',
            transition: 'all 0.15s',
          }}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}

function SmallBtn({ onClick, disabled, accent, children, style }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '7px 14px',
        fontSize: 13,
        borderRadius: 8,
        background: accent ? 'var(--accent)' : 'var(--surface2)',
        color: accent ? '#fff' : 'var(--text)',
        border: accent ? '1px solid transparent' : '1px solid var(--border)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 0.15s',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function OriginalFrame({ url }) {
  return <iframe style={s.iframe} src={url} title="Original" />;
}

function RedesignFrame({ html }) {
  const iframeRef = useRef(null);
  useEffect(() => {
    if (!iframeRef.current || !html) return;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
    return () => URL.revokeObjectURL(url);
  }, [html]);
  return <iframe ref={iframeRef} style={s.iframe} title="Redesign" sandbox="allow-scripts" />;
}

function RedesignLoading({ activeStep }) {
  return (
    <div style={s.loadingWrap}>
      <div style={s.bigSpinner} />
      <div style={s.loadingTitle}>Redesigning homepage…</div>
      <div style={s.loadingText}>
        Claude is analyzing the design and crafting a new homepage using impeccable design principles.
      </div>
      <div style={s.steps}>
        {REDESIGN_STEPS.map((label, i) => {
          const isDone = i < activeStep;
          const isActive = i === activeStep;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: isDone ? 'var(--green)' : isActive ? 'var(--text)' : 'var(--text-muted)', transition: 'color 0.3s' }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', flexShrink: 0, transition: 'background 0.3s',
                background: isDone ? 'var(--green)' : isActive ? 'var(--accent)' : 'var(--border)',
                animation: isActive ? 'pulse 1s ease-in-out infinite' : 'none',
              }} />
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Canvas({ business, addToast }) {
  const [scraping, setScraping] = useState(false);
  const [scraped, setScraped] = useState(null);
  const [redesigning, setRedesigning] = useState(false);
  const [redesignHtml, setRedesignHtml] = useState(null);
  const [view, setView] = useState('split');
  const [activeStep, setActiveStep] = useState(0);

  // Reset + scrape when business changes
  useEffect(() => {
    if (!business) return;
    setScraped(null);
    setRedesignHtml(null);
    setView('split');
    setScraping(true);

    fetch('/api/scrape', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: business.website }),
    })
      .then(r => r.json().then(d => ({ ok: r.ok, data: d })))
      .then(({ ok, data }) => {
        if (!ok) throw new Error(data.error || 'Scrape failed');
        setScraped(data);
      })
      .catch(err => addToast(err.message))
      .finally(() => setScraping(false));
  }, [business]);

  async function handleRedesign() {
    if (!scraped || !business) return;
    setRedesigning(true);
    setActiveStep(0);

    const stepDelays = [3000, 8000, 14000];
    const timers = stepDelays.map((d, i) => setTimeout(() => setActiveStep(i + 1), d));

    try {
      const res = await fetch('/api/redesign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ screenshot: scraped.screenshot, content: scraped.content, businessName: business.name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Redesign failed');
      setRedesignHtml(data.html);
      setView('split');
      addToast('Redesign complete!', 'success');
    } catch (err) {
      addToast(err.message);
    } finally {
      timers.forEach(clearTimeout);
      setRedesigning(false);
    }
  }

  function handleDownload() {
    if (!redesignHtml) return;
    const blob = new Blob([redesignHtml], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${(business?.name || 'redesign').toLowerCase().replace(/\s+/g, '-')}-redesign.html`;
    a.click();
  }

  // ── Render body ──────────────────────────────────
  let bodyContent;
  const showSplit = view === 'split' || view === 'original';
  const showRedesign = view === 'split' || view === 'redesign';

  if (!business) {
    bodyContent = (
      <div style={{ ...s.body, gridTemplateColumns: '1fr' }}>
        <div style={s.empty}>
          <div style={s.emptyIcon}>✦</div>
          <div style={s.emptyTitle}>No business selected</div>
          <div style={s.emptySubText}>Search for businesses by zip code and niche, then select one to preview and redesign.</div>
        </div>
      </div>
    );
  } else if (scraping) {
    bodyContent = (
      <div style={{ ...s.body, gridTemplateColumns: '1fr' }}>
        <div style={s.loadingWrap}>
          <div style={s.bigSpinner} />
          <div style={s.loadingTitle}>Scanning homepage…</div>
          <div style={s.loadingText}>
            Capturing screenshot and extracting content from {(() => { try { return new URL(business.website).hostname; } catch { return business.website; } })()}
          </div>
        </div>
      </div>
    );
  } else if (redesigning) {
    bodyContent = (
      <div style={{ ...s.body, gridTemplateColumns: '1fr' }}>
        <RedesignLoading activeStep={activeStep} />
      </div>
    );
  } else {
    const cols = redesignHtml && view === 'split' ? '1fr 1fr' : '1fr';
    bodyContent = (
      <div style={{ ...s.body, gridTemplateColumns: cols }}>
        {(view === 'split' || view === 'original') && scraped && (
          <div style={{ ...s.pane, borderRight: redesignHtml && view === 'split' ? '1px solid var(--border)' : 'none' }}>
            <div style={s.paneLabel}>Original</div>
            <OriginalFrame url={business.website} />
          </div>
        )}
        {(view === 'split' || view === 'redesign') && redesignHtml && (
          <div style={{ ...s.pane, borderRight: 'none' }}>
            <div style={s.paneLabel}>Redesign ✦</div>
            <RedesignFrame html={redesignHtml} />
          </div>
        )}
        {view === 'redesign' && !redesignHtml && (
          <div style={s.empty}>
            <div style={s.emptyIcon}>✦</div>
            <div style={s.emptyTitle}>No redesign yet</div>
            <div style={s.emptySubText}>Click "Redesign Homepage" to generate a new design.</div>
          </div>
        )}
      </div>
    );
  }

  const titleText = !business ? null : redesignHtml
    ? <><strong>{business.name}</strong> <span style={s.muted}>— redesign ready</span></>
    : <><strong>{business.name}</strong> <span style={s.muted}>— original</span></>;

  return (
    <div style={s.canvas}>
      <div style={s.toolbar}>
        <div style={s.toolbarTitle}>
          {titleText || <span style={s.muted}>Select a business to get started</span>}
        </div>
        {redesignHtml && !redesigning && <TabBar view={view} onChange={setView} />}
        {scraped && !redesigning && (
          <SmallBtn onClick={handleRedesign} accent disabled={redesigning}>
            ✦ Redesign Homepage
          </SmallBtn>
        )}
        {redesignHtml && !redesigning && (
          <SmallBtn onClick={handleDownload}>↓ Download</SmallBtn>
        )}
      </div>
      {bodyContent}
    </div>
  );
}
