import React from 'react';

const PackageSelector = ({ packages, onPackageChange }) => {
  return (
    <div>
      <label>Select Package:</label>
      <select onChange={(e) => onPackageChange(e.target.value)}>
        <option value="">Seçiniz</option>
        {Object.keys(packages).map((pkg) => (
          <option key={pkg} value={pkg}>
            {pkg.charAt(0).toUpperCase() + pkg.slice(1)} Package
          </option>
        ))}
      </select>
    </div>
  );
};

export default PackageSelector;