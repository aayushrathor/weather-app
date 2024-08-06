/** @type {import('next').NextConfig} */
const nextConfig = {
  standalone: true,
  env: {
    WEATHER_URL: "http://localhost:8000/weather",
  },
};

export default nextConfig;
