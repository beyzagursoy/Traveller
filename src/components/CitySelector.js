import React from 'react';

const CitySelector = ({ cities, onCityChange }) => {
  return (
    <div>
      <label>Select City:</label>
      <select onChange={(e) => onCityChange(e.target.value)}>
        <option value="">Select</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;