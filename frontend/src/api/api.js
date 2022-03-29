import axios from 'axios';

export const getCitiesArray = async (userSearchTerm) => {
  try {
    const resp = await axios.get(
      `http://localhost:3000/api/cities/${userSearchTerm}`
    );

    return resp.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCityWeather = async (cityLatitude, cityLongitude) => {
  try {
    const resp = await axios.get(
      `http://localhost:3000/api/weather/${cityLatitude}&${cityLongitude}`
    );

    return resp.data;
  } catch (err) {
    console.error(err);
  }
};
