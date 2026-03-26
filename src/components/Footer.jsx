import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left: Name & Copyright */}
          <div className="footer-left">
            <p>&copy; {currentYear} Matt Keller</p>
          </div>

          {/* Center: Page Links */}
          <div className="footer-nav">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>

            <a
              href="https://drive.google.com/file/d/1NMKvmAHh81GS-4gY27P-v5UTqyUxivjQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <a href="mailto:contact@mattkellerdigital.com">Contact</a>
          </div>

          {/* Right: Social Links */}
          <div className="footer-social">
            <a
              href="https://www.instagram.com/mkellphoto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-d-keller/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;