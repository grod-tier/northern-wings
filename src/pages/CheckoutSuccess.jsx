import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function CheckoutSuccess() {
  return (
    <>
      <Navbar />
      <section className="success-section">
        <div className="success-inner">
          <div className="success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="eyebrow">Order confirmed</div>
          <h1>Thank you for <em>growing the corridor.</em></h1>
          <p>Your Pollinator Garden Kit order was received successfully. We'll email you a confirmation shortly with everything you need to know about shipping and planting.</p>
          <Link to="/" className="btn btn-primary">Back to home <span className="btn-arrow">→</span></Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
