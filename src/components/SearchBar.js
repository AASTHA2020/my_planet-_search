import React from 'react';

export default function SearchBar({ value, onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder="Search planets..."
    />
  );
}
