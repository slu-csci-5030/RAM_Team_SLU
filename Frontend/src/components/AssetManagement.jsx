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
	fetch("http://localhost:85/Assets/equipments/", { method: "GET" })
	  .then((response) => response.json())
	  .then((data) => {
		console.log(data);
		const assets = data.map(asset => ({
			assetName: asset.name,
			location: asset['additional-name'],
			quantity: asset['coded-in'],
		  }));
		  setFilteredAssets(assets); // Optionally, update filteredAssets state as well
	  })
	  .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddAsset = (newAsset) => {
	// Update the local state with the new asset
	setAssets([...assets, newAsset]);
	localStorage.setItem("assets", JSON.stringify([...assets, newAsset]));

	// Fetch the updated list of assets from the server
	fetch("http://localhost:85/Assets/equipments/", { method: "GET" })
		.then((response) => response.json())
		.then((data) => {
		const updatedAssets = data.map(asset => ({
			assetName: asset.name,
			location: asset.location,
			quantity: asset.quantity,
			assetId: asset._id,
		}));
		setAssets(updatedAssets); // Update the assets state with the fetched data
		setFilteredAssets(updatedAssets); // Optionally, update filteredAssets state as well
		})
		.catch((error) => console.error("Error fetching data:", error));
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
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
    setShowEditModal(false);
  };

  const handleDeleteAsset = (index) => {
    const updatedAssets = assets.filter((_, i) => i !== index);
    setAssets(updatedAssets);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
  };

  const handleSearch = (searchText) => {
	const filteredAssets = assets.filter(asset =>
	  asset.assetName.toLowerCase().includes(searchText.toLowerCase())
	);
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
											<DeleteAsset onDelete={() => handleDeleteAsset(index)} />
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
