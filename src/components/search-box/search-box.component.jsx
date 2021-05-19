import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ onSearchChange }) => (
  <input
    type="search"
    className="search"
    onChange={onSearchChange}
  />
);
