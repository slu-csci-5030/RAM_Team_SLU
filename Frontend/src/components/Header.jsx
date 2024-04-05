import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'; 
import '../assets/Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCog, faSignOutAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpmodal';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const handleLoginClick = () => {
  //   setShowLoginModal(true);
  //   setShowDropdown(false);
  // };

  // const handleSignUpClick = () => {
  //   setShowSignUpModal(true);
  //   setShowDropdown(false);
  // };

  const handleLogoutClick = () => {
    logout();
    setShowDropdown(false);
    history.push('/');
  };

  return (
    <header>
      <div className='header__menu'>
        <div className='header_menu_wrap'>
          <div className='logo'>Research Asset Management</div>
          <div className='header_menu_group' onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUserCircle} className='header__icon' />
            {showDropdown && (
              <div className="dropdown">
                {isAuthenticated ? (
                  <>
                    <a href="#profile" className="dropdown-item">
                      <FontAwesomeIcon icon={faUserCircle} className="dropdown-icon" />
                      Profile
                    </a>
                    <a href="#settings" className="dropdown-item">
                      <FontAwesomeIcon icon={faCog} className="dropdown-icon" />
                      Settings
                    </a>
                    <div className="dropdown-item" onClick={handleLogoutClick}>
                      <FontAwesomeIcon icon={faSignOutAlt} className="dropdown-icon" />
                      Logout
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dropdown-item" >
                      <FontAwesomeIcon icon={faInfoCircle} className="dropdown-icon" />
                      Login
                    </div>
                    <div className="dropdown-item" >
                      <FontAwesomeIcon icon={faInfoCircle} className="dropdown-icon" />
                      Sign Up
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
    </header>
  );
}

export default Header;