import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Crafting <span className="highlight">flawless</span> digital experiences</h1>
        <ul>
          <li>Innovative Solutions Tailored to Client Needs</li>
          <li>Agile Development Methodology and Rapid Delivery</li>
          <li>Robust Quality Assurance and Testing Processes</li>
        </ul>
        <div className="contact-info">
          <p>03 9016442</p>
          <p>info@mediaclock.com.au</p>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-image.png" alt="Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
