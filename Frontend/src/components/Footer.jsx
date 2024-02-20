// Footer.js
import React from 'react';
import '../assets/Styles/Footer.css';
import assetManagementImage from '../assets/Images/asset_management.jpeg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="about-logo">
         
            <img src={assetManagementImage} alt="Company Logo" />
          </div>
          <div className="about-description">
            <p>
              Research Asset tracking tool made easy.
            </p>
            <p>
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
