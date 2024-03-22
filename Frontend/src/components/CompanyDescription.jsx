import React, { useState } from 'react';
import '../assets/Styles/CompanyDescription.css';
import SignUpModal from './SignUpmodal';
import LoginModal from './LoginModal';
 
function CompanyDescription({ onLoginButtonClick }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
 
  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };
 
  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };
 
  const openLoginModal = () => {
    setShowLoginModal(true);
  };
 
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };
 
  return (
<div className='login__outer__container'>
<div className="login__container">
<div className='login__heading'>Login</div>
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<div className="password__container">
<a href="#" onClick={openLoginModal}>Forgot password?</a>
</div>
<button onClick={onLoginButtonClick}>Login</button> {/* Call onLoginButtonClick */}
<div className="request__access">
Don&apos;t have an account?&nbsp;
<a href="#" onClick={openSignUpModal}>Sign up</a>
</div>
<a href="https://ask.slu.edu/TDClient/30/Portal/Home/" id="support" target="_blank" rel="noopener noreferrer">IT Support</a>
</div>
      {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
</div>
  );
}
 
export default CompanyDescription;