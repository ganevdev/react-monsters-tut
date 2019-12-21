import React from 'react';

import './search-box.css';

const SearchBox = ({ onSearchChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="search monsters"
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
