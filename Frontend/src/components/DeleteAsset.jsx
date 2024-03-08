// src/components/DeleteAsset.js
import React from 'react';
import '../assets/Styles/DeleteAsset.css';

function DeleteAsset({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button onClick={handleDelete} className="delete-asset-button">Delete</button>
  );
}

export default DeleteAsset;
