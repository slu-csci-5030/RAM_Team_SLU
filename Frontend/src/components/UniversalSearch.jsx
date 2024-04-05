import React, { useState } from 'react';
import '../assets/Styles/UniversalSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

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
    let updatedSelectedItems;
    switch (filterName) {
      case 'Asset Category':
        updatedSelectedItems = selectedCategories.includes(item)
          ? selectedCategories.filter(category => category !== item)
          : [...selectedCategories, item];
        setSelectedCategories(updatedSelectedItems);
        break;
      case 'Department':
        updatedSelectedItems = selectedDepartments.includes(item)
          ? selectedDepartments.filter(department => department !== item)
          : [...selectedDepartments, item];
        setSelectedDepartments(updatedSelectedItems);
        break;
      case 'Location':
        updatedSelectedItems = selectedLocations.includes(item)
          ? selectedLocations.filter(location => location !== item)
          : [...selectedLocations, item];
        setSelectedLocations(updatedSelectedItems);
        break;
      case 'Asset Manufacturer':
        updatedSelectedItems = selectedManufacturers.includes(item)
          ? selectedManufacturers.filter(manufacturer => manufacturer !== item)
          : [...selectedManufacturers, item];
        setSelectedManufacturers(updatedSelectedItems);
        break;
      default:
        break;
    }

    // Update the search bar with selected filters
    setSelectedFilter(updatedSelectedItems.join(', '));
  };

  return (
    <div>
      <div className="universal-search">
        <input type="text" placeholder="Search for assets..." value={selectedFilter} onChange={handleInputChange} />
        <button onClick={handleSearchButtonClick}><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className="centered-button">
        <button onClick={toggleFilters}>Show Filters</button>
      </div>
      <Modal show={showFilters} onHide={toggleFilters} className="custom-modal">
        {/* <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <h2>FILTERS</h2> {/* Added heading */}
          <ul className="filter-list">
            {filters.map((filter, index) => (
              <li key={index}>
                <h4>{filter.name}</h4>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleFilters}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UniversalSearch;