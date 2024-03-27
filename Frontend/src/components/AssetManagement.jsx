import React, { useState, useEffect } from "react";
import AddAsset from "./AddAsset";
import DeleteAsset from "./DeleteAsset";
import EditAsset from "./EditAsset";
import "../assets/Styles/AssetManagement.css";
import UniversalSearch from "./UniversalSearch";
import Filter from './Filter';

function AssetManagement() {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedAsset, setEditedAsset] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const storedAssets = localStorage.getItem("assets");
    if (storedAssets) {
      setAssets(JSON.parse(storedAssets));
      setFilteredAssets(JSON.parse(storedAssets));
    }
  }, []);

  const handleAddAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
    setFilteredAssets([...filteredAssets, newAsset]);
    localStorage.setItem("assets", JSON.stringify([...assets, newAsset]));
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
    setEditIndex(null);
    setEditedAsset({});
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
    setShowEditModal(false);
  };

  const handleDeleteAsset = (index) => {
    const updatedAssets = assets.filter((_, i) => i !== index);
    setAssets(updatedAssets);
    setFilteredAssets(updatedAssets);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
  };

  const handleFilter = (categoryFilter, manufactureFilter, serviceFilter, locationFilter, assetNameFilter) => {
    const filtered = assets.filter((asset) => {
      const categoryMatch = categoryFilter === '' || asset.category === categoryFilter;
      const manufactureMatch = manufactureFilter === '' || asset.manufacture === manufactureFilter;
      const serviceMatch = serviceFilter === '' || asset.service === serviceFilter;
      const assetNameMatch = assetNameFilter === '' || asset.assetName.toLowerCase().includes(assetNameFilter.toLowerCase());
      const locationMatch = locationFilter === '' || asset.location.toLowerCase().includes(locationFilter.toLowerCase());
      return categoryMatch && manufactureMatch && serviceMatch && assetNameMatch && locationMatch;
    });
    setFilteredAssets(filtered);
  };

  return (
    <div>
      <UniversalSearch />
      <Filter assets={assets} onFilter={handleFilter} />
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
                    <button id="editbutton" onClick={() => handleEditAsset(index)}>
                      Edit
                    </button>
                    <DeleteAsset onDelete={() => handleDeleteAsset(index)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showEditModal && (
        <EditAsset asset={editedAsset} onEdit={setEditedAsset} onSave={handleSaveEdit} />
      )}
    </div>
  );
}

export default AssetManagement;