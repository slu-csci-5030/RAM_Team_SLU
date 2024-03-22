import React, { useState } from "react";
import "../assets/Styles/Modal.css";

function SignUpModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Sign Up form submitted with email:",
      email,
      "password:",
      password,
      "full name:",
      fullName,
      "phone number:",
      phoneNumber
    );
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={""}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={""}
          />
          <input
            type="email"
            placeholder="Email"
            value={""}
          />
          <input
            type="password"
            placeholder="Password"
            value={""}
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            value={""}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;