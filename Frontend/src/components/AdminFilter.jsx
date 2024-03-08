// AdminFilter.jsx

import React from 'react';
import '../assets/Styles/AdminFilter.css';

function AdminFilter() {
  return (
    <div className="admin-filter">
      <input type="checkbox" id="adminFilter" name="adminFilter" />
      <label htmlFor="adminFilter">Admin</label>
    </div>
  );
}

export default AdminFilter;
