import React, { useState, useEffect } from "react";
import "../assets/Styles/UserProfile.css"

function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    bio: "",
    avatar: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile data from backend API
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    // Replace this with actual API call to retrieve user profile data
    // For example:
    fetch("/api/user/profile")
      .then((response) => response.json())
      .then((data) => {
        setUserProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      });
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="profile-info">
            <p>
              <strong>Username:</strong> {userProfile.username}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
              <strong>Bio:</strong> {userProfile.bio}
            </p>
          </div>
          <div className="avatar">
            <img src={userProfile.avatar} alt="Profile Avatar" />
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;
