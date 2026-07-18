import { Search, Navigation } from "lucide-react";
import { useEffect, useState } from "react";
import SearchSuggestion from "./SearchSuggestion";
import { useWeather } from "../../context/WeatherContext";
import reverseGeo from "../../services/reverseGeocoding";

const SearchBar = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [query, setInput] = useState<string>("");
  const { setDisplayLocation, displayLocation, userLocation, setUserLocation } =
    useWeather();

  function handleUser() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    if (!userLocation) return;
    const timeout = setTimeout(async () => {
      const city = await reverseGeo(userLocation);
      setDisplayLocation(
        `${city.address.city}, ${city.address.state}, ${city.address.country}`,
      );
    }, 200);

    console.log(displayLocation);
    return () => clearTimeout(timeout);
  }, [userLocation]);

  return (
    <div
      className={`${isActive ? "dark:bg-gray-800 bg-gray-100" : ""}dark:bg-gray-900 rounded-full dark:text-white dark:border-gray-700 text-black relative  h-fit drop-shadow-xs bg-gray-200 border-gray-300 w-fit sm:w-100`}
    >
      <div className={` p-2 flex items-center justify-center gap-4 w-full `}>
        <Search strokeWidth="1px" />
        <input
          type="text"
          value={query}
          placeholder="Search your location"
          className="w-full focus:outline-0 dark:text-white text-gray-950 text-sm"
          onFocus={() => setActive(true)}
          onBlur={() =>
            setTimeout(() => {
              setActive(false);
            }, 200)
          }
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {isActive && (
        <ul className="absolute border z-50 dark:border-gray-700 border-gray-300 h-10 w-full h-fit max-h-84 overflow-scroll dark:bg-slate-800 bg-gray-100 rounded-xl mt-2">
          <button
            onClick={() => handleUser()}
            className="hover:text-blue-500 px-4 py-2 cursor-pointer flex gap-2 items-center justify-left hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg m-1 w-98/100"
          >
            <Navigation size="16" />
            Use Current Location
          </button>
          <SearchSuggestion input={query} />
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
