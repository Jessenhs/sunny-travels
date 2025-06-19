import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🌞 Sunny Travels</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header; 