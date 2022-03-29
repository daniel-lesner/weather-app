const axios = require('axios');
const URI = process.env.WEATHER_APP_URI;
const API_KEY = process.env.WEATHER_APP_API_KEY;

const getCitiesArrayFromOW = async (userSearchTerm) => {
  try {
    const resp = await axios.get(
      `${URI}/geo/1.0/direct?q=${userSearchTerm}&limit=5&appid=${API_KEY}`
    );

    resp.data.forEach((item, index) => (item.id = index + 1));
    return resp.data;
  } catch (err) {
    console.error(err);
  }
};

const getCityWeatherFromOW = async (cityLatitude, cityLongitude) => {
  try {
    const resp = await axios.get(
      `${URI}/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&units=metric&appid=${API_KEY}`
    );

    return resp.data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getCitiesArrayFromOW, getCityWeatherFromOW };
