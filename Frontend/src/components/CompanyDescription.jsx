
import React, { useState } from 'react';
import '../assets/Styles/CompanyDescription.css';
import SignUpModal from './SignUpmodal';
import LoginModal from './LoginModal';


function CompanyDescription() {
 

  return (
    <div className='login__outer__container'>
    <div className="login__container">
      <div className='login__heading'>Login</div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="password__container">
         <a href="#">Forgot password?</a>
      </div>
      <button>Login</button>
      <div className="request__access">
      <a href="#">Request access?</a>
      </div>
    </div>
    </div>
  );
}

export default CompanyDescription;
