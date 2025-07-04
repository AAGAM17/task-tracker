import React, { useState, useEffect } from 'react';
import '../styles/Search.css';

const Search = ({ onSearchChange, searchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '');

  useEffect(() => {
    setLocalSearchTerm(searchTerm || '');
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    onSearchChange(value);
  };

  const clearSearch = () => {
    setLocalSearchTerm('');
    onSearchChange('');
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={localSearchTerm}
          onChange={handleSearchChange}
          placeholder="Search tasks by title or description..."
          className="search-input"
        />
        {localSearchTerm && (
          <button
            onClick={clearSearch}
            className="clear-search-button"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      {localSearchTerm && (
        <div className="search-info">
          Searching for: <strong>"{localSearchTerm}"</strong>
        </div>
      )}
    </div>
  );
};

export default Search;
