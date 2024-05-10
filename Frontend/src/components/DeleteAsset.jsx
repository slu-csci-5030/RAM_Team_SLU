import React from "react";

function DeleteAsset({ itemName, onDelete }) {
  const handleDelete = () => {
    onDelete();
    alert(Item has been deleted.);
  };

  return (
    <button onClick={handleDelete} className="delete-asset-button">
      Delete
    </button>
  );
}

export default DeleteAsset;
