import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlanetsThunk, setSearchText, setColorFilter, setShapeFilter, setSizeFilter } from '../redux/planetsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets.planets);
  const searchText = useSelector((state) => state.planets.searchText);
  const filters = useSelector((state) => state.planets.filters);

  const [localSearchText, setLocalSearchText] = useState(searchText);

  useEffect(() => {
    // Fetch planets on initial load
    dispatch(fetchPlanetsThunk({ searchText, filters }));
  }, [dispatch, searchText, filters]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchText(localSearchText));
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'color':
        dispatch(setColorFilter(value));
        break;
      case 'shape':
        dispatch(setShapeFilter(value));
        break;
      case 'size':
        dispatch(setSizeFilter(value));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Planet Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search planets..."
          value={localSearchText}
          onChange={(e) => setLocalSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <h3>Filters:</h3>
        <div>
          <label>Color:</label>
          <select onChange={(e) => handleFilterChange('color', [e.target.value])}>
            <option value="">All</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Brown">Brown</option>
            <option value="Grey">Grey</option>
          </select>
        </div>
        <div>
          <label>Shape:</label>
          <select onChange={(e) => handleFilterChange('shape', [e.target.value])}>
            <option value="">All</option>
            <option value="Round">Round</option>
          </select>
        </div>
        <div>
          <label>Size:</label>
          <select onChange={(e) => handleFilterChange('size', [e.target.value])}>
            <option value="">All</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </div>

      <h2>Search Results:</h2>
      <div>
        {planets.length > 0 ? (
          planets.map((planet) => (
            <div key={planet.id}>
              <h3>{planet.title}</h3>
              <p>{planet.description}</p>
              <p>Color: {planet.color}</p>
              <p>Shape: {planet.shape}</p>
              <p>Size: {planet.size}</p>
            </div>
          ))
        ) : (
          <p>No planets found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
