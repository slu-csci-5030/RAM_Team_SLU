import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    startDate: "",
    finishDate: "",
    trainingAvailable: false,
    contactOrganisation: "",
    contactEmail: "",
    contactPhone: "",
    capabilities: [],
    availableForUse: "",
    contactUrl: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [assetsList, setAssetsList] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
  
    // Update the state based on the element type
    if (e.target.type === "checkbox") {
      setAsset({ ...asset, [name]: checked });
    } else {
      setAsset({ ...asset, [name]: value });
    }
  };

  const handleAdd = () => {
    if (
      asset.assetName.trim() !== "" &&
      asset.location.trim() !== "" &&
      asset.quantity.trim() !== ""
    ) {
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset); // You can remove this line if you don't need the parent to know about the new asset
      setAsset({
        assetName: "",
        location: "",
        quantity: "",
        startDate: "",
        finishDate: "",
        trainingAvailable: false,
        contactOrganisation: "",
        contactEmail: "",
        contactPhone: "",
        capabilities: [],
        availableForUse: "",
        contactUrl: "",
      });
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
              <input
                type="date"
                placeholder="Start Date"
                value={asset.startDate}
                onChange={handleChange}
                className="add-asset-input"
                name="startDate"
              />
              <input
                type="date"
                placeholder="Finish Date"
                value={asset.finishDate}
                onChange={handleChange}
                className="add-asset-input"
                name="finishDate"
              />
            <input
              type="text"
              placeholder="Contact Organisation"
              value={asset.contactOrganisation}
              onChange={handleChange}
              className="add-asset-input"
              name="contactOrganisation"
            />
            <input
              type="email"
              placeholder="Contact Email"
              value={asset.contactEmail}
              onChange={handleChange}
              className="add-asset-input"
              name="contactEmail"
            />
            <input
              type="tel"
              placeholder="Contact Phone"
              value={asset.contactPhone}
              onChange={handleChange}
              className="add-asset-input"
              name="contactPhone"
            />
            <input
              type="text"
              placeholder="Capabilities (comma-separated)"
              value={asset.capabilities.join(", ")}
              onChange={(e) =>
                setAsset((prevAsset) => ({
                  ...prevAsset,
                  capabilities: e.target.value.split(",").map((cap) => cap.trim()),
                }))
              }
              className="add-asset-input"
              name="capabilities"
            />
            <select
              value={asset.availableForUse}
              onChange={handleChange}
              className="add-asset-input"
              name="availableForUse"
            >
              <option value="">Select Availability</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <input
              type="url"
              placeholder="Contact URL"
              value={asset.contactUrl}
              onChange={handleChange}
              className="add-asset-input"
              name="contactUrl"
            />
            <div>
              <label style={{color:"white"}}>
                <input
                  type="checkbox"
                  checked={asset.trainingAvailable}
                  onChange={handleChange}
                  name="trainingAvailable"
                />
                Training Available
              </label>
            </div>
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
