import React from "react";
import "../style/header.css";

function Header({ cartCount, openCart }) {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          <span>🍔TastyBites</span>
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cart-button" onClick={openCart}>
          <span className="cart-icon">🛍️</span>
          <span className={`cart-badge ${cartCount === 0 ? 'plus' : ''}`}>
            {cartCount === 0 ? '+' : cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
export default Header;