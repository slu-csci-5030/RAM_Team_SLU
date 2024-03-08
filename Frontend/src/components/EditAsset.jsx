// // src/components/EditAsset.js
// import React from 'react';
// import '../assets/Styles/EditAsset.css';

// function EditAsset({ asset, onEdit }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onEdit({ ...asset, [name]: value });
//   };

//   return (
//     <>
//       <input
//         type="text"
//         name="assetName"
//         value={asset.assetName}
//         onChange={handleChange}
//         className="edit-asset-input"
//       />
//       <input
//         type="text"
//         name="location"
//         value={asset.location}
//         onChange={handleChange}
//         className="edit-asset-input"
//       />
//       <input
//         type="text"
//         name="quantity"
//         value={asset.quantity}
//         onChange={handleChange}
//         className="edit-asset-input"
//       />
//     </>
//   );
// }

// export default EditAsset;

// src/components/EditAsset.js
import React from 'react';
import '../assets/Styles/EditAsset.css';

function EditAsset({ asset, onEdit, onSave }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onEdit({ ...asset, [name]: value });
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <input
          type="text"
          name="assetName"
          value={asset.assetName}
          onChange={handleChange}
          className="edit-asset-input"
        />
        <input
          type="text"
          name="location"
          value={asset.location}
          onChange={handleChange}
          className="edit-asset-input"
        />
        <input
          type="text"
          name="quantity"
          value={asset.quantity}
          onChange={handleChange}
          className="edit-asset-input"
        />
        <button onClick={onSave} className="save-asset-button">Save</button>
      </div>
    </div>
  );
}

export default EditAsset;
