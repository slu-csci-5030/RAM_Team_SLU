import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [assetsList, setAssetsList] = useState([]);
  const [validationErrors, setValidationErrors] = useState({
    assetName: "",
    location: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate if quantity field contains only numbers
    if (name === "quantity" && !/^\d+$/.test(value)) {
      setValidationErrors({ ...validationErrors, [name]: "Quantity must be a number" });
    } else {
      setValidationErrors({ ...validationErrors, [name]: "" });
      setAsset({ ...asset, [name]: value });
    }
  };

  const handleAdd = () => {
    const errors = {};
    // Validate input fields
    if (asset.assetName.trim() === "") {
      errors.assetName = "Asset name is required";
    }
    if (asset.location.trim() === "") {
      errors.location = "Location is required";
    }
    if (asset.quantity.trim() === "") {
      errors.quantity = "Quantity is required";
    }

    if (Object.keys(errors).length === 0) {
      // If no errors, proceed with adding asset
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset);
      setAsset({ assetName: "", location: "", quantity: "" });
      setShowModal(false);
    } else {
      // Set validation errors for each input field
      setValidationErrors(errors);
    }
  };

  return (
    <>
      <div className="add-asset-container">
        <button onClick={() => setShowModal(true)} className="add-asset-button">
          Add Asset
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <input
              type="text"
              placeholder="Asset Name"
              value={asset.assetName}
              onChange={handleChange}
              className="add-asset-input"
              name="assetName"
            />
            {/* Render validation message if there is an error */}
            {validationErrors.assetName && <span className="error-message">{validationErrors.assetName}</span>}
            <input
              type="text"
              placeholder="Location"
              value={asset.location}
              onChange={handleChange}
              className="add-asset-input"
              name="location"
            />
            {validationErrors.location && <span className="error-message">{validationErrors.location}</span>}
            <input
              type="text"
              placeholder="Quantity"
              value={asset.quantity}
              onChange={handleChange}
              className="add-asset-input"
              name="quantity"
            />
            {/* Render validation message if there is an error */}
            {validationErrors.quantity && <span className="error-message">{validationErrors.quantity}</span>}
            <button id="submitbutton" onClick={handleAdd}>
              Submit
            </button>
          </div>
        </div>
      )}

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
