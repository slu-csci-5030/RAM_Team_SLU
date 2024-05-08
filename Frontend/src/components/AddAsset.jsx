import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";
import axios from "axios"; // Import Axios

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
     assetName: "",
     location: "",
     quantity: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [assetsList, setAssetsList] = useState([]);
 
  const handleChange = (e) => {
     const { name, value } = e.target;
     setAsset({ ...asset, [name]: value });
  };

  const handleAdd = async () => {
     if (
       asset.assetName.trim() !== "" &&
       asset.location.trim() !== "" &&
       asset.quantity.trim() !== ""
     ) {
       try {
         const response = await axios.post('http://localhost:85/Assets/equipments', {
           Category: 'Database',
           name: asset.assetName,
           description: 'Asset description', 
           "additional-name": asset.location, 
           "coded-in": asset.quantity, 
           contacts: 'Person 1', 
         });
 
         console.log('New asset added:', response.data);
 
         // Update your state here if needed
         setAsset({ assetName: "", location: "", quantity: "" });
         setShowModal(false); // Close the modal after adding asset
       } catch (error) {
         console.error('There was a problem while adding asset:', error);
       }
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
