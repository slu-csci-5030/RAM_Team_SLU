import React, { useState } from 'react';
import '../assets/Styles/UniversalSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function UniversalSearch({ onSearch }) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);

  const handleInputChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // Construct search query based on selected checkboxes
    let searchQuery = '';
    const selectedItems = [
      ...selectedCategories,
      ...selectedDepartments,
      ...selectedLocations,
      ...selectedManufacturers,
    ];
    searchQuery = selectedItems.join(', '); // Join selected items with commas
    setSelectedFilter(searchQuery.trim());

    // Trigger table sorting with the constructed search query
    onSearch(searchQuery);
  };

  const filters = [
    { name: 'Asset Category', items: ['Publications', 'Grants', 'Professional Activities', 'Teaching Activities', 'Projects', 'Equipment', 'Annotations'] },
    { name: 'Department', items: ['Computer Science', 'Chemistry', 'Physics', 'Biology'] },
    { name: 'Location', items: ['ISE', 'Library', 'BSC', 'Ritter Hall'] },
    { name: 'Asset Manufacturer', items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] }
  ];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCheckboxChange = (filterName, item) => {
    switch (filterName) {
      case 'Asset Category':
        setSelectedCategories(prevCategories =>
          prevCategories.includes(item)
            ? prevCategories.filter(category => category !== item)
            : [...prevCategories, item]
        );
        break;
      case 'Department':
        setSelectedDepartments(prevDepartments =>
          prevDepartments.includes(item)
            ? prevDepartments.filter(department => department !== item)
            : [...prevDepartments, item]
        );
        break;
      case 'Location':
        setSelectedLocations(prevLocations =>
          prevLocations.includes(item)
            ? prevLocations.filter(location => location !== item)
            : [...prevLocations, item]
        );
        break;
      case 'Asset Manufacturer':
        setSelectedManufacturers(prevManufacturers =>
          prevManufacturers.includes(item)
            ? prevManufacturers.filter(manufacturer => manufacturer !== item)
            : [...prevManufacturers, item]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="universal-search">
        <input type="text" placeholder="Search for assets..." value={selectedFilter} onChange={handleInputChange} />
        <button onClick={handleSearchButtonClick}><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className="centered-button">
        <button onClick={toggleFilters}>{showFilters ? 'Hide Filters' : 'Show Filters'}</button>
      </div>
      {showFilters && (
        <div className="filter-popup">
          <ul className="filter-list">
            {filters.map((filter, index) => (
              <li key={index}>
                {filter.name}
                <ul className="checkbox-list">
                  {filter.items.map((item, idx) => (
                    <li key={idx}>
                      <label>
                        <input
                          type="checkbox"
                          value={item}
                          checked={
                            filter.name === 'Asset Category' ? selectedCategories.includes(item) :
                            filter.name === 'Department' ? selectedDepartments.includes(item) :
                            filter.name === 'Location' ? selectedLocations.includes(item) :
                            filter.name === 'Asset Manufacturer' ? selectedManufacturers.includes(item) : false
                          }
                          onChange={() => handleCheckboxChange(filter.name, item)}
                        />
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UniversalSearch;
