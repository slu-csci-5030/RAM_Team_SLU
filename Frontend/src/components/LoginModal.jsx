// LoginModal.js
import React, { useState } from 'react';
import '../assets/Styles/Modal.css';


function LoginModal({ onClose }) {
  

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" >&times;</span>
        <h2>Forgot Password</h2>
        <form >
          <input type="email" placeholder="Email" value={email}  />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;