import { getWeather } from "../services/weather.service";

const getWeatherController = async (req: any, res: any): Promise<void> => {
  const city = req.params.city;
  try {
    const weatherData = await getWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
};

export { getWeatherController };
