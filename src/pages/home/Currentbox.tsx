import { Wind, Droplet, MapPin } from "lucide-react";
import { useWeather } from "../../context/WeatherContext";
import { wmoCode } from "../../assets/wmo";

const Currentbox = () => {
  const { weather, selectedCity, displayLocation } = useWeather();
  const icon = wmoCode?.map((val) => {
    if (val.code?.some((v) => v == weather?.current.weather_code)) {
      return weather?.current.is_day ? val.dayIcon : val.nightIcon;
    }
    return;
  });

  return (
    <div className="rounded-xl h-fit bg-white dark:bg-gray-950">
      <div className="grid grid-cols-3">
        <div className="flex col-span-2  flex-col gap-2 p-2 sm:p-5">
          <p>
            <span className="px-2 py-1 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 font-semibold  text-xs">
              CURRENT WEATHER
            </span>
          </p>
          <p className="font-bold text-xs text-blue-500 sm:text-sm flex gap-1 items-center">
            <MapPin size={14} className=" stroke-blue-500" />
            {displayLocation
              ? `${displayLocation}`
              : `${selectedCity?.name}, ${selectedCity?.admin1}, ${selectedCity?.country}`}
          </p>
          <p className="p-2 sm:p-5 text-5xl sm:text-6xl lg:text-7xl font-bold">
            {weather?.current.temperature_2m}°
            <span className="text-4xl font-semibold text-blue-400">C</span>
          </p>
          <p className="font-semibold text-sm pl-2">
            {weather?.daily.temperature_2m_max[0]}℃/
            {weather?.daily.temperature_2m_min[0]}℃
          </p>
          <div className=" p-2">
            <p className="flex gap-2 text-sm font-semibold">
              <Wind size="16" />
              {weather?.current.wind_speed_10m} km/hr
              <span className="flex">
                <Droplet size="16" className="dark:fill-white fill-black" />
                {weather?.current.precipitation} mm
              </span>
            </p>
            <p className="flex"></p>
          </div>
        </div>
        <div className=" flex items-center flex-col sm:justify-between justify-center">
          <div className="h-28 w-28 sm:w-45 sm:h-45 md:h-50 md:w-50">
            {icon}
          </div>
          <div className="flex  flex-col p-5 ">
            <p className="font-bold sm:text-xl">
              {wmoCode.map((arr) => {
                if (
                  arr.code.some(
                    (codes) => codes == weather?.current.weather_code,
                  )
                )
                  return arr.description;
              })}
            </p>
            <p className="text-xs  sm:text-sm font-semibold">
              Feels
              {" " + weather?.current.apparent_temperature}℃
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentbox;
