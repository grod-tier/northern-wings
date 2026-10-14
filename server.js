import { config } from 'dotenv';
import { fileURLToPath as _fup } from 'url';
import { dirname as _dn, join as _jn } from 'path';
config({ path: _jn(_dn(_fup(import.meta.url)), '.env'), override: true });
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import rateLimit from 'express-rate-limit';
import {
  isStripeConfigured,
  createCheckoutSession,
  constructWebhookEvent,
  sendOrderNotification,
  sendCustomerReceipt,
} from './lib/checkout.js';
import { getAdminPosts, getAdminPhotos, sanityWrite } from './lib/sanity.js';
import multer from 'multer';
import crypto from 'crypto';

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

function makeAdminToken(password) {
  return crypto.createHmac('sha256', password + '_nw_admin').update(password).digest('hex');
}
function checkAdmin(req, res) {
  const token = req.headers['x-admin-token'];
  const expected = makeAdminToken(process.env.ADMIN_PASSWORD || '');
  if (!token || token !== expected) { res.status(401).json({ error: 'Unauthorized' }); return false; }
  return true;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Capture the raw request body too — needed for Stripe webhook signature verification.
app.use(express.json({ limit: '20mb', verify: (req, res, buf) => { req.rawBody = buf; } }));

// ─── Admin API ────────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body || {};
  if (password === process.env.ADMIN_PASSWORD) {
    res.json({ token: makeAdminToken(password) });
  } else {
    res.status(401).json({ error: 'Incorrect password' });
  }
});

app.post('/api/admin/upload-photo', upload.single('image'), async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!req.file) return res.status(400).json({ error: 'No image file' });
  if (!sanityWrite) return res.status(500).json({ error: 'Sanity write client not configured' });
  try {
    const asset = await sanityWrite.assets.upload('image', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });
    const doc = {
      _type: 'galleryPhoto',
      image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      caption: req.body.caption || '',
      location: req.body.location || '',
      takenAt: req.body.date || new Date().toISOString().slice(0, 10),
    };
    await sanityWrite.create(doc);
    res.json({ ok: true });
  } catch (err) {
    console.error('Photo upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/create-post', upload.single('cover'), async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!sanityWrite) return res.status(500).json({ error: 'Sanity write client not configured' });
  const { title, excerpt, body, date } = req.body || {};
  if (!title) return res.status(400).json({ error: 'Title required' });
  try {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
    let coverRef = null;
    if (req.file) {
      const asset = await sanityWrite.assets.upload('image', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
      });
      coverRef = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    }
    const bodyBlocks = (body || '').split(/\n\n+/).filter(Boolean).map((para, i) => ({
      _type: 'block',
      _key: `block${i}`,
      style: 'normal',
      children: [{ _type: 'span', _key: `span${i}`, text: para.trim(), marks: [] }],
      markDefs: [],
    }));
    const doc = {
      _type: 'journalPost',
      title,
      slug: { _type: 'slug', current: slug },
      publishedAt: date ? new Date(date).toISOString() : new Date().toISOString(),
      excerpt: excerpt || '',
      ...(coverRef && { mainImage: coverRef }),
      body: bodyBlocks,
    };
    await sanityWrite.create(doc);
    res.json({ ok: true, slug });
  } catch (err) {
    console.error('Post create error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ─── Admin list / edit / delete ───────────────────────────────────────────────
app.get('/api/admin/photos', async (req, res) => {
  if (!checkAdmin(req, res)) return;
  try { res.json(await getAdminPhotos()); } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/admin/posts', async (req, res) => {
  if (!checkAdmin(req, res)) return;
  try { res.json(await getAdminPosts()); } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/admin/photos/:id', async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!sanityWrite) return res.status(500).json({ error: 'Not configured' });
  try { await sanityWrite.delete(req.params.id); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/admin/posts/:id', async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!sanityWrite) return res.status(500).json({ error: 'Not configured' });
  try { await sanityWrite.delete(req.params.id); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.patch('/api/admin/photos/:id', async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!sanityWrite) return res.status(500).json({ error: 'Not configured' });
  const { caption, location, takenAt } = req.body || {};
  try {
    await sanityWrite.patch(req.params.id).set({ caption, location, takenAt }).commit();
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.patch('/api/admin/posts/:id', upload.single('cover'), async (req, res) => {
  if (!checkAdmin(req, res)) return;
  if (!sanityWrite) return res.status(500).json({ error: 'Not configured' });
  const { title, excerpt, body, date } = req.body || {};
  try {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
    const bodyBlocks = (body || '').split(/\n\n+/).filter(Boolean).map((para, i) => ({
      _type: 'block', _key: `block${i}`, style: 'normal',
      children: [{ _type: 'span', _key: `span${i}`, text: para.trim(), marks: [] }],
      markDefs: [],
    }));
    const patch = sanityWrite.patch(req.params.id).set({
      title,
      slug: { _type: 'slug', current: slug },
      publishedAt: date ? new Date(date).toISOString() : new Date().toISOString(),
      excerpt: excerpt || '',
      body: bodyBlocks,
    });
    if (req.file) {
      const asset = await sanityWrite.assets.upload('image', req.file.buffer, {
        filename: req.file.originalname, contentType: req.file.mimetype,
      });
      patch.set({ mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } } });
    }
    await patch.commit();
    res.json({ ok: true, slug });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Serve public assets (images, etc.) — Vite also serves these in dev from /public
app.use(express.static(join(__dirname, 'public')));

// In production, serve the built React app and fall back to index.html for SPA routing
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'dist')));
  app.get('*', (req, res) => res.sendFile(join(__dirname, 'dist/index.html')));
}

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body || {};
  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }
  try {
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transporter.sendMail({
      from: `"Northern Wings Website" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Contact] ${subject || 'New message'} — ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><hr><p>${message.replace(/\n/g, '<br>')}</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message. Please email us directly.' });
  }
});

// ─── Shop / checkout routes ────────────────────────────────────────────────

const checkoutRateLimit = rateLimit({
  windowMs: 60 * 1000,      // 1 minute window
  max: 5,                    // max 5 sessions per IP per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many checkout attempts. Please wait a moment and try again.' },
});

/**
 * POST /api/checkout/create-session
 * Create a Stripe Checkout Session for the Pollinator Garden Kit and return its URL.
 * Body: { quantity?: number } (defaults to 1, max 10)
 */
app.post('/api/checkout/create-session', checkoutRateLimit, async (req, res) => {
  if (!isStripeConfigured()) {
    return res.status(503).json({ error: 'Checkout is not configured yet. Set STRIPE_SECRET_KEY in .env.' });
  }
  try {
    const { quantity } = req.body || {};
    const siteUrl = process.env.SITE_URL || `${req.protocol}://${req.get('host')}`;
    const session = await createCheckoutSession({ quantity, siteUrl });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Checkout session error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/stripe/webhook
 * Stripe sends payment events here. On checkout.session.completed, sends an
 * order notification email (if SMTP + ORDER_NOTIFICATION_EMAIL are configured).
 * Must receive the raw request body for signature verification (see express.json `verify` above).
 */
app.post('/api/stripe/webhook', async (req, res) => {
  let event;
  try {
    event = constructWebhookEvent(req.rawBody, req.headers['stripe-signature']);
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    await Promise.allSettled([
      sendCustomerReceipt(session).catch(err => console.error('Customer receipt error:', err)),
      sendOrderNotification(session).catch(err => console.error('Order notification error:', err)),
    ]);
  }

  res.json({ received: true });
});

app.get('/checkout/cancel', (req, res) => res.redirect('/#kits'));

// Local dev: start the server. On Vercel the default export is used instead.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n🦋 Northern Wings running at http://localhost:${PORT}\n`);
  });
}

export default app;
