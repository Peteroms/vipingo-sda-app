import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Vipingo SDA Church</p>

        {/* Quick Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/sabbath-school">Sabbath School</Link>
          <Link to="/online-service">Online Service</Link>
          <Link to="/online-giving">Giving</Link>
          <Link to="/ministries">Ministries</Link>
          <Link to="/contact-us">Contact</Link>
        </div>

        {/* Social Media - separate row */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://youtube.com/@TCT-PROPHETIC" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="social-icon" />
          </a>
          <a href="https://wa.me/254755806579" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
