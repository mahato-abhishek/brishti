import { useEffect, useState } from "react";
import searchCities from "../../services/geoCodingApi";
import { type City } from "../../types/city";
import { useWeather } from "../../context/WeatherContext";

type InputProp = {
  input: string;
};

const SearchSuggestion = (props: InputProp) => {
  const { setSelectedCity, setDisplayLocation } = useWeather();

  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const city = await searchCities(props.input);
      setCities(city);
    }, 400);
    return () => clearTimeout(timeout);
  }, [props.input]);

  return (
    <>
      {cities &&
        cities.map((city) => (
          <li
            onClick={() => {
              setSelectedCity(city);
              setDisplayLocation("");
            }}
            key={city.id}
            className=" px-5 py-1 dark:hover:bg-slate-700 m-1 hover:bg-gray-200  cursor-pointer rounded"
          >
            <p className="">{city.name}</p>
            <p className="text-sm ">
              {city.admin1}, {city.country},
            </p>
          </li>
        ))}
    </>
  );
};
export default SearchSuggestion;
