// SignUpModal.js
import React, { useState } from 'react';
import '../assets/Styles/Modal.css';

function SignUpModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    
    console.log('Sign Up form submitted with email:', email, 'password:', password, 'full name:', fullName, 'phone number:', phoneNumber);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Request Access</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;