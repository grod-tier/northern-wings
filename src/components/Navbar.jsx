import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand" aria-label="Northern Wings home">
        <img src="/logo.png" alt="" aria-hidden="true" className="brand-mark" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: '50%' }} />
        <span>Northern Wings<small>Monarch Waystation</small></span>
      </Link>
      <ul className="nav-links">
        <li><a href="/#mission">Mission</a></li>
        <li><Link to="/plight">The Plight</Link></li>
        <li><Link to="/waystation">Our Waystation</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="/#kits" className="nav-cta">Shop Kits</a></li>
      </ul>
    </nav>
  );
}
