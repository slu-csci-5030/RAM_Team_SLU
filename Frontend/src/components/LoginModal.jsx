// LoginModal.js
import React, { useState } from 'react';
import '../assets/Styles/Modal.css';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation, adjust as per your requirements
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Basic password validation, adjust as per your requirements
    return password.length >= 6;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    console.log('Login form submitted with email:', email, 'and password:', password);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <div className="error">{emailError}</div>}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <div className="error">{passwordError}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
