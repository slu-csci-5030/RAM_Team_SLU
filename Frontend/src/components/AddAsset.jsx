import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    modelNumber: "", // New state for model number
    additionalList: [], // New state for additional list
  });
  const [showModal, setShowModal] = useState(false);
  const [assetsList, setAssetsList] = useState([]);

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
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset);
      setAsset({
        assetName: "",
        location: "",
        quantity: "",
        modelNumber: "", // Reset model number
        additionalList: [], // Reset additional list
      });
      setShowModal(false);
    }
  };

  const handleAdditionalListChange = (e) => {
    const { value } = e.target;
    setAsset({ ...asset, additionalList: value.split(",") }); 
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
            <input
              type="text"
              placeholder="Model Number"
              value={asset.modelNumber}
              onChange={handleChange}
              className="add-asset-input"
              name="modelNumber"
            />
            <input
              type="text"
              placeholder="Additional List (comma-separated)"
              value={asset.additionalList.join(",")} 
              onChange={handleAdditionalListChange}
              className="add-asset-input"
              name="additionalList"
            />
            <button id="submitbutton" onClick={handleAdd}>
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="assets-list">
        <h3>Assets List</h3>
        <ul>
          {assetsList.map((item, index) => (
            <li key={index}>
              {item.assetName} - {item.location} - {item.quantity} - {item.modelNumber} - {item.additionalList.join(",")}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default AddAsset;
