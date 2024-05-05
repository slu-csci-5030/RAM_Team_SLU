import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    description: "",
    // Add more fields
    subtype: "",
    startDate: "",
    finishDate: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false); // State to control visibility of additional fields

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
      const newAsset = { ...asset };
      onAdd(newAsset);
      setAsset({
        assetName: "",
        location: "",
        quantity: "",
        description: "",
        // Reset additional fields
        subtype: "",
        startDate: "",
        finishDate: ""
      });
      setShowModal(false);
    }
  };

  const handleAddFields = () => {
    setShowAdditionalFields(true);
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
            {/* Additional fields */}
            <button onClick={handleAddFields}>Add More Fields</button>
            {showAdditionalFields && (
              <>
                <input
                  type="text"
                  placeholder="Subtype"
                  value={asset.subtype}
                  onChange={handleChange}
                  className="add-asset-input"
                  name="subtype"
                />
                <input
                  type="text"
                  placeholder="Start Date"
                  value={asset.startDate}
                  onChange={handleChange}
                  className="add-asset-input"
                  name="startDate"
                />
                <input
                  type="text"
                  placeholder="Finish Date"
                  value={asset.finishDate}
                  onChange={handleChange}
                  className="add-asset-input"
                  name="finishDate"
                />
              </>
            )}
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
