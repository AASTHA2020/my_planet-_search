import React from 'react';

const PlanetRow = ({ planet }) => {
  return (
    <div>
      <h3>{planet.name}</h3>
      <p>{planet.description}</p>
    </div>
  );
};

export default PlanetRow;
