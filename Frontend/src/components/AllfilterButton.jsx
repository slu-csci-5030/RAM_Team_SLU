// import React from 'react';
// import "../assets/Styles/All-filter.css";
// const AllFiltersButton = ({ showAllFilters, toggleAllFilters }) => {
//   return (
//     <button  className ='filter-button-style'onClick={toggleAllFilters}>
//       {showAllFilters ? 'Hide Filters' : 'All Filters'}
//     </button>
//   );
// };

// export default AllFiltersButton;


// AllFilters.jsx
// AllFilters.jsx
import React, { useState } from 'react';
import "../assets/Styles/All-filter.css";

const AllFilters = ({ showAllFilters, toggleAllFilters, assets, onFilter }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [manufactureFilter, setManufactureFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [assetNameFilter, setAssetNameFilter] = useState('');

  const handleApplyFilter = () => {
    onFilter(categoryFilter, manufactureFilter, serviceFilter, locationFilter, assetNameFilter);
    toggleAllFilters(); // Close the popup after applying the filter
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleManufactureChange = (e) => {
    setManufactureFilter(e.target.value);
  };

  const handleServiceChange = (e) => {
    setServiceFilter(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleAssetNameChange = (e) => {
    setAssetNameFilter(e.target.value);
  };

  const categories = [...new Set(assets.map((asset) => asset.category))];
  const manufactures = [...new Set(assets.map((asset) => asset.manufacture))];
  const services = [...new Set(assets.map((asset) => asset.service))];

  return (
    <div className='ALLFILTER'>
      {showAllFilters && (
        <div className="all-filters-popup">
          <div className="popup-content">
            <span className="close-button" onClick={toggleAllFilters}>
              &times;
            </span>
            {/* All filter options */}
            <select value={categoryFilter} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select value={manufactureFilter} onChange={handleManufactureChange}>
              <option value="">Select Manufacture</option>
              {manufactures.map((manufacture) => (
                <option key={manufacture} value={manufacture}>
                  {manufacture}
                </option>
              ))}
            </select>
            <select value={serviceFilter} onChange={handleServiceChange}>
              <option value="">Select Service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter Location"
              value={locationFilter}
              onChange={handleLocationChange}
            />
            <input
              type="text"
              placeholder="Enter Asset Name"
              value={assetNameFilter}
              onChange={handleAssetNameChange}
            />
            <div className="show-results-container">
              <button className="apply-filter-btn" onClick={handleApplyFilter}>
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllFilters;

AllfilterButton.jsx