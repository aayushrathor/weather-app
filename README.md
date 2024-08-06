# Weather App

> weather application using openweathermap api
> provides information about temperature, humidity, wind speed and weather description

# How to Setup

1. clone repository

```bash
git clone https://github.com/aayushrathor/weather-app
```

2. Install frontend/client app dependencies

```bash
cd client
pnpm install
```

3. Install Backend/server dependencies

```bash
cd server
pnpm install
```

4. run manually

```bash
cd client
pnpm run build && pnpm run dev
cd ..
cd server
pnpm run start
```

4. run using docker

```bash
docker compose up
```

# Environment Variables

```bash
NODE_PORT=8000
WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
WEATHER_API_KEY=<API_KEY>
```
