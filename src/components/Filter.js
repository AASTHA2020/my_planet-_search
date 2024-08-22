import React from 'react';

export default function Filter({ type, options, selectedOptions, onFilterChange }) {
  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    const updatedOptions = isSelected
      ? selectedOptions.filter(o => o !== option)
      : [...selectedOptions, option];
    onFilterChange(type, updatedOptions);
  };

  return (
    <div>
      <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
      {options.map(option => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}
