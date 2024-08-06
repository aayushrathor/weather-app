import { WeatherErrorResponse } from "../interfaces/weather";
import { getWeather } from "../services/weather.service";

const getWeatherController = async (req: any, res: any): Promise<void> => {
  const city = req.params.city;
  try {
    const weatherData = await getWeather(city);
    res.json(weatherData);
  } catch (error) {
    if (error instanceof WeatherErrorResponse) {
      res
        .status(error.status)
        .json({ cod: error.status, message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export { getWeatherController };
