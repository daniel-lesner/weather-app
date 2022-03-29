import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

const Main = () => {
  const [cityData, setCityData] = useState({});

  return (
    <main>
      <SearchBar setCityData={setCityData} />
      <WeatherCard cityData={cityData} />
    </main>
  );
};

export default Main;
