import React from 'react';

const HemisphereDisplay = ({ latitude }) => {
  const hemishere =
    latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
  return <div>Hey You're in {hemishere}</div>;
};

export default HemisphereDisplay;
