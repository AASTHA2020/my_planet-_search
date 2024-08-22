import React from 'react';

export default function PlanetList({ planets }) {
  return (
    <div>
      {planets.length > 0 ? (
        planets.map(planet => (
          <div key={planet.id}>
            <h3>{planet.title}</h3>
            <p>{planet.description}</p>
          </div>
        ))
      ) : (
        <p>No planets found.</p>
      )}
    </div>
  );
}
