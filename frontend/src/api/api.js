import axios from 'axios';
const URI = process.env.REACT_APP_SERVER_URI || 'http://localhost:3000';

export const getCitiesArray = async (userSearchTerm) => {
  try {
    const resp = await axios.get(`${URI}/api/cities/${userSearchTerm}`);

    return resp.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCityWeather = async (cityLatitude, cityLongitude) => {
  try {
    const resp = await axios.get(
      `${URI}/api/weather/${cityLatitude}&${cityLongitude}`
    );

    return resp.data;
  } catch (err) {
    console.error(err);
  }
};
