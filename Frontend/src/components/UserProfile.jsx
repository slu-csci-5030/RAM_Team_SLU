import React, { useState, useEffect } from "react";
import "../assets/Styles/UserProfile.css";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    bio: "",
    avatar: "",
    joinedDate: "",
  });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false); // Added state for editing mode

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Add API call to save changes to user profile
    setEditing(false);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : editing ? (
        <>
          <div className="profile-info">
            <label>
              <strong>Username:</strong>
              <input type="text" value={userProfile.username} onChange={(e) => setUserProfile({...userProfile, username: e.target.value})} />
            </label>
            <label>
              <strong>Email:</strong>
              <input type="text" value={userProfile.email} onChange={(e) => setUserProfile({...userProfile, email: e.target.value})} />
            </label>
            <label>
              <strong>Bio:</strong>
              <textarea value={userProfile.bio} onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})} />
            </label>
            <button onClick={handleSave}>Save</button>
          </div>
        </>
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
            <p>
              <strong>Joined Date:</strong> {formatDate(userProfile.joinedDate)}
            </p>
            <button onClick={handleEdit}>Edit Profile</button>
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
