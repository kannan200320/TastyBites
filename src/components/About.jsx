import React from "react";
import "../style/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <span className="about-badge">Our Story</span>
        <h2>Why People Love <span>TastyBites</span></h2>

        <p className="about-description">
          At TastyBites, we believe great food starts with great ingredients. 
          We serve freshly crafted meals made with 100% organic vegetables, 
          farm-fresh meats, and secret family recipes. Our goal is simple to
          make ordering food quick, simple, and delightful!
        </p>
        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon">🥬</div>
            <h3>Quality Ingredients</h3>
            <p>We source 100% fresh & organic ingredients directly from local farms every morning. No frozen, no compromise.</p>
          </div>

          <div className="about-card highlight">
            <div className="card-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Your food is cooked after you order and delivered hot in just 30 minutes. We track time, not just orders.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">👨‍🍳</div>
            <h3>Top Rated Chefs</h3>
            <p>Our master chefs have 10+ years of experience in 5-star hotels. Every dish is a masterpiece.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;