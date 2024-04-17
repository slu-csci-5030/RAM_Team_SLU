import React, { useState } from "react";
import AddAsset from "./AddAsset";
import DeleteAsset from "./DeleteAsset";
import EditAsset from "./EditAsset";
import "../assets/Styles/AssetManagement.css";
import UniversalSearch from "./UniversalSearch";
import "../assets/Styles/popup.css";

function AssetManagement() {
  const [assets, setAssets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedAsset, setEditedAsset] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleAddAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
  };

  const handleEditAsset = (index) => {
    setEditIndex(index);
    setEditedAsset(assets[index]);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    const updatedAssets = [...assets];
    updatedAssets[editIndex] = editedAsset;
    setAssets(updatedAssets);
    setEditIndex(null);
    setEditedAsset({});
    setShowEditModal(false);
  };

  const handleDeleteAsset = (index) => {
    const updatedAssets = assets.filter((_, i) => i !== index);
    setAssets(updatedAssets);
  };

  const handleAssetClick = (index) => {
    setSelectedAsset(assets[index]);
  };

  const handleClosePopup = () => {
    setSelectedAsset(null);
  };

  return (
    <>
      <UniversalSearch />
      <AddAsset onAdd={handleAddAsset} />
      <div className="asset-table-container">
        <table className="asset-table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Asset Name</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={index} onClick={() => handleAssetClick(index)}>
                <td>{index + 1}</td>
                <td>{asset.assetName}</td>
                <td>{asset.quantity}</td>
                <td>{asset.location}</td>
                <td>
                  <div className="asset-actions">
                    <button
                      id="editbutton"
                      onClick={() => handleEditAsset(index)}
                    >
                      Edit
                    </button>
                    <DeleteAsset onDelete={() => handleDeleteAsset(index)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedAsset && (
          <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup">
              <span className="close" onClick={handleClosePopup}>
                &times;
              </span>
              <h2>Asset Details</h2>
              <p>Serial Number: {assets.indexOf(selectedAsset) + 1}</p>
              <p>Description: {selectedAsset.description}</p>
            </div>
          </div>
        )}
      </div>
      {showEditModal && (
        <EditAsset
          asset={editedAsset}
          onEdit={setEditedAsset}
          onSave={handleSaveEdit}
        />
      )}
    </>
  );
}

export default AssetManagement;
