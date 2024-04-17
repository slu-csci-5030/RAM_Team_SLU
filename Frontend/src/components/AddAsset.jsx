import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    description: "", // Add description field
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAsset({ ...asset, [name]: value });
  };

  const handleAdd = () => {
    if (
      asset.assetName.trim() !== "" &&
      asset.location.trim() !== "" &&
      asset.quantity.trim() !== ""
    ) {
      const newAsset = { ...asset }; // Create a new asset object
      onAdd(newAsset); // Pass the new asset to the onAdd function
      setAsset({ assetName: "", location: "", quantity: "", description: "" }); // Reset form fields
      setShowModal(false); // Close the modal after adding asset
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
            {/* Add your form elements here */}
            <input
              type="text"
              placeholder="Asset Name"
              value={asset.assetName}
              onChange={handleChange}
              className="add-asset-input"
              name="assetName"
            />
            <input
              type="text"
              placeholder="Location"
              value={asset.location}
              onChange={handleChange}
              className="add-asset-input"
              name="location"
            />
            <input
              type="text"
              placeholder="Quantity"
              value={asset.quantity}
              onChange={handleChange}
              className="add-asset-input"
              name="quantity"
            />
            {/* Add description input */}
            <input
              type="text"
              placeholder="Description"
              value={asset.description}
              onChange={handleChange}
              className="add-asset-input"
              name="description"
            />
            <button id="submitbutton" onClick={handleAdd}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default AddAsset;
