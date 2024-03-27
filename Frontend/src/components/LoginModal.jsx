// LoginModal.js
import React, { useState } from 'react';
import '../assets/Styles/Modal.css';


function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    email: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    }

    // Update errors state
    setErrors(newErrors);

    // If there are any errors, stop form submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    console.log('Login form submitted with email:', email);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Forgot Password</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;