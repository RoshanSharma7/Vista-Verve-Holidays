import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaAt, FaPhone, FaEnvelope, FaSearch, FaBars, FaTimes, FaChevronDown, FaTimes as FaClose } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [pkgOpen, setPkgOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const closeAll = () => {
    setMenuOpen(false);
    setDestOpen(false);
    setPkgOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    navigate(`/search?to=${encodeURIComponent(searchValue)}`);
    setSearchOpen(false);
    setSearchValue("");
  };

  return (
    <div>
      <div className="topbar">
        <div className="topbar-left">
          <span><FaPhone size={13} /> +91 93437 43640</span>
          <span className="divider">|</span>
          <span><FaEnvelope size={13} /><a href="mailto:vistaverveholidays@gmail.com">  vistaverveholidays@gmail.com</a></span>
        </div>
        <div className="topbar-right">
          <span>Follow Us:</span>
          <a href="https://www.facebook.com/share/1FndfbLTKA/" target="blank"><FaFacebookF size={14} /></a>
          <a href="https://www.instagram.com/vistaverveholidays?igsh=NXg1MzZrYncyN2p2" target="blank"><FaInstagram size={14} /></a>
          <a href="https://x.com/Vistaverveholid" target="blank"> <FaTwitter size={14} /></a>
          <a href="https://www.threads.com/@vistaverveholidays" target="blank"><FaAt size={14} /></a>
        </div>
      </div>

      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeAll}>
          <img src={logo} alt="Vista Verve Holidays" />
        </Link>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeAll}>Home</Link>
          <Link to="/about" onClick={closeAll}>About</Link>

          <div className="dropdown-wrapper">
            <span className="dropdown" onClick={() => setDestOpen(!destOpen)}>
              Destinations <FaChevronDown size={11} className={destOpen ? "rotate" : ""} />
            </span>
            {destOpen && (
              <div className="dropdown-menu">
                <Link to="/destinations/india" onClick={closeAll}>India</Link>
                <Link to="/destinations/world" onClick={closeAll}>Explore World</Link>
              </div>
            )}
          </div>

          <div className="dropdown-wrapper">
            <span className="dropdown" onClick={() => setPkgOpen(!pkgOpen)}>
              Packages <FaChevronDown size={11} className={pkgOpen ? "rotate" : ""} />
            </span>
            {pkgOpen && (
              <div className="dropdown-menu">
                <Link to="/packages/national" onClick={closeAll}>National</Link>
                <Link to="/packages/international" onClick={closeAll}>International</Link>
              </div>
            )}
          </div>

          <Link to="/booking/in1" onClick={closeAll}>Booking</Link>
          <Link to="/contact" onClick={closeAll}>Contact</Link>
        </div>

        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>
            {searchOpen ? <FaClose size={16} /> : <FaSearch size={16} />}
          </button>
          <a href="mailto:vistaverveholidays@gmail.com?subject=Travel%20Enquiry" className="enquire-btn">
            <span>Enquire Now</span> <span className="arrow-circle">→</span>
          </a>
          <button className="icon-btn menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <form className="navbar-search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search destinations or packages..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
          />
          <button type="submit"><FaSearch size={16} /></button>
        </form>
      )}
    </div>
  );
}