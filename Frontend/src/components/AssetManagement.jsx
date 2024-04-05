
import React, { useState, useEffect } from "react";
import AddAsset from "./AddAsset";
import DeleteAsset from "./DeleteAsset";
import EditAsset from "./EditAsset";
import UniversalSearch from "./UniversalSearch";
import "../assets/Styles/AssetManagement.css";

function AssetManagement() {
  const [assets, setAssets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedAsset, setEditedAsset] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [filteredAssets, setFilteredAssets] = useState([]);

  useEffect(() => {
    const storedAssets = localStorage.getItem("assets");
    if (storedAssets) {
      setAssets(JSON.parse(storedAssets));
      setFilteredAssets(JSON.parse(storedAssets));
    }
  }, []);

  const handleAddAsset = (newAsset) => {
    const updatedAssets = [...assets, newAsset];
    setAssets(updatedAssets);
    setFilteredAssets(updatedAssets);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
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
    setFilteredAssets(updatedAssets);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
    setShowEditModal(false);
  };

  const handleDeleteAsset = (index) => {
    const updatedAssets = assets.filter((_, i) => i !== index);
    setAssets(updatedAssets);
    setFilteredAssets(updatedAssets);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
  };

  const handleSearch = (searchText) => {
    const searchTerms = searchText.toLowerCase().split(',').map(term => term.trim());

    const filteredAssets = assets.filter((asset) => {
      const assetNameLower = asset.assetName.toLowerCase();
      const locationLower = asset.location.toLowerCase();

      return searchTerms.some(term =>
        assetNameLower.includes(term) || locationLower.includes(term)
      );
    });

    setFilteredAssets(filteredAssets);
  };

  return (
    <div>
      <UniversalSearch onSearch={handleSearch} />
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
            {filteredAssets.map((asset, index) => (
              <tr key={index}>
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
                    <DeleteAsset
                      onDelete={() => handleDeleteAsset(index)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showEditModal && (
          <EditAsset
            asset={editedAsset}
            onEdit={setEditedAsset}
            onSave={handleSaveEdit}
          />
        )}
      </div>
    </div>
  );
}

export default AssetManagement;
