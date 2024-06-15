import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-image.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
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
    </section>
  );
}

export default HeroSection;
