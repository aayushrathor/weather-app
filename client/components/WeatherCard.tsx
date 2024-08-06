"use client";

import React, { useState } from "react";

interface WeatherData {
  weather: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.WEATHER_URL}/${city}`);
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        setWeatherData(null);
        return;
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data");
      setWeatherData(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="flex justify-center mb-4">
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter city name"
          className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-2 text-sm text-gray-700 border border-gray-400 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {weatherData && (
        <div className="weather-card bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
          <h2 className="text-lg font-bold mb-2">
            Weather in {weatherData.weather}
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            Temperature: {weatherData.temperature}K
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Humidity: {weatherData.humidity}%
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Wind Speed: {weatherData.windSpeed}m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
