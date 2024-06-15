import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Media Clock</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Our Works</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#partners">Our Partners</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </nav>
      <button className="contact-btn">Let's Talk</button>
    </header>
  );
}

export default Header;
