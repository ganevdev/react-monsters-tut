import React from 'react';

import './search-box.css';

const SearchBox = ({ placeholder = 'search monsters', onSearchChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
