import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
            <a href="https://mattkellerdigital.com/work">Work</a>
            <a href="https://mattkellerdigital.com/about">About</a>
            <a
              href="https://drive.google.com/file/d/1LOZ0PyIcR1TtOKyMuT8X86C42dzaMNLS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a href="mailto:mdjkeller@gmail.com">Contact</a>
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