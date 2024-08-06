import {
  WeatherResponse,
  WeatherErrorResponse,
  WeatherAPIResponse,
} from "../interfaces/weather";

const getWeather = async (city: string): Promise<WeatherResponse> => {
  const apiUrl = process.env.WEATHER_API_URL;
  const apiKey = process.env.WEATHER_API_KEY;

  const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);

  if (!response.ok) {
    const errorData: { cod: string; message: string } = await response.json();
    throw new WeatherErrorResponse(errorData.message, response.status);
  }

  const data: WeatherAPIResponse = await response.json();

  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    weather: data.weather[0].description,
  };
};

export { getWeather };
