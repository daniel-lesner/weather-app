const express = require('express');
const dotenv = require('dotenv').config();

const axios = require('axios');

const PORT = process.env.WEATHER_APP_PORT;
const URI = process.env.WEATHER_APP_URI;
const API_KEY = process.env.WEATHER_APP_API_KEY;

const app = express();

var cors = require('cors');
app.use(cors());

app.get('/api/cities/:searchTerm', async (req, res) => {
  const intermediarry = await getCitiesArray(req.params.searchTerm);

  res.status(200).json(intermediarry);
});

app.get('/api/weather/:cityLatitude&:cityLongitude', async (req, res) => {
  const { cityLatitude, cityLongitude } = req.params;
  const intermediarry = await getCityWeather(cityLatitude, cityLongitude);

  res.status(200).json(intermediarry);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const getCitiesArray = async (userSearchTerm) => {
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

const getCityWeather = async (cityLatitude, cityLongitude) => {
  try {
    const resp = await axios.get(
      `${URI}/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&units=metric&appid=${API_KEY}`
    );

    return resp.data;
  } catch (err) {
    console.error(err);
  }
};
