import React from "react";
import "../style/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <h1>
          Order Your Favorite
          <br />
          <span>Food Online</span>
        </h1>

        <p>
          Enjoy freshly prepared, delicious meals delivered
          hot and fast directly to your home.
        </p>

        <a href="#menu" className="hero-button">
          Explore Menu
        </a>
      </div>

    </section>
  );
}
export default Hero;