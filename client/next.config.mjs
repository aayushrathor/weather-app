/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    WEATHER_URL: "http://localhost:8000/weather",
  },
};

export default nextConfig;
