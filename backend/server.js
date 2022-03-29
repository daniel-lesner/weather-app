const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { getCitiesArray, getCityWeather } = require('./controllers.js');

const PORT = process.env.WEATHER_APP_PORT;

const app = express();
app.use(cors());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/api/cities/:searchTerm', getCitiesArray);
app.get('/api/weather/:cityLatitude&:cityLongitude', getCityWeather);
