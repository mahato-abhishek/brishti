import { type WeatherData } from "../types/weather";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export default async function getWeather(
  latitude: number,
  longitude: number,
): Promise<WeatherData> {
  const url =
    `${BASE_URL}?` +
    `latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day,precipitation,rain,weather_code,cloud_cover,pressure_msl` +
    `&hourly=temperature_2m,weather_code,precipitation_probability` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,sunrise,sunset` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  return response.json();
}
