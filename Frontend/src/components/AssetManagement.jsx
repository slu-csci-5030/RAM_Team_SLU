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
				

import React, { useState } from "react";

function AddAsset({ onAdd }) {
	const [assetName, setAssetName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const [contactEmail, setContactEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!assetName || !quantity || !location || !description || !contactEmail) return;
		const newAsset = {
			assetName,
			quantity,
			location,
			description,
			contactEmail,
		};
		onAdd(newAsset);
		setAssetName("");
		setQuantity("");
		setLocation("");
		setDescription("");
		setContactEmail("");
	};

	return (
		<div className="add-asset">
			<h2>Add New Asset</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="assetName">Asset Name:</label>
				<input
					type="text"
					id="assetName"
					value={assetName}
					onChange={(e) => setAssetName(e.target.value)}
				/>
				<label htmlFor="quantity">Quantity:</label>
				<input
					type="number"
					id="quantity"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<label htmlFor="location">Location:</label>
				<input
					type="text"
					id="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<label htmlFor="contactEmail">Contact Email:</label>
				<input
					type="email"
					id="contactEmail"
					value={contactEmail}
					onChange={(e) => setContactEmail(e.target.value)}
				/>
				<button type="submit">Add Asset</button>
			</form>
		</div>
	);
}

export default AddAsset;
#adding drop down
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
	const locations = ["Location A", "Location B", "Location C"]; // Add your locations here
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
				}
				}
				}
