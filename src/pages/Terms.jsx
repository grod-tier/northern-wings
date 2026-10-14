import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Terms() {
  return (
    <>
      <Navbar />
      <header className="legal-page-header">
        <div className="legal-page-header-inner">
          <div className="eyebrow">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="meta">Last updated: August 13, 2025</p>
        </div>
      </header>
      <main className="legal-content">
        <h2>Overview</h2>
        <p>By purchasing from Northern Wings or using this website, you agree to these Terms and Conditions. Northern Wings is a youth-led conservation enterprise selling monarch habitat kits and educational resources. Our mailing address is available upon request at <a href="mailto:hello@northernwings.org">hello@northernwings.org</a>.</p>

        <h2>Products and orders</h2>
        <p>All kit contents are described on the product page. We reserve the right to substitute equivalent plant species if the listed species are temporarily unavailable due to season or supply, while preserving the educational and conservation intent of the kit.</p>
        <p>We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud or if a product becomes unavailable after the order is placed. You will receive a full refund in such cases.</p>

        <h2>Pricing and payment</h2>
        <p>All prices are listed in U.S. dollars. We accept major credit and debit cards through Stripe. Payment is charged at the time of order. Free shipping applies to all orders shipped within the contiguous United States.</p>

        <h2>Shipping</h2>
        <p>We ship within the contiguous United States. Orders are typically processed within 2–5 business days. Shipping times vary by carrier and destination. Northern Wings is not responsible for delays caused by carriers or circumstances outside our control.</p>
        <p>We are not currently able to ship live plant material to all U.S. states due to agricultural restrictions. If your state has restrictions that prevent delivery, we will notify you and issue a full refund.</p>

        <h2>Returns and refunds</h2>
        <p>Because our kits contain live or perishable plant material, we are unable to accept returns. If your order arrives damaged or with a significant portion of the contents dead or unusable, please contact us within 7 days of delivery with photos and we will work with you on a replacement or partial refund at our discretion.</p>
        <p>To initiate a refund request, email <a href="mailto:hello@northernwings.org">hello@northernwings.org</a> with your order number and a description of the issue.</p>

        <h2>Conservation outcomes</h2>
        <p>Northern Wings makes no guarantee of specific conservation outcomes, plant survival rates, or monarch activity resulting from use of our kits. Results depend on local conditions, climate, planting practices, and other factors outside our control. Our planting instructions represent best-practice guidance, not a warranty of results.</p>

        <h2>Intellectual property</h2>
        <p>All content on this website — including text, photography, and design — is the property of Northern Wings and may not be reproduced without permission.</p>

        <h2>Limitation of liability</h2>
        <p>To the fullest extent permitted by applicable law, Northern Wings shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website. Our maximum liability for any claim arising from a purchase is limited to the amount you paid for that order.</p>

        <h2>Governing law</h2>
        <p>These Terms are governed by the laws of the State of Michigan, without regard to its conflict of law provisions. Any dispute shall be resolved in the courts of Michigan.</p>

        <h2>Changes to these terms</h2>
        <p>We may update these Terms from time to time. Continued use of our website or purchase of products after changes constitutes acceptance of the revised terms.</p>

        <h2>Contact</h2>
        <p>Questions about these Terms? Email us at <a href="mailto:hello@northernwings.org">hello@northernwings.org</a>.</p>
      </main>
      <Footer />
    </>
  );
}
