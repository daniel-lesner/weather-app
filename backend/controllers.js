const { getCitiesArrayFromOW, getCityWeatherFromOW } = require('./api.js');

const getCitiesArray = async (req, res) => {
  const intermediarry = await getCitiesArrayFromOW(req.params.searchTerm);

  res.status(200).json(intermediarry);
};

const getCityWeather = async (req, res) => {
  const { cityLatitude, cityLongitude } = req.params;
  const intermediarry = await getCityWeatherFromOW(cityLatitude, cityLongitude);

  res.status(200).json(intermediarry);
};

module.exports = { getCitiesArray, getCityWeather };
