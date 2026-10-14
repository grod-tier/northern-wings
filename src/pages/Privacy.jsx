import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Privacy() {
  return (
    <>
      <Navbar />
      <header className="legal-page-header">
        <div className="legal-page-header-inner">
          <div className="eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="meta">Last updated: August 13, 2025</p>
        </div>
      </header>
      <main className="legal-content">
        <h2>Who we are</h2>
        <p>Northern Wings is a youth-led conservation enterprise operating Monarch Waystation #54310. We sell monarch habitat kits and share educational resources about native pollinators. Our website is <strong>northernwings.org</strong>.</p>

        <h2>What information we collect</h2>
        <p>When you purchase a kit, we collect:</p>
        <ul>
          <li>Your name, email address, and shipping address</li>
          <li>Payment information (processed securely by Stripe — we never store card details)</li>
          <li>Order history and transaction records</li>
        </ul>
        <p>When you visit our website, we may automatically receive standard technical data such as your IP address, browser type, and pages visited. We do not use tracking cookies or third-party advertising networks.</p>

        <h2>How we use your information</h2>
        <p>We use your information solely to:</p>
        <ul>
          <li>Fulfill and ship your order</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Respond to customer service inquiries</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2>Payment processing</h2>
        <p>All payments are processed by <strong>Stripe, Inc.</strong> We do not store credit card numbers or payment card data on our servers. Stripe's privacy policy governs the handling of your payment information and is available at <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.</p>

        <h2>Data retention</h2>
        <p>We retain order and transaction records for a minimum of 7 years to comply with tax and financial record-keeping requirements. You may request deletion of your personal information by emailing us; where we are required by law to retain records, we will honor that obligation while deleting other data where possible.</p>

        <h2>Your rights</h2>
        <p>You may request to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information (subject to legal retention requirements)</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:hello@northernwings.org">hello@northernwings.org</a>.</p>

        <h2>Cookies</h2>
        <p>Our website does not use advertising or tracking cookies. We use only functional session data necessary for checkout (via Stripe's secure payment flow).</p>

        <h2>Children's privacy</h2>
        <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above. Continued use of our website after changes constitutes acceptance of the revised policy.</p>

        <h2>Contact</h2>
        <p>Questions? Reach us at <a href="mailto:hello@northernwings.org">hello@northernwings.org</a>.</p>
      </main>
      <Footer />
    </>
  );
}
