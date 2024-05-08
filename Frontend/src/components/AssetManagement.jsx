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
		  setAssets(data)
		  setFilteredAssets(data); // Optionally, update filteredAssets state as well
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

  const handleEditAsset = (asset) => {
	const editedAssetCopy = {
	  ...asset,
	  assetName: asset.name,
	  location: asset["additional-name"],
	  quantity: asset["coded-in"],
	};
	setEditedAsset(editedAssetCopy);
	setShowEditModal(true);
  };

  const handleSaveEdit = () => {
	const updatedAsset = {
		name: editedAsset.assetName,
		"additional-name": editedAsset.location,
		"coded-in": editedAsset.quantity
		// Add any other properties required by the server
	  };
	fetch(`http://localhost:85/Assets/equipments/${editedAsset._id}`, {
	  method: "PUT",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(updatedAsset),
	})
	  .then((response) => {
		if (response.ok) {
		  // Update the assets and filteredAssets state with the edited asset
		  const updatedAssets = assets.map((asset) =>
			asset._id === editedAsset._id ? editedAsset : asset
		  );
		  setAssets(updatedAssets);
		  setFilteredAssets(updatedAssets);
		  setShowEditModal(false);
		  window.alert("Asset successfully updated");
		  window.location.reload();
		} else {
		  console.error("Failed to update asset");
		}
	  })
	  .catch((error) => {
		console.error("Error updating asset:", error);
		window.alert("Failed to update asset");
	  }
		);
  };

  const handleDeleteAsset = (id) => {
	console.log("delete",id)
    fetch(`http://localhost:85/Assets/equipments/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
		console.log("response", response.status)
        const updatedAssets = assets.filter((asset) => asset.id !== id);
      	setAssets(updatedAssets);
      	setFilteredAssets(updatedAssets);
		window.alert("Asset successfully deleted");
		window.location.reload();
	})
      .catch((error) => {
		console.error("Error deleting asset:", error)
		window.alert("Failed to delete asset");
	  }
		);
	 
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
									<td>{asset.name}</td>
									<td>{asset['additional-name']}</td>
									<td>{asset['coded-in']}</td>
									<td>
										<div className="asset-actions">
											<button
												id="editbutton"
												onClick={() => handleEditAsset(asset)}
											>
												Edit
											</button>
											<DeleteAsset onDelete={() => handleDeleteAsset(asset._id)} />
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
