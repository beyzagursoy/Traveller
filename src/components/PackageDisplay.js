import React from 'react';

const PackageDisplay = ({ selectedPackage }) => {
  return (
    <div>
      <h2>Önerilen Yerler:</h2>
      <ul>
        {selectedPackage.map((item, index) => (
          <li key={index}>
            {item.name} - {item.duration} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageDisplay;