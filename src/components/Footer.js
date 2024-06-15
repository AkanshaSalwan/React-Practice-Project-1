import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Connect with Us</p>
      <div className="chatbot">
        <a href="#chat">
          <img src="/chatbot-icon.png" alt="Chatbot" />
          Click here to chat
        </a>
      </div>
    </footer>
  );
}

export default Footer;
