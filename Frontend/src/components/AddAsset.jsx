import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
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
    feeForService: false,
    protocol: "",
    restrictions: [],
    serviceFeeUrl: "",
    algorithm: "",
    operatingSystem: "",
    licence: "",
    purpose: "",
    version: "",
    subType: "",
    startDate: "",
    finishDate: "",
    trainingAvailable: false,
    contactOrganisation: "",
    contactEmail: "",
    contactPhone: "",
    capabilities: [],
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
    if (Object.values(asset).every(val => val !== "")) {
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset);
      setAsset({
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
        feeForService: false,
        protocol: "",
        restrictions: [],
        serviceFeeUrl: "",
        algorithm: "",
        operatingSystem: "",
        licence: "",
        purpose: "",
        version: "",
        subType: "",
        startDate: "",
        finishDate: "",
        trainingAvailable: false,
        contactOrganisation: "",
        contactEmail: "",
        contactPhone: "",
        capabilities: [],
        availableForUse: "",
        contactUrl: ""
      });
      setShowModal(false);
    } else {
      alert("Please fill in all fields");
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
              placeholder="Name"
              value={asset.name}
              onChange={handleChange}
              className="add-asset-input"
              name="name"
            />
            <input
              type="text"
              placeholder="Description"
              value={asset.description}
              onChange={handleChange}
              className="add-asset-input"
              name="description"
            />
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
            <input
              type="text"
              placeholder="Data Input"
              value={asset.dataInput}
              onChange={handleChange}
              className="add-asset-input"
              name="dataInput"
            />
            <input
              type="text"
              placeholder="Data Output"
              value={asset.dataOutput}
              onChange={handleChange}
              className="add-asset-input"
              name="dataOutput"
            />
            <input
              type="text"
              placeholder="Addresses"
              value={asset.addresses}
              onChange={handleChange}
              className="add-asset-input"
              name="addresses"
            />
            <input
              type="url"
              placeholder="URL"
              value={asset.url}
              onChange={handleChange}
              className="add-asset-input"
              name="url"
            />
            <input
              type="text"
              placeholder="Developed By"
              value={asset.developedBy}
              onChange={handleChange}
              className="add-asset-input"
              name="developedBy"
            />
            <input
              type="text"
              placeholder="Inventory Number"
              value={asset.inventoryNumber}
              onChange={handleChange}
              className="add-asset-input"
              name="inventoryNumber"
            />
            <input
              type="text"
              placeholder="Manufacturers"
              value={asset.manufacturers}
              onChange={handleChange}
              className="add-asset-input"
              name="manufacturers"
            />
            <input
              type="text"
              placeholder="Model Number"
              value={asset.modelNumber}
              onChange={handleChange}
              className="add-asset-input"
              name="modelNumber"
            />
            <label>
              <input
                type="checkbox"
                checked={asset.feeForService}
                onChange={(e) =>
                  setAsset({ ...asset, feeForService: e.target.checked })
                }
              />
              Fee for Service
            </label>
            <input
              type="text"
              placeholder="Protocol"
              value={asset.protocol}
              onChange={handleChange}
              className="add-asset-input"
              name="protocol"
            />
            <input
              type="text"
              placeholder="Service Fee URL"
              value={asset.serviceFeeUrl}
              onChange={handleChange}
              className="add-asset-input"
              name="serviceFeeUrl"
            />
            <input
              type="text"
              placeholder="Algorithm"
              value={asset.algorithm}
              onChange={handleChange}
              className="add-asset-input"
              name="algorithm"
            />
            <input
              type="text"
              placeholder="Operating System"
              value={asset.operatingSystem}
              onChange={handleChange}
              className="add-asset-input"
              name="operatingSystem"
            />
            <input
              type="text"
              placeholder="Licence"
              value={asset.licence}
              onChange={handleChange}
              className="add-asset-input"
              name="licence"
            />
            <input
              type="text"
              placeholder="Purpose"
              value={asset.purpose}
              onChange={handleChange}
              className="add-asset-input"
              name="purpose"
            />
            <input
              type="text"
              placeholder="Version"
              value={asset.version}
              onChange={handleChange}
              className="add-asset-input"
              name="version"
            />
            <input
              type="text"
              placeholder="Sub Type"
              value={asset.subType}
              onChange={handleChange}
              className="add-asset-input"
              name="subType"
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
            <label>
              <input
                type="checkbox"
                checked={asset.trainingAvailable}
                onChange={(e) =>
                  setAsset({ ...asset, trainingAvailable: e.target.checked })
                }
              />
              Training Available
            </label>
            <input
              type="text"
              placeholder="Contact Organisation"
              value={asset.contactOrganisation}
              onChange={handleChange}
              className="add-asset-input"
              name="contactOrganisation"
            />
            <input
              type="text"
              placeholder="Contact Email"
              value={asset.contactEmail}
              onChange={handleChange}
              className="add-asset-input"
              name="contactEmail"
            />
            <input
              type="text"
              placeholder="Contact Phone"
              value={asset.contactPhone}
              onChange={handleChange}
              className="add-asset-input"
              name="contactPhone"
            />
            <input
              type="text"
              placeholder="Capabilities"
              value={asset.capabilities}
              onChange={handleChange}
              className="add-asset-input"
              name="capabilities"
            />
            <select
              value={asset.availableForUse}
              onChange={handleChange}
              className="add-asset-input"
              name="availableForUse"
            >
              <option value="">Choose availability</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
            <input
              type="url"
              placeholder="Contact URL"
              value={asset.contactUrl}
              onChange={handleChange}
              className="add-asset-input"
              name="contactUrl"
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
              {/* Display asset details here */}
              {/* Example: */}
              {/* {item.name} - {item.description} */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AddAsset;