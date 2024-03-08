// DepartmentFilter.jsx

import React from 'react';
import '../assets/Styles/DepartmentFilter.css';

function DepartmentFilter() {
  return (
    <div className="department-filter">
      <select>
        <option value="">Select Department</option>
        {/* Add department options here */}
      </select>
    </div>
  );
}

export default DepartmentFilter;
