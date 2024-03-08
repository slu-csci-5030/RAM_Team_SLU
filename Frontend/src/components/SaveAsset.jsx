// src/components/SaveAsset.js
import React from 'react';
import '../assets/Styles/SaveAsset.css';

function SaveAsset({ onSave }) {
  const handleSave = () => {
    onSave();
  };

  return (
    <button onClick={handleSave} className="save-asset-button">Save</button>
  );
}
export default SaveAsset;