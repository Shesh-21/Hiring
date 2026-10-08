import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          THE FIRE <span>WALA</span>
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#openings" onClick={closeMenu}>
            Open Positions
          </a>

          <a href="#culture" onClick={closeMenu}>
            Why Join Us
          </a>

          {/* <a href="#process" onClick={closeMenu}>
            Hiring Process
          </a> */}

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a
            href="#apply"
            className="mobile-apply"
            onClick={closeMenu}
          >
            Apply Now
          </a>

        </div>

        {/* Desktop Apply Button */}
        <a href="#apply" className="nav-apply">
          Apply Now
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;