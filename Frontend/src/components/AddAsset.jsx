import React, { useState } from "react";
import "../assets/Styles/AddAsset.css";

function AddAsset({ onAdd }) {
  const [asset, setAsset] = useState({
    assetName: "",
    location: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAsset({ ...asset, [name]: value });
  };

  const handleAdd = () => {
    // Validate form fields
    const errors = {};
    if (!asset.assetName.trim()) {
      errors.assetName = "Asset name is required";
    }
    if (!asset.location.trim()) {
      errors.location = "Location is required";
    }
    if (!asset.quantity.trim()) {
      errors.quantity = "Quantity is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with adding asset
    onAdd(asset);
    setAsset({ assetName: "", location: "", quantity: "" });
    setErrors({});
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Asset Name"
        value={asset.assetName}
        onChange={handleChange}
        name="assetName"
      />
      {errors.assetName && <div className="error">{errors.assetName}</div>}
      <input
        type="text"
        placeholder="Location"
        value={asset.location}
        onChange={handleChange}
        name="location"
      />
      {errors.location && <div className="error">{errors.location}</div>}
      <input
        type="text"
        placeholder="Quantity"
        value={asset.quantity}
        onChange={handleChange}
        name="quantity"
      />
      {errors.quantity && <div className="error">{errors.quantity}</div>}
      <button onClick={handleAdd}>Add Asset</button>
    </div>
  );
}

export default AddAsset;
