import React, { useState } from "react";
import "../style/header.css";

function Header({ cartCount, openCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header-container">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>🍔TastyBites</span>
        </a>

        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="cart-button" onClick={openCart} aria-label="Open Cart">
            <span className="cart-icon">🛍️</span>
            <span className={`cart-badge ${cartCount === 0 ? "plus" : ""}`}>
              {cartCount === 0 ? "+" : cartCount}
            </span>
          </button>

          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;