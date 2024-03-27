import React, { useState } from 'react';
import "../assets/Styles/Filter.css";
import AllFilters from './AllFiltersButton';

const Filter = ({ assets, onFilter }) => {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const toggleAllFilters = () => {
    setShowAllFilters(!showAllFilters);
  };

  return (
    <div>
      <div className="filters-container">
        {/* Basic filter options */}
        <button className="filter-button-style" onClick={toggleAllFilters}>
          {showAllFilters ? 'Hide Filters' : 'All Filters'}
        </button>
        <AllFilters
          showAllFilters={showAllFilters}
          toggleAllFilters={toggleAllFilters}
          assets={assets}
          onFilter={onFilter}
        />
      </div>
    </div>
  );
};

export default Filter;