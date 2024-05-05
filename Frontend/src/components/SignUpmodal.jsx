// SignUpModal.js
import React, { useState } from "react";
import "../assets/Styles/Modal.css";

function SignUpModal({ onClose }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSignUpSubmit = (e) => {
		e.preventDefault();
	  
		fetch('/createuser', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ email, password, fullName, phoneNumber }),
		})
		  .then((response) => response.json())
		  .then((data) => {
			console.log('Success:', data);
			onClose();
		  })
		  .catch((error) => {
			console.error('Error:', error);
		  });
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
					<textarea
						placeholder="Description"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						rows={1}
						cols={30}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default SignUpModal;
