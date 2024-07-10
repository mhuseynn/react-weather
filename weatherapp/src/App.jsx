import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState(null);


  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const getWeather = async () => {
    const apiKey = '0335cee652d8a33621d52b78ef950226';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div className='a'>
      <header className="App-header">
        <h1>Hava Məlumatları</h1>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={getWeather}>Set</button>
        {weather && (
          <div>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>Temperatur: {weather.main.temp}°C</p>
            <p>Hava: {weather.weather[0].description}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
