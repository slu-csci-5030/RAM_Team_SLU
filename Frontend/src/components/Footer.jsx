// Footer.js
import React from 'react';
import '../assets/Styles/Footer.css';
import assetManagementImage from '../assets/Images/asset_management.jpeg';
import facebookImage from '../assets/Images/facebook.jpeg';
import instgramImage from '../assets/Images/instagram.jpeg';
import twitterImage from '../assets/Images/twitter.jpeg';

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
              Research Asset tracking made easy.
            </p>
            <p>
              Address: 123 Main Street, St.Louis, United States
            </p>
          </div>
        </div>
        <div className="footer-section contact">
          <div className='footer__sub-section'>
            <h2>Contact Us</h2>
            <p>Email: info@ram.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        <div className="footer-section links">
          <div className='footer__sub-section'>
            <h2>Follow Us</h2>
            <div className='bind__flex'>
              <img src={facebookImage} alt="Company Logo" className='social__media'/>
              <img src={instgramImage} alt="Company Logo" className='social__media'/>
              <img src={twitterImage} alt="Company Logo" className='social__media'/>
            </div>
            <p className='copyright'>&copy; 2024 RAM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
