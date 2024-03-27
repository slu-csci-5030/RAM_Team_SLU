import React, { useState } from 'react';
import '../assets/Styles/CompanyDescription.css';
import SignUpModal from './SignUpmodal';
import LoginModal from './LoginModal';
 
function CompanyDescription({ onLoginButtonClick, onClose }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State variables for validation
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
 
  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };
 
  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };
 
  const openLoginModal = () => {
    setShowLoginModal(true);
  };
 
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLoginInSubmit = (e) => {
    e.preventDefault();

    // Collect errors
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    // Update errors state
    setErrors(newErrors);

    // If there are any errors, stop form submission
    // if (Object.keys(newErrors).length > 0) {
    //   return;
    // }

    // If all fields are valid, submit the form
    console.log(
      "Login In form submitted with email:",
      email,
      "password:",
      password
    );
    onLoginButtonClick();
    onClose();
  };
 
  return (
<div className='login__outer__container'>
<div className="login__container">
<div className='login__heading'>Login</div>
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
<div className="password__container">
<a href="#" onClick={openLoginModal}>Forgot password?</a>
</div>
<button onClick={handleLoginInSubmit}>Login</button> {/* Call onLoginButtonClick */}
<div className="request__access">
Don&apos;t have an account?&nbsp;
<a href="#" onClick={openSignUpModal}>Sign up</a>
</div>
<a href="https://ask.slu.edu/TDClient/30/Portal/Home/" id="support" target="_blank" rel="noopener noreferrer">IT Support</a>

</div>
      {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
</div>
  );
}
 
export default CompanyDescription;