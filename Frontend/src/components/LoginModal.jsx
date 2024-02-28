import React, { useState } from 'react';
import '../assets/Styles/Modal.css';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpMessage, setShowOtpMessage] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send OTP to the user's email
    // For now, just showing the message
    setShowOtpMessage(true);
    // Simulating OTP send process, you can replace this with actual logic
    setTimeout(() => {
      setShowOtpMessage(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Forgot Password</h2>
        <h4 className="header">Please enter your Email</h4>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="Enter your valid email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {showOtpMessage && (
          <div className="otp-message">
            OTP sent to registered email
          </div>
        )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;