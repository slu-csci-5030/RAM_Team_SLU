import React, { useState } from 'react';
import '../assets/Styles/EditAsset.css';

function EditAsset({ asset, onEdit, onSave }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onEdit({ ...asset, [name]: value });
  };

  const handleSave = () => {
    onSave();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <input
          type="text"
          name="assetName"
          value={asset.assetName}
          onChange={handleChange}
          className="edit-asset-input"
          placeholder="Asset Name"
        />
        <input
          type="text"
          name="location"
          value={asset.location}
          onChange={handleChange}
          className="edit-asset-input"
          placeholder="Location"
        />
        <input
          type="text"
          name="quantity"
          value={asset.quantity}
          onChange={handleChange}
          className="edit-asset-input"
          placeholder="Quantity"
        />
        <button onClick={handleSave} className="save-asset-button">Save</button>
        {showMessage && (
          <div className="popup-message">
            <p>Details have been updated.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditAsset;
