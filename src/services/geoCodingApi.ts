import { type City } from "../types/city";
const BASE_API = "https://geocoding-api.open-meteo.com/v1/search";

export default async function searchCities(query: string): Promise<City[]> {
  if (!query.trim()) return [];
  try {
    const res = await fetch(
      `${BASE_API}?name=${query}&count=10&language=en&format=json`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch cities");
    }
    const data = await res.json();
    return data.results ?? [];
  } catch (error: any) {
    throw new Error("An error occured" + error);
  }
}
