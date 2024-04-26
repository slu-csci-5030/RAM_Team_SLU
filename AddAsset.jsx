import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    name: "",
    description: "",
    additionalName: "",
    codedIn: "",
    contacts: "",
    dataInput: "",
    dataOutput: "",
    addresses: "",
    url: "",
    developedBy: "",
    inventoryNumber: "",
    manufacturers: "",
    modelNumber: "",
    feeForService: "",
    protocol: "",
    restrictions: "",
    serviceFeeUrl: "",
    algorithm: "",
    operatingSystem: "",
    licence: "",
    purpose: "",
    version: "",
    subType: "",
    startDate: "",
    finishDate: "",
    trainingAvailable: "",
    contactOrganisation: "",
    contactEmail: "",
    contactPhone: "",
    capabilities: "",
    availableForUse: "",
    contactUrl: ""
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
      asset.name.trim() !== "" &&
      asset.description.trim() !== ""
      // Add validation for other required fields if needed
    ) {
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset);
      setAsset({
        assetName: "",
        location: "",
        quantity: "",
        name: "",
        description: "",
        additionalName: "",
        codedIn: "",
        contacts: "",
        dataInput: "",
        dataOutput: "",
        addresses: "",
        url: "",
        developedBy: "",
        inventoryNumber: "",
        manufacturers: "",
        modelNumber: "",
        feeForService: "",
        protocol: "",
        restrictions: "",
        serviceFeeUrl: "",
        algorithm: "",
        operatingSystem: "",
        licence: "",
        purpose: "",
        version: "",
        subType: "",
        startDate: "",
        finishDate: "",
        trainingAvailable: "",
        contactOrganisation: "",
        contactEmail: "",
        contactPhone: "",
        capabilities: "",
        availableForUse: "",
        contactUrl: ""
      });
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
              type="text"
              placeholder="Name"
              value={asset.name}
              onChange={handleChange}
              className="add-asset-input"
              name="name"
            />
            <textarea
              placeholder="Description"
              value={asset.description}
              onChange={handleChange}
              className="add-asset-input"
              name="description"
            />
            {/* Additional fields */}
            <input
              type="text"
              placeholder="Additional Name"
              value={asset.additionalName}
              onChange={handleChange}
              className="add-asset-input"
              name="additionalName"
            />
            <input
              type="text"
              placeholder="Coded In"
              value={asset.codedIn}
              onChange={handleChange}
              className="add-asset-input"
              name="codedIn"
            />
            <input
              type="text"
              placeholder="Contacts"
              value={asset.contacts}
              onChange={handleChange}
              className="add-asset-input"
              name="contacts"
            />
            {/* Add more fields as needed */}
            <button id="submitbutton" onClick={handleAdd}>
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="assets-list">
        <h3>Assets List</h3>
        {/* Render your assets list here */}
      </div>
    </>
  );
}

export default AddAsset;
