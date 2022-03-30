const { getCitiesArrayFromOW, getCityWeatherFromOW } = require('./api.js');

const getCitiesArray = async (req, res) => {
  const intermediarryResponse = await getCitiesArrayFromOW(
    req.params.searchTerm
  );

  res.status(200).json(intermediarryResponse);
};

const getCityWeather = async (req, res) => {
  const { cityLatitude, cityLongitude } = req.params;
  const intermediarryResponse = await getCityWeatherFromOW(
    cityLatitude,
    cityLongitude
  );

  res.status(200).json(intermediarryResponse);
};

module.exports = { getCitiesArray, getCityWeather };
