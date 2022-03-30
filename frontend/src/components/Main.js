import React, { useEffect, useState } from 'react';
import Header from './Header';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import { getCityWeather } from '../api/api';

const Main = () => {
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setCityData(
        await getCityWeather(
          position.coords.latitude,
          position.coords.longitude
        )
      );
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchBar setCityData={setCityData} />
        <WeatherCard cityData={cityData} />
      </main>
    </React.Fragment>
  );
};

export default Main;
