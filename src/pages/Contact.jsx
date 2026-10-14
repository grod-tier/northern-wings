import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: 'Kit question', message: '' });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: `${form.firstName.trim()} ${form.lastName.trim()}`,
          email: form.email.trim(),
          subject: `[Contact] ${form.subject} — ${form.firstName.trim()} ${form.lastName.trim()}`,
          message: form.message.trim(),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus({ type: 'success', text: "Message sent! We'll be in touch within 1–2 business days." });
        setForm({ firstName: '', lastName: '', email: '', subject: 'Kit question', message: '' });
      } else {
        throw new Error(json.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Failed to send. Please try emailing us directly.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="contact-page-wrap">
        <aside className="contact-info">
          <div className="section-label">Get in touch</div>
          <h1>We'd love to <em>hear</em> from you.</h1>
          <p className="lede">Whether you have questions about our kits, want to learn more about the waystation, or are interested in partnering with us — reach out.</p>
          <div className="contact-detail">
            <div className="detail-item">
              <div className="detail-icon">✉</div>
              <div className="detail-text">
                <strong>Email</strong>
                <a href="mailto:hello@northernwings.org">hello@northernwings.org</a>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div className="detail-text">
                <strong>Waystation</strong>
                <span>Michigan, United States</span>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">⏱</div>
              <div className="detail-text">
                <strong>Response time</strong>
                <span>Usually within 1–2 business days</span>
              </div>
            </div>
          </div>
        </aside>

        <section className="contact-form-wrap">
          <div className="form-head">
            <h2>Send us a message</h2>
            <p>Fill out the form and we'll get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Avery" required value={form.firstName} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Siudara" required value={form.lastName} onChange={handleChange} />
              </div>
              <div className="field full">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="field full">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                  <option value="Kit question">Question about a kit</option>
                  <option value="Waystation inquiry">Waystation inquiry</option>
                  <option value="Partnership">Partnership opportunity</option>
                  <option value="Media / Press">Media / Press</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us what's on your mind…" required value={form.message} onChange={handleChange} />
              </div>
            </div>
            <div className="submit-row">
              <button type="submit" className="btn-submit" disabled={submitting}>
                {submitting ? 'Sending…' : <>Send message <span>→</span></>}
              </button>
            </div>
            {status && (
              <div className={`form-status ${status.type}`}>{status.text}</div>
            )}
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
