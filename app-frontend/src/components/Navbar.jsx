import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">VIPINGO SEVENTH-DAY ADVENTIST CHURCH®</Link>
      </div>
      <div className="navbar-links">
        <Link to="/sabbath-school">SABBATH SCHOOL</Link>
        <Link to="/online-service">ONLINE SERVICE</Link>
        <Link to="/online-giving">ONLINE GIVING</Link>
        <Link to="/ministries">MINISTRIES</Link>
        <Link to="/contact-us">CONTACT US</Link>
      </div>
    </nav>
  );
};

export default Navbar;