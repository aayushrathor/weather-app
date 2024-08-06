const getWeather = async (city: string): Promise<any> => {
  const apiUrl = process.env.WEATHER_API_URL;
  const apiKey = process.env.WEATHER_API_KEY;
  const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
  const data = await response.json();
  // temperature, humidity, wind speed, weather description
  /*
   * {
"coord": {
"lon": 75.8333,
"lat": 22.7179
},
"weather": [
{
"id": 802,
"main": "Clouds",
"description": "scattered clouds",
"icon": "03d"
}
],
"base": "stations",
"main": {
"temp": 297.25,
"feels_like": 298.17,
"temp_min": 297.25,
"temp_max": 297.25,
"pressure": 1006,
"humidity": 94,
"sea_level": 1006,
"grnd_level": 946
},
"visibility": 6000,
"wind": {
"speed": 4.63,
"deg": 250
},
"clouds": {
"all": 40
},
"dt": 1722918167,
"sys": {
"type": 1,
"id": 9067,
"country": "IN",
"sunrise": 1722904201,
"sunset": 1722951305
},
"timezone": 19800,
"id": 1269743,
"name": "Indore",
"cod": 200
}*/
  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    weather: data.weather[0].description,
  };
};

export { getWeather };
