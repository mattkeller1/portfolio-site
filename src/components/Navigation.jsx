import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="logo">
        MK
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/work" className={location.pathname.startsWith('/work') ? 'active' : ''}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;