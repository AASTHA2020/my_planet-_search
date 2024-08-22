import { configureStore } from '@reduxjs/toolkit';
import planetsReducer from './planetsSlice';

const store = configureStore({
  reducer: {
    planets: planetsReducer,
  },
});

export default store;
