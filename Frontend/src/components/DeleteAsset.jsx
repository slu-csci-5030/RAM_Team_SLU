import React from "react";

function DeleteAsset({ onDelete }) {
	const handleDelete = () => {
		onDelete();
	};

	return (
		<button onClick={handleDelete} className="delete-asset-button">
			Delete
		</button>
	);
}

export default DeleteAsset;
