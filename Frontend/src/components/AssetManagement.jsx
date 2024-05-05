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
  const [showNextFields, setShowNextFields] = useState(false); // State to control visibility of next fields
  const [popupOpen, setPopupOpen] = useState(false); // State to control the popup

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

  const handleAssetClick = (index, e) => {
    // Check if the clicked element is the asset name
    if (e.target.tagName === 'TD' && e.target.cellIndex === 1) {
      setSelectedAsset(assets[index]);
      setPopupOpen(true); // Open the popup when the asset name is clicked
    }
  };

  const handleClosePopup = () => {
    setSelectedAsset(null);
    setPopupOpen(false); // Close the popup when clicked outside or on close button
  };

  const handleNextClick = () => {
    setShowNextFields(true);
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
              {/* Additional headers */}
              {showNextFields && (
                <>
                  <th>Subtype</th>
                  <th>Start Date</th>
                  <th>Finish Date</th>
                </>
              )}
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={index} onClick={(e) => handleAssetClick(index, e)}>
                <td>{index + 1}</td>
                <td>{asset.assetName}</td>
                <td>{asset.quantity}</td>
                <td>{asset.location}</td>
                {/* Additional cells */}
                {showNextFields && (
                  <>
                    <td>{asset.subtype}</td>
                    <td>{asset.startDate}</td>
                    <td>{asset.finishDate}</td>
                  </>
                )}
                <td>
                  <div className="asset-actions">
                    <button
                      id="editbutton"
                      onClick={() => handleEditAsset(index)}
                    >
                      Edit
                    </button>
                    <DeleteAsset onDelete={() => handleDeleteAsset(index)} />
                    <button className="nextButton" onClick={handleNextClick}>Next</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Popup */}
      {popupOpen && selectedAsset && (
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
      {/* Edit modal */}
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
