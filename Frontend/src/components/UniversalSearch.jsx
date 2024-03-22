import React, { useState } from 'react';
import '../assets/Styles/UniversalSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function UniversalSearch({ onSearch }) {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterDropdowns, setFilterDropdowns] = useState({
    'Asset Category': false,
    'Department': false,
    'Location': false,
    'Asset Manufacturer': false
  });

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setSelectedFilter(searchText);
    onSearch(searchText);
  };

  const filters = [
    { name: 'Asset Category', items: ['Item 1', 'Item 2', 'Item 3'] },
    { name: 'Department', items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
    { name: 'Location', items: ['Item 1', 'Item 2'] },
    { name: 'Asset Manufacturer', items: ['Asset Manufacturer', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] }
  ];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleFilterDropdown = (filter) => {
    const updatedDropdowns = { ...filterDropdowns };
    updatedDropdowns[filter] = !updatedDropdowns[filter];
    setFilterDropdowns(updatedDropdowns);
    setShowFilters(true); // Keep filters visible when a filter is clicked
  };

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    toggleFilterDropdown(filter);
  };

  return (
    <div>
      <div className="universal-search">
        <input type="text" placeholder="Search for assets..." value={selectedFilter} onChange={handleInputChange} />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className="centered-button">
        <button onClick={toggleFilters}>{showFilters ? 'Hide Filters' : 'Show Filters'}</button>
      </div>
      {showFilters && (
        <div className="filter-popup">
          <ul className="filter-list">
            {filters.map((filter, index) => (
              <li key={index} onClick={() => handleFilterSelection(filter.name)}>
                {filter.name}
                {filterDropdowns[filter.name] && (
                  <ul className="dropdown-menu">
                    {filter.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UniversalSearch;
// return (
//   <div>
//     <div className="universal-search">
//       <input type="text" placeholder="Search for assets..." value={selectedFilter} onChange={handleInputChange} />
//       <button><FontAwesomeIcon icon={faSearch} /></button>
//     </div>
//     <div className="centered-button">
//       <button onClick={toggleFilters}>{showFilters ? 'Hide Filters' : 'Show Filters'}</button>
//     </div>
//     {showFilters && (
//       <div className="filter-popup">
//         <ul className="filter-list">
//           {filters.map((filter, index) => (
//             <li key={index} onClick={() => handleFilterSelection(filter.name)}>
//               {filter.name}
//               {filterDropdowns[filter.name] && (
//                 <ul className="dropdown-menu">
//                   {filter.items.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//      {/* Empty div for spacing */}
//   </div>
// );}
// export default UniversalSearch;