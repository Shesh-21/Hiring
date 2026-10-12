import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Company Logo */}
        <a
          href="/"
          className="navbar-logo"
          aria-label="The Fire Wala careers home"
          onClick={closeMenu}
        >
          <img
            src="/msd-logo-transparent.png"
            alt="MSD Engineering - The Fire Wala"
            className="navbar-logo-image"
          />
        </a>

        {/* Desktop and Mobile Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/#openings" onClick={closeMenu}>
            Opportunities
          </a>

          <a href="/#culture" onClick={closeMenu}>
            Why Join Us
          </a>

          <a href="/#faq" onClick={closeMenu}>
            FAQs
          </a>

          <a
            href="/#apply"
            className="mobile-apply"
            onClick={closeMenu}
          >
            Apply Now <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Desktop CTA */}
        <a href="/#apply" className="nav-apply">
          Apply Now
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;