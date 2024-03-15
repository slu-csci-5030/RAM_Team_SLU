import React, { useState } from 'react';
import '../assets/Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
 
 
function Header() {
 
  return (
    <header>
        <div className='header__menu'>
          <div className='header__menu__wrap'>
            <div className='logo'>Research Asset Management</div>
            <div className='header__menu__group'>
              <FontAwesomeIcon icon={faUserCircle} className='header__icon'/>
              </div>
          </div>
        </div>
    </header>
  );
}
 
export default Header;
 