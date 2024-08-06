import request from "supertest";
import { app } from "../../index";

describe("GET /weather/:city (without mocking)", () => {
  it("should return weather data for a valid city", async () => {
    const city = "indore";
    const response = await request(app).get(`/weather/${city}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("temperature");
    expect(response.body).toHaveProperty("humidity");
    expect(response.body).toHaveProperty("windSpeed");
    expect(response.body).toHaveProperty("weather");
  }, 10000);

  it("should return an error for an invalid city", async () => {
    const city = "InvalidCityName";
    const response = await request(app).get(`/weather/${city}`);

    expect(response.status).toBe(404); // Or another appropriate error code
    expect(response.body).toHaveProperty("cod");
    expect(response.body).toHaveProperty("message");
  });
});
