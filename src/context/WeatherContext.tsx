import {
  useContext,
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { type City } from "../types/city";
import { type WeatherData } from "../types/weather";
import getWeather from "../services/weatherApi";

type WeatherContextType = {
  selectedCity: City | null;

  weather: WeatherData | null;

  loading: boolean;

  error: string | null;

  setSelectedCity: (city: City) => void;
};
const defaultcity: City = {
  id: 1275004,
  name: "Kolkata",
  admin1: "West Bengal",
  country: "India",
  latitude: 22.56263,
  longitude: 88.36304,
};
export const WeatherContext = createContext<WeatherContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function WeatherProvider({ children }: Props) {
  const [selectedCity, setSelectedCity] = useState<City | null>(defaultcity);

  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedCity) return;

    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        const data = await getWeather(
          selectedCity!.latitude,
          selectedCity!.longitude,
        );

        setWeather(data);
        console.log(data);
      } catch {
        setError("Unable to fetch weather.");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [selectedCity]);

  return (
    <WeatherContext.Provider
      value={{
        selectedCity,

        weather,

        loading,

        error,

        setSelectedCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export function useWeather() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error("useWeather must be used within WeatherProvider");
  }

  return context;
}
