import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Fotter.css"
const Footer = () => {
  return (
    <footer className="footer" style={{margin: " -140px -69px -41px -32px"}}>
      <div className="footer-content">
        <h3>T-King</h3>
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </div>
        <h2>All Right are Reserved@2024</h2>
      </div>
    </footer>
  );
};

export default Footer;
