// SignUpModal.js
import React, { useState } from "react";
import "../assets/Styles/Modal.css";

function SignUpModal({ onClose }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [phoneError, setPhoneError] = useState("");

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePassword = (password) => {
		return password.length >= 6;
	};

	const validatePhoneNumber = (phoneNumber) => {
		// Sample validation, adjust as per your requirements
		return phoneNumber.length === 10 && !isNaN(phoneNumber);
	};

	const handleSignUpSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setEmailError("Please enter a valid email address.");
			return;
		} else {
			setEmailError("");
		}

		if (!validatePassword(password)) {
			setPasswordError("Password must be at least 6 characters long.");
			return;
		} else {
			setPasswordError("");
		}

		if (!validatePhoneNumber(phoneNumber)) {
			setPhoneError("Please enter a valid 10-digit phone number.");
			return;
		} else {
			setPhoneError("");
		}

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
				<h2>Request Access</h2>
				<form onSubmit={handleSignUpSubmit}>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{emailError && <div className="error">{emailError}</div>}
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{passwordError && <div className="error">{passwordError}</div>}
					<textarea
						placeholder="Description"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						rows={1}
						cols={30}
					/>
					<input
						type="text"
						placeholder="Phone Number"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					{phoneError && <div className="error">{phoneError}</div>}
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default SignUpModal;
