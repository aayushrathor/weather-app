export interface Main {
  temp: number;
  humidity: number;
}

export interface Wind {
  speed: number;
}

export interface Weather {
  description: string;
}

export interface WeatherAPIResponse {
  main: Main;
  wind: Wind;
  weather: Weather[];
}

export interface WeatherResponse {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weather: string;
}

export class WeatherErrorResponse extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
