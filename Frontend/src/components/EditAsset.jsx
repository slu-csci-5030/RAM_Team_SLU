import React from 'react';
import '../assets/Styles/EditAsset.css';

function EditAsset({ asset, onEdit, onSave }) {
 const handleChange = (e) => {
    const { name, value } = e.target;
    onEdit({ ...asset, [name]: value });
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
        />
        <input
          type="text"
          name="location"
          value={asset.location}
          onChange={handleChange}
          className="edit-asset-input"
        />
        <input
          type="text"
          name="quantity"
          value={asset.quantity}
          onChange={handleChange}
          className="edit-asset-input"
        />
        {/* New fields */}
        <select
          name="availableForUse"
          value={asset.availableForUse}
          onChange={handleChange}
          className="edit-asset-select"
        >
          <option value="">Select Available For Use</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select
          name="feeForService"
          value={asset.feeForService}
          onChange={handleChange}
          className="edit-asset-select"
        >
          <option value="">Select Fee For Service</option>
          <option value="Free">Free</option>
          <option value="Fees apply">Fees apply</option>
        </select>
        <button onClick={onSave} className="save-asset-button">Save</button>
      </div>
    </div>
 );
}

export default EditAsset;
