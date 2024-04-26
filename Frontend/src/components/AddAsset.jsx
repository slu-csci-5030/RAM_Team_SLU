import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
 const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    availableForUse: "",
    feeForService: "",
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
      asset.quantity.trim() !== "" &&
      asset.availableForUse.trim() !== "" &&
      asset.feeForService.trim() !== ""
    ) {
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset);
      setAsset({ assetName: "", location: "", quantity: "", availableForUse: "", feeForService: "" });
      setShowModal(false);
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
            <div className="input-fields-container">
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
              <select
                value={asset.availableForUse}
                onChange={handleChange}
                className="add-asset-select"
                name="availableForUse"
              >
                <option value="">Select Available For Use</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <select
                value={asset.feeForService}
                onChange={handleChange}
                className="add-asset-select"
                name="feeForService"
              >
                <option value="">Select Fee For Service</option>
                <option value="Free">Free</option>
                <option value="Fees apply">Fees apply</option>
              </select>
            </div>
            <button id="submitbutton" onClick={handleAdd}>
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="assets-list">
        <h3>Assets List</h3>
        {/* Assets list rendering logic */}
      </div>
    </>
 );
}

export default AddAsset;
