import React, { useState } from 'react';
import '../assets/Styles/AddAsset.css';

function AddAsset({ onAdd }) {
  return (
    <>
      <div className="add-asset-container">
        <button className="add-asset-button">Add Asset</button>
      </div>
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            {/* Add your form elements here */}
            <input
              type="text"
              placeholder="Asset Name"
              className="add-asset-input"
              name="assetName"
            />
            <input
              type="text"
              placeholder="Location"
              className="add-asset-input"
              name="location"
            />
            <input
              type="text"
              placeholder="Quantity"
              className="add-asset-input"
              name="quantity"
            />
            <button  id="submitbutton">Submit</button>
          </div>
        </div>

      <div className="assets-list">
        <h3>Assets List</h3>
        {/* <ul>
          {assetsList.map((item, index) => (
            <li key={index}>
              {item.assetName} - {item.location} - {item.quantity}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
export default AddAsset;