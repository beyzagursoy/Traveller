import React from 'react';

const TimeSelector = ({ onTimeChange }) => {
  return (
    <div>
      <label>How much time you have? (hours):</label>
      <input type="number" min="1" max="24" onChange={(e) => onTimeChange(e.target.value)} />
    </div>
  );
};

export default TimeSelector;