
import React, { useState } from 'react';
import '../assets/Styles/CompanyDescription.css';

function CompanyDescription() {
  return (
    <div className='login__outer__container'>
    <div className="login__container">
      <div className='login__heading'>Login</div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="password__container">
          <a href="#" className="forgot__password__link">Forgot password?</a>
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
