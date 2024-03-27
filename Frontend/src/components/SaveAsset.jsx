import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import '../assets/Styles/SaveAsset.css';

function SaveAsset({ onSave = () => console.log('Default Save Action') }) {
  const handleSave = () => {
    console.log('Asset Saved Successfully');
    onSave();
  };

  return (
    <button 
      type="button" // Specify the button type as "button"
      onClick={handleSave} 
      className="save-asset-button"
      aria-label="Save Asset" // Add an aria-label for accessibility
    >
      Save
    </button>
  );
}

// Use PropTypes to validate props
SaveAsset.propTypes = {
  onSave: PropTypes.func,
};

export default SaveAsset;