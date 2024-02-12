
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpmodal';
import '../assets/Styles/Header.css';


function Header() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignUpClose = () => {
    setShowSignUpModal(false);
  };

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  return (
    <header className="header">
        <h1>Research Asset Tracking</h1>
      
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><button className='Button' onClick={handleSignUpClick}>Sign Up</button></li>
          <li><button className='Button'onClick={handleLoginClick}>Login</button></li>
        </ul>
      </nav>
      
      {showSignUpModal && <SignUpModal onClose={handleSignUpClose} />}
      {showLoginModal && <LoginModal onClose={handleLoginClose} />}
    </header>
  );
}

export default Header;
