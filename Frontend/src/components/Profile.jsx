import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import "../assets/Styles/Profile.css";
import defaultAvatar from '../assets/default-avatar.png';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profilePicture, setProfilePicture] = useState(defaultAvatar);
  const [changesSaved, setChangesSaved] = useState(false);

  const saveChanges = () => {
    
    alert('Changes Saved');
    setChangesSaved(true);
    setTimeout(() => {
      setChangesSaved(false);
    }, 2000); 
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={profile-container ${isDarkMode ? 'dark-mode' : ''}}>
      <div className="profile-header">
        <h2>Profile Settings</h2>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-icon-container">
          <img
            src={profilePicture}
            alt="Profile Icon"
            className="profile-icon"
          />
          <label htmlFor="profile-picture-input" className="profile-icon-label">
            <FontAwesomeIcon icon={faCameraRetro} />
          </label>
          {/* <input
            type="file"
            accept="image/*"
            id="profile-picture-input"
            onChange={handleProfilePictureChange}
            className="profile-icon-input"
          /> */}
        </div>
        <div className="profile-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button type="submit" className="save-button" onClick={saveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;