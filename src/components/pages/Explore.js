import React, { useState } from 'react';
import packages from '../packages'; // Assuming this is your data source
import '../Explore.css'; // Ensure this path matches your project structure

const CitySelector = ({ cities, onCityChange }) => (
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

const TimeSelector = ({ onTimeChange }) => (
  <div>
    <label>How much time you have? (hours):</label>
    <input type="number" min="1" max="24" onChange={(e) => onTimeChange(e.target.value)} />
  </div>
);

const PackageSelector = ({ packages, onPackageChange }) => (
  <div>
    <label>Select Package:</label>
    <select onChange={(e) => onPackageChange(e.target.value)}>
      <option value="">Select</option>
      {Object.keys(packages).map((pkg) => (
        <option key={pkg} value={pkg}>
          {pkg.charAt(0).toUpperCase() + pkg.slice(1)} Package
        </option>
      ))}
    </select>
  </div>
);

const PackageDisplay = ({ selectedPackage, remainingTime }) => (
  <div className="package-container">
    {selectedPackage.map((item, index) => (
      <div key={index} className="package-box">
        <h3 className="package-title">{item.name}</h3>
        <p className="package-duration">Duration: {item.duration} hours</p>
      </div>
    ))}
    <div>Remaining Time: {remainingTime} hours</div>
  </div>
);

const Explore = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [displayPackage, setDisplayPackage] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedPackage('');
    setDisplayPackage([]);
    setRemainingTime(0);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(parseInt(time, 10));
    setRemainingTime(parseInt(time, 10));
  };

  const handlePackageChange = (pkg) => {
    setSelectedPackage(pkg);
    if (selectedCity && packages[selectedCity][pkg]) {
      const packageItems = packages[selectedCity][pkg];
      const filteredPackage = [];
      let timeLeft = selectedTime;

      for (const item of packageItems) {
        if (item.duration <= timeLeft) {
          filteredPackage.push(item);
          timeLeft -= item.duration;
        }
      }

      setDisplayPackage(filteredPackage);
      setRemainingTime(timeLeft);
    }
  };

  return (
    <div className="containerr">
      <h1>Explore</h1>
      <CitySelector cities={Object.keys(packages)} onCityChange={handleCityChange} />
      <TimeSelector onTimeChange={handleTimeChange} />
      {selectedCity && (
        <PackageSelector packages={packages[selectedCity]} onPackageChange={handlePackageChange} />
      )}
      {displayPackage.length > 0 && (
        <PackageDisplay selectedPackage={displayPackage} remainingTime={remainingTime} />
      )}
    </div>
  );
};

export default Explore;
