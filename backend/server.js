const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { getCitiesArray, getCityWeather } = require('./controllers.js');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/api/cities/:searchTerm', getCitiesArray);
app.get('/api/weather/:cityLatitude&:cityLongitude', getCityWeather);

app.listen(port, () => console.log(`Server started on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    console.log(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
