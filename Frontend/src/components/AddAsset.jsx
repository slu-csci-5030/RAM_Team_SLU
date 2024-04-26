import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
    category: "",
    purchaseDate: "",
    status: "Active", //given a default value
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
      asset.category.trim() !== "" &&
      asset.purchaseDate.trim() !== ""
    ) {
      const newAssetsList = [...assetsList, asset];
      setAssetsList(newAssetsList);
      onAdd(asset);
      setAsset({
        assetName: "",
        location: "",
        quantity: "",
        category: "",
        purchaseDate: "",
        status: "Active", //here we are Resetting status to default after adding asset
      });
      setShowModal(false);
    } else {
      alert("Please fill in all mandatory fields.");
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
              placeholder="Category"
              value={asset.category}
              onChange={handleChange}
              className="add-asset-input"
              name="category"
            />
            <input
              type="date"
              placeholder="Purchase Date"
              value={asset.purchaseDate}
              onChange={handleChange}
              className="add-asset-input"
              name="purchaseDate"
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