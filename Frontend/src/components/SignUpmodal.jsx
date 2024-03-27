import React, { useState } from "react";
import "../assets/Styles/Modal.css";

function SignUpModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // State variables for validation
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reenterPassword: "",
  });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // Collect errors
    const newErrors = {};
    if (!firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!reenterPassword) {
      newErrors.reenterPassword = "Please re-enter your password";
    } else if (password !== reenterPassword) {
      newErrors.reenterPassword = "Passwords do not match";
    }

    // Update errors state
    setErrors(newErrors);

    // If there are any errors, stop form submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If all fields are valid, submit the form
    console.log(
      "Sign Up form submitted with email:",
      email,
      "password:",
      password,
      "first name:",
      firstName,
      "last name:",
      lastName
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <input
            type="password"
            placeholder="Re-enter Password"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
          {errors.reenterPassword && (
            <p className="error">{errors.reenterPassword}</p>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;