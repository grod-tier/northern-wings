import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="brand" style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <img src="/logo.png" alt="" aria-hidden="true" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: '50%', marginRight: 10 }} />
        <span>Northern Wings</span>
      </div>
      <p>© 2025 Northern Wings · Monarch Waystation #54310 · A youth-led conservation enterprise</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </div>
    </footer>
  );
}
