import React, { useState, useEffect } from "react";
import AddAsset from "./AddAsset";
import DeleteAsset from "./DeleteAsset";
import EditAsset from "./EditAsset";
// import SaveAsset from './SaveAsset';
import "../assets/Styles/AssetManagement.css";
import UniversalSearch from "./UniversalSearch";

function AssetManagement() {
	const [assets, setAssets] = useState([]);
	const [editIndex, setEditIndex] = useState(null);
	const [editedAsset, setEditedAsset] = useState({});
	const [showEditModal, setShowEditModal] = useState(false);
	useEffect(() => {
		const storedAssets = localStorage.getItem("assets");
		if (storedAssets) {
			setAssets(JSON.parse(storedAssets));
		}
	}, []);

	const handleAddAsset = (newAsset) => {
		setAssets([...assets, newAsset]);
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

	return (
		<body>
			<div>
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
		</body>
	);
}

export default AssetManagement;
