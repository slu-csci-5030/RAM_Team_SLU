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
              Saint Louis University's research asset management tool helps you organize and keep track of the school's research assets.
            </p>
          </div>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: project_members@slu.edu</p>
          <p>Phone: +3144567890</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">↑ Back to top</a></li>
            <li><a href="https://www.slu.edu/" target="_blank" rel="noopener noreferrer">SLU Homepage</a></li>
            <li><a href="https://myslu.slu.edu/" target="_blank" rel="noopener noreferrer">mySLU</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Saint Louis University. All rights reserved.</p>
        <p>&copy; 2024 Okta, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;