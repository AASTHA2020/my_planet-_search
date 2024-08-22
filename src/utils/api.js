import axios from 'axios';

export const fetchPlanets = async (searchText, filters) => {
  try {
    const queryParams = new URLSearchParams();
    if (searchText) queryParams.append('search', searchText);
    Object.keys(filters).forEach((key) => {
      if (filters[key].length) {
        filters[key].forEach((filter) => {
          queryParams.append(key, filter);
        });
      }
    });

    const response = await axios.get(
      `https://example.com/api/planets?${queryParams.toString()}`
    );
    return response;
  } catch (error) {
    console.error('Error fetching planets:', error);
    throw error;
  }
};
