import React from "react";
import "../style/footer.css";

function Footer() {

  const handleFilter = (category) => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const buttons = document.querySelectorAll(".category-button");
      buttons.forEach((btn) => {
        if (btn.textContent.trim() === category) {
          btn.click();
        }
      });
    }, 100);
  };
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">🍔TastyBites</h3>
          <p className="footer-desc">
            Discover delicious meals made with fresh, organic ingredients.
            Fast delivery, great taste, and happy memories in every bite.
          </p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>POPULAR ITEMS</h4>
          <a onClick={() => handleFilter("Burgers")}>Burgers</a>
          <a onClick={() => handleFilter("Pizza")}>Pizza</a>
          <a onClick={() => handleFilter("Asian")}>Asian</a>
          <a onClick={() => handleFilter("Italian")}>Italian</a>
          <a onClick={() => handleFilter("Desserts")}>Desserts</a>
          <a onClick={() => handleFilter("Drinks")}>Drinks</a>
        </div>

        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <p>📍 25 Main Road, Salem, Tamil Nadu</p>
          <p>📞 +91 9600377581</p>
          <p>✉️ hello@tastybites.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TastyBites. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;