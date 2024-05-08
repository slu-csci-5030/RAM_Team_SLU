// AssetManagement.jsx

import React, { useState, useEffect } from "react";
import AddAsset from "./AddAsset";
import "../assets/Styles/AssetManagement.css";

function AssetManagement() {
  const [assets, setAssets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [assetsPerPage] = useState(10);

  useEffect(() => {
    // Fetch assets from API
    // Update 'assets' state with fetched data
  }, []);

  // Calculate index of the last asset on current page
  const indexOfLastAsset = currentPage * assetsPerPage;
  // Calculate index of the first asset on current page
  const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
  // Get current assets to display on current page
  const currentAssets = assets.slice(indexOfFirstAsset, indexOfLastAsset);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Asset list rendering */}
      <ul className="asset-list">
        {currentAssets.map((asset) => (
          <li key={asset.id}>{asset.name}</li>
        ))}
      </ul>
      {/* Pagination */}
      <Pagination
        itemsPerPage={assetsPerPage}
        totalItems={assets.length}
        paginate={paginate}
      />
    </div>
  );
}

export default AssetManagement;

// Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
