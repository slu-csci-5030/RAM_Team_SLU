import React, { useState } from 'react';
import '../assets/Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className='header__menu'>
        <div className='header__menu__wrap'>
          <div className='logo'>Research Asset Management</div>
          <div className='header__menu__group'>
            <FontAwesomeIcon icon={faUserCircle} className='header__icon' onClick={handleDropdownClick} />
            {showDropdown && (
              <div className="account-dropdown">
                <div className="account-dropdown-triangle"></div>
                <div className="account-dropdown-content">
                  <p>Log out</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
 