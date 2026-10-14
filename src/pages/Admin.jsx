import { useState, useEffect, useRef } from 'react';

const SANITY_PROJECT = 'ryf1dyhh';
const SANITY_DATASET = 'production';

function imageUrl(ref, w = 400) {
  if (!ref) return '';
  const id = ref.replace('image-', '').replace(/-(\w+)$/, '.$1');
  return `https://cdn.sanity.io/images/${SANITY_PROJECT}/${SANITY_DATASET}/${id}?w=${w}&auto=format`;
}

function fmtDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function StatusMsg({ status }) {
  if (!status) return null;
  return <div className={`admin-status ${status.type}`}>{status.text}</div>;
}

// ── Login ────────────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      });
      const json = await res.json();
      if (res.ok) {
        onLogin(json.token);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <h1>Northern Wings</h1>
        <p>Admin — sign in to manage content</p>
        <label className="f-label" htmlFor="pw-input">Password</label>
        <input
          className="f-input"
          type="password"
          id="pw-input"
          placeholder="Enter password"
          autoComplete="current-password"
          value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
        />
        {error && <div className="login-err">Incorrect password. Try again.</div>}
        <button className="admin-btn admin-btn-full" onClick={handleLogin} disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </div>
    </div>
  );
}

// ── Gallery Panel ────────────────────────────────────────────────────────────
function GalleryPanel({ token }) {
  const authHeaders = () => ({ 'x-admin-token': token });
  const [queue, setQueue] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [listStatus, setListStatus] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [editPhoto, setEditPhoto] = useState(null);
  const [editStatus, setEditStatus] = useState(null);
  const fileRef = useRef();

  function addFiles(files) {
    const items = Array.from(files).map(f => ({
      id: Date.now() + Math.random(),
      file: f,
      preview: URL.createObjectURL(f),
      caption: '',
      location: '',
      date: '',
    }));
    setQueue(q => [...q, ...items]);
  }

  async function uploadAll() {
    setUploading(true);
    setUploadStatus({ type: 'loading', text: `Uploading ${queue.length} photo${queue.length > 1 ? 's' : ''}…` });
    let done = 0, failed = 0;
    for (const item of queue) {
      try {
        const fd = new FormData();
        fd.append('image', item.file);
        fd.append('caption', item.caption);
        fd.append('location', item.location);
        fd.append('date', item.date);
        const res = await fetch('/api/admin/upload-photo', { method: 'POST', headers: authHeaders(), body: fd });
        if (res.ok) done++; else failed++;
      } catch { failed++; }
    }
    setQueue([]);
    setUploading(false);
    if (failed === 0) {
      setUploadStatus({ type: 'success', text: `✓ ${done} photo${done > 1 ? 's' : ''} uploaded.` });
    } else {
      setUploadStatus({ type: 'error', text: `${done} uploaded, ${failed} failed.` });
    }
    loadPhotos();
  }

  async function loadPhotos() {
    setListStatus({ type: 'loading', text: 'Loading photos…' });
    try {
      const res = await fetch('/api/admin/photos', { headers: authHeaders() });
      const data = await res.json();
      setPhotos(data);
      setListStatus(null);
    } catch {
      setListStatus({ type: 'error', text: 'Failed to load photos.' });
    }
  }

  async function saveEditPhoto() {
    setEditStatus({ type: 'loading', text: 'Saving…' });
    try {
      const res = await fetch(`/api/admin/photos/${editPhoto._id}`, {
        method: 'PATCH',
        headers: { ...authHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption: editPhoto.caption, location: editPhoto.location, takenAt: editPhoto.takenAt }),
      });
      if (res.ok) {
        setEditStatus({ type: 'success', text: '✓ Saved.' });
        loadPhotos();
        setTimeout(() => setEditPhoto(null), 800);
      } else {
        setEditStatus({ type: 'error', text: 'Failed to save.' });
      }
    } catch {
      setEditStatus({ type: 'error', text: 'Failed to save.' });
    }
  }

  async function deletePhoto(id) {
    if (!window.confirm('Delete this photo? This cannot be undone.')) return;
    setListStatus({ type: 'loading', text: 'Deleting…' });
    try {
      const res = await fetch(`/api/admin/photos/${id}`, { method: 'DELETE', headers: authHeaders() });
      if (res.ok) { setListStatus({ type: 'success', text: '✓ Photo deleted.' }); loadPhotos(); }
      else setListStatus({ type: 'error', text: 'Failed to delete.' });
    } catch {
      setListStatus({ type: 'error', text: 'Failed to delete.' });
    }
  }

  useEffect(() => { loadPhotos(); }, []);

  return (
    <div className="admin-panel">
      <div className="admin-section-head">
        <div><h2>Upload photos</h2><p>Drag and drop photos, fill in details, then upload.</p></div>
      </div>

      <div
        className={`dropzone${dragOver ? ' drag-over' : ''}`}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={e => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
        onClick={() => fileRef.current?.click()}
      >
        <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => addFiles(e.target.files)} />
        <div className="dropzone-icon">🌿</div>
        <div className="dropzone-label">Drop photos here</div>
        <div className="dropzone-sub">or click to browse · JPG, PNG, HEIC</div>
      </div>

      {queue.length > 0 && (
        <div className="upload-queue">
          {queue.map(item => (
            <div className="queue-item" key={item.id}>
              <img src={item.preview} className="queue-thumb" alt="" />
              <div className="queue-fields">
                <input type="text" placeholder="Caption (optional)" value={item.caption} onChange={e => setQueue(q => q.map(x => x.id === item.id ? { ...x, caption: e.target.value } : x))} />
                <input type="text" placeholder="Location (optional)" value={item.location} onChange={e => setQueue(q => q.map(x => x.id === item.id ? { ...x, location: e.target.value } : x))} />
                <input type="date" value={item.date} onChange={e => setQueue(q => q.map(x => x.id === item.id ? { ...x, date: e.target.value } : x))} />
              </div>
            </div>
          ))}
        </div>
      )}

      <StatusMsg status={uploadStatus} />
      {queue.length > 0 && (
        <button className="admin-btn" onClick={uploadAll} disabled={uploading}>Upload all →</button>
      )}

      <hr className="admin-divider" />

      <div className="admin-section-head">
        <div><h2>Published photos</h2></div>
        <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={loadPhotos}>↻ Refresh</button>
      </div>
      <StatusMsg status={listStatus} />
      <div className="photo-grid">
        {photos.length === 0 && !listStatus && (
          <div className="admin-empty">No photos yet — upload some above.</div>
        )}
        {photos.map(p => (
          <div className="photo-card" key={p._id}>
            <img src={imageUrl(p.image, 400)} alt={p.caption || ''} />
            <div className="photo-card-body">
              <div className="photo-card-caption">{p.caption || '(no caption)'}</div>
              <div className="photo-card-meta">{p.location ? p.location + ' · ' : ''}{fmtDate(p.takenAt)}</div>
              <div className="photo-card-actions">
                <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={() => { setEditStatus(null); setEditPhoto({ ...p, takenAt: p.takenAt?.slice(0, 10) || '' }); }}>Edit</button>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deletePhoto(p._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editPhoto && (
        <div className="admin-modal-backdrop" onClick={e => e.target === e.currentTarget && setEditPhoto(null)}>
          <div className="admin-modal">
            <h2>Edit photo</h2>
            <div className="admin-field"><label>Caption</label><input type="text" value={editPhoto.caption || ''} onChange={e => setEditPhoto(p => ({ ...p, caption: e.target.value }))} /></div>
            <div className="admin-field-row">
              <div className="admin-field"><label>Location</label><input type="text" value={editPhoto.location || ''} onChange={e => setEditPhoto(p => ({ ...p, location: e.target.value }))} /></div>
              <div className="admin-field"><label>Date taken</label><input type="date" value={editPhoto.takenAt || ''} onChange={e => setEditPhoto(p => ({ ...p, takenAt: e.target.value }))} /></div>
            </div>
            <StatusMsg status={editStatus} />
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-ghost" onClick={() => setEditPhoto(null)}>Cancel</button>
              <button className="admin-btn" onClick={saveEditPhoto}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Journal Panel ────────────────────────────────────────────────────────────
function JournalPanel({ token }) {
  const authHeaders = () => ({ 'x-admin-token': token });
  const [form, setForm] = useState({ title: '', excerpt: '', body: '', date: new Date().toISOString().slice(0, 10) });
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [createStatus, setCreateStatus] = useState(null);
  const [posts, setPosts] = useState([]);
  const [listStatus, setListStatus] = useState(null);
  const [editPost, setEditPost] = useState(null);
  const [editCoverFile, setEditCoverFile] = useState(null);
  const [editCoverPreview, setEditCoverPreview] = useState(null);
  const [editStatus, setEditStatus] = useState(null);
  const coverRef = useRef();
  const editCoverRef = useRef();

  function handleCover(file) {
    if (!file) return;
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  }

  function handleEditCover(file) {
    if (!file) return;
    setEditCoverFile(file);
    setEditCoverPreview(URL.createObjectURL(file));
  }

  async function loadPosts() {
    setListStatus({ type: 'loading', text: 'Loading posts…' });
    try {
      const res = await fetch('/api/admin/posts', { headers: authHeaders() });
      const data = await res.json();
      setPosts(data);
      setListStatus(null);
    } catch {
      setListStatus({ type: 'error', text: 'Failed to load posts.' });
    }
  }

  async function createPost() {
    if (!form.title.trim()) { setCreateStatus({ type: 'error', text: 'Title is required.' }); return; }
    setCreateStatus({ type: 'loading', text: 'Publishing…' });
    const fd = new FormData();
    fd.append('title', form.title.trim());
    fd.append('excerpt', form.excerpt.trim());
    fd.append('body', form.body.trim());
    fd.append('date', form.date);
    if (coverFile) fd.append('cover', coverFile);
    try {
      const res = await fetch('/api/admin/create-post', { method: 'POST', headers: authHeaders(), body: fd });
      const json = await res.json();
      if (res.ok) {
        setCreateStatus({ type: 'success', text: `✓ Published! View at northernwings.co/journal/${json.slug}` });
        setForm({ title: '', excerpt: '', body: '', date: new Date().toISOString().slice(0, 10) });
        setCoverFile(null); setCoverPreview(null);
        loadPosts();
      } else {
        setCreateStatus({ type: 'error', text: json.error || 'Failed to publish.' });
      }
    } catch (err) {
      setCreateStatus({ type: 'error', text: err.message });
    }
  }

  async function saveEditPost() {
    setEditStatus({ type: 'loading', text: 'Saving…' });
    const fd = new FormData();
    fd.append('title', editPost.title.trim());
    fd.append('excerpt', editPost.excerpt.trim());
    fd.append('body', editPost.body.trim());
    fd.append('date', editPost.date);
    if (editCoverFile) fd.append('cover', editCoverFile);
    try {
      const res = await fetch(`/api/admin/posts/${editPost._id}`, { method: 'PATCH', headers: authHeaders(), body: fd });
      const json = await res.json();
      if (res.ok) {
        setEditStatus({ type: 'success', text: '✓ Saved.' });
        loadPosts();
        setTimeout(() => setEditPost(null), 800);
      } else {
        setEditStatus({ type: 'error', text: json.error || 'Failed to save.' });
      }
    } catch (err) {
      setEditStatus({ type: 'error', text: err.message });
    }
  }

  async function deletePost(id) {
    if (!window.confirm('Delete this post? This cannot be undone.')) return;
    setListStatus({ type: 'loading', text: 'Deleting…' });
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: 'DELETE', headers: authHeaders() });
      if (res.ok) { setListStatus({ type: 'success', text: '✓ Post deleted.' }); loadPosts(); }
      else setListStatus({ type: 'error', text: 'Failed to delete.' });
    } catch {
      setListStatus({ type: 'error', text: 'Failed to delete.' });
    }
  }

  useEffect(() => { loadPosts(); }, []);

  return (
    <div className="admin-panel">
      <div className="admin-section-head">
        <div><h2>New journal post</h2><p>Posts appear at northernwings.co/journal</p></div>
      </div>

      <div className="admin-field">
        <label>Title</label>
        <input type="text" placeholder="e.g. First monarch spotted this season" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
      </div>
      <div className="admin-field">
        <label>Cover image</label>
        {coverPreview ? (
          <img src={coverPreview} style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} alt="" />
        ) : (
          <div className="dropzone" style={{ padding: 20 }} onClick={() => coverRef.current?.click()}>
            <input ref={coverRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleCover(e.target.files[0])} />
            <div className="dropzone-icon" style={{ fontSize: 22, marginBottom: 4 }}>🖼</div>
            <div className="dropzone-label" style={{ fontSize: 14 }}>Drop a cover photo or click to browse</div>
          </div>
        )}
      </div>
      <div className="admin-field">
        <label>Excerpt <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>(shown on listing page)</span></label>
        <input type="text" placeholder="A short summary…" value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} />
      </div>
      <div className="admin-field">
        <label>Body</label>
        <textarea placeholder="Write your journal entry here…" value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} />
      </div>
      <div className="admin-field">
        <label>Date</label>
        <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
      </div>
      <StatusMsg status={createStatus} />
      <button className="admin-btn" onClick={createPost}>Publish post →</button>

      <hr className="admin-divider" />

      <div className="admin-section-head">
        <div><h2>Published posts</h2></div>
        <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={loadPosts}>↻ Refresh</button>
      </div>
      <StatusMsg status={listStatus} />
      <div className="post-list">
        {posts.length === 0 && !listStatus && (
          <div className="admin-empty">No posts yet — write one above.</div>
        )}
        {posts.map(p => (
          <div className="post-item" key={p._id}>
            <div className="post-item-info">
              <h3>{p.title}</h3>
              <p>{fmtDate(p.publishedAt)}{p.excerpt ? ' · ' + p.excerpt.slice(0, 60) + (p.excerpt.length > 60 ? '…' : '') : ''}</p>
            </div>
            <div className="post-item-actions">
              <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={() => {
                setEditStatus(null);
                setEditCoverFile(null);
                setEditCoverPreview(null);
                setEditPost({ _id: p._id, title: p.title, excerpt: p.excerpt || '', body: '', date: p.publishedAt?.slice(0, 10) || '' });
              }}>Edit</button>
              <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deletePost(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editPost && (
        <div className="admin-modal-backdrop" onClick={e => e.target === e.currentTarget && setEditPost(null)}>
          <div className="admin-modal">
            <h2>Edit post</h2>
            <div className="admin-field"><label>Title</label><input type="text" value={editPost.title} onChange={e => setEditPost(p => ({ ...p, title: e.target.value }))} /></div>
            <div className="admin-field">
              <label>Replace cover image <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>(optional)</span></label>
              {editCoverPreview
                ? <img src={editCoverPreview} style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} alt="" />
                : (
                  <div className="dropzone" style={{ padding: 16 }} onClick={() => editCoverRef.current?.click()}>
                    <input ref={editCoverRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleEditCover(e.target.files[0])} />
                    <div className="dropzone-label" style={{ fontSize: 13 }}>Drop new cover or click to browse</div>
                  </div>
                )}
            </div>
            <div className="admin-field"><label>Excerpt</label><input type="text" value={editPost.excerpt} onChange={e => setEditPost(p => ({ ...p, excerpt: e.target.value }))} /></div>
            <div className="admin-field"><label>Body</label><textarea style={{ minHeight: 120 }} value={editPost.body} onChange={e => setEditPost(p => ({ ...p, body: e.target.value }))} /></div>
            <div className="admin-field"><label>Date</label><input type="date" value={editPost.date} onChange={e => setEditPost(p => ({ ...p, date: e.target.value }))} /></div>
            <StatusMsg status={editStatus} />
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-ghost" onClick={() => setEditPost(null)}>Cancel</button>
              <button className="admin-btn" onClick={saveEditPost}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// ── Main Admin ───────────────────────────────────────────────────────────────
export default function Admin() {
  const [token, setToken] = useState(null);
  const [tab, setTab] = useState('gallery');

  if (!token) return <LoginScreen onLogin={setToken} />;

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div className="admin-topbar-brand">
          <img src="/logo.png" alt="" />
          Northern Wings Admin
        </div>
        <div className="admin-topbar-right">
          <a href="/" target="_blank" rel="noopener noreferrer">View site ↗</a>
          <span style={{ opacity: 0.3 }}>|</span>
          <a href="#" onClick={e => { e.preventDefault(); setToken(null); }}>Sign out</a>
        </div>
      </div>

      <div className="admin-tabs">
        <button className={`admin-tab${tab === 'gallery' ? ' active' : ''}`} onClick={() => setTab('gallery')}>📷 Gallery</button>
        <button className={`admin-tab${tab === 'journal' ? ' active' : ''}`} onClick={() => setTab('journal')}>📝 Journal</button>
      </div>

      <div className="admin-panels">
        {tab === 'gallery' && <GalleryPanel token={token} />}
        {tab === 'journal' && <JournalPanel token={token} />}
      </div>
    </div>
  );
}
