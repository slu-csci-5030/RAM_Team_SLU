// UniversalSearch.jsx

import React from 'react';
import '../assets/Styles/UniversalSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import DepartmentFilter from './DepartmentFilter';
import AdminFilter from './AdminFilter';
import AllFilters from './AllFilters';

function UniversalSearch() {
  return (
    <div className="universal-search">
      <input type="text" placeholder="Search for assets..." />
      <button><FontAwesomeIcon icon={faSearch} /></button>


      
    </div>
  );
}

export default UniversalSearch;
