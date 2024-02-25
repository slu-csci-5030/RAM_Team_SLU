// LoginModal.js
import React, { useState } from 'react';
import '../assets/Styles/Modal.css';


function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login form submitted with email:', email, 'and password:', password);
    onClose();
  };

  return (
    <div className="modal" placeholder="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Forgot Password</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
