import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching planets (you can modify it to match your API logic)
export const fetchPlanetsThunk = createAsyncThunk(
  'planets/fetchPlanets',
  async ({ searchText, filters }) => {
    // Your API request logic here, for example:
    // const response = await axios.get('/api/planets', { params: { searchText, ...filters } });
    // return response.data;

    // For now, let's return a more comprehensive dummy response:
    return [
      { id: 1, title: 'Mars', description: 'Red Planet', color: 'Red', shape: 'Round', size: 'Small' },
      { id: 2, title: 'Earth', description: 'Blue Planet', color: 'Blue', shape: 'Round', size: 'Medium' },
      { id: 3, title: 'Jupiter', description: 'Giant Planet', color: 'Brown', shape: 'Round', size: 'Large' },
      { id: 4, title: 'Venus', description: 'Hot Planet', color: 'Yellow', shape: 'Round', size: 'Small' },
      { id: 5, title: 'Saturn', description: 'Ringed Planet', color: 'Yellow', shape: 'Round', size: 'Large' },
      { id: 6, title: 'Mercury', description: 'Smallest Planet', color: 'Grey', shape: 'Round', size: 'Small' },
      { id: 7, title: 'Neptune', description: 'Farthest Planet', color: 'Blue', shape: 'Round', size: 'Large' },
      { id: 8, title: 'Uranus', description: 'Ice Giant', color: 'Blue', shape: 'Round', size: 'Large' },
      { id: 9, title: 'Pluto', description: 'Dwarf Planet', color: 'Brown', shape: 'Round', size: 'Small' },
      { id: 10, title: 'Kepler-22b', description: 'Exoplanet', color: 'Green', shape: 'Round', size: 'Medium' },
    ];
  }
);

const initialState = {
  planets: [],
  filters: {
    color: [],    // Initialize as an empty array
    shape: [],    // Initialize as an empty array
    size: []      // Initialize as an empty array
  },
  searchText: '',
  status: 'idle',
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setColorFilter: (state, action) => {
      state.filters.color = action.payload;
    },
    setShapeFilter: (state, action) => {
      state.filters.shape = action.payload;
    },
    setSizeFilter: (state, action) => {
      state.filters.size = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanetsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlanetsThunk.fulfilled, (state, action) => {
        state.planets = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPlanetsThunk.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearchText, setColorFilter, setShapeFilter, setSizeFilter } = planetsSlice.actions;

export default planetsSlice.reducer;
