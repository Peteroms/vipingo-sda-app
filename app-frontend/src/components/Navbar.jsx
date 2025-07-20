import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">VIPINGO SEVENTH-DAY ADVENTIST®</Link>
      </div>

      {isMobileView && (
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      )}

      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>HOME</Link>
        <Link to="/sabbath-school" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>SABBATH SCHOOL</Link>
        <Link to="/online-service" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>ONLINE SERVICE</Link>
        <Link to="/online-giving" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>ONLINE GIVING</Link>
        <Link to="/ministries" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>MINISTRIES</Link>
        <Link to="/contact-us" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>CONTACT US</Link>
      </div>
    </nav>
  );
};

export default Navbar;