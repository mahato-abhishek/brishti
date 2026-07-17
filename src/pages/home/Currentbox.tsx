import { Wind, Droplet, MapPin } from "lucide-react";
import { useWeather } from "../../context/WeatherContext";
import { wmoCode } from "../../assets/wmo";

const Currentbox = () => {
  const { weather, selectedCity } = useWeather();
  const icon = wmoCode.map((val) => {
    if (val.code.some((v) => v == weather?.current.weather_code)) {
      return weather?.current.is_day ? val.dayIcon : val.nightIcon;
    }
  });

  return (
    <div className="rounded-xl bg-white dark:bg-gray-950">
      <div className="grid grid-cols-3">
        <div className="flex col-span-2  flex-col gap-2 p-5">
          <p>
            <span className="px-2 py-1 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 font-bold  text-xs">
              CURRENT WEATHER
            </span>
          </p>
          <p className="text-bold text-blue-400 text-sm flex gap-1 items-center">
            <MapPin size={14} className=" stroke-blue-500" />
            {selectedCity?.name}, {selectedCity?.admin1},{" "}
            {selectedCity?.country}
          </p>
          <p className="p-5 text-5xl sm:text-6xl lg:text-7xl font-bold">
            {weather?.current.temperature_2m}°
            <span className="text-4xl font-semibold text-blue-400">C</span>
          </p>
          <p className="font-semibold">
            {weather?.daily.temperature_2m_max[0]}℃/
            {weather?.daily.temperature_2m_min[0]}℃
          </p>
          <div className="mt-2">
            <p className="flex gap-2 text-sm font-semibold">
              <Wind size="16" />
              {weather?.current.wind_speed_10m} km/hr
              <span className="flex">
                <Droplet size="16" className="dark:fill-white fill-black" />
                {weather?.current.precipitation}
              </span>
            </p>
            <p className="flex"></p>
          </div>
        </div>
        <div className=" flex items-center flex-col justify-between">
          <div className="h-40 w-40 md:h-50 md:w-50">{icon}</div>
          <div className="flex items-center justify-center flex-col p-5 ">
            <p className=" font-bold text-xl">Overcast</p>
            <p className="text-sm font-semibold">
              Feels like {weather?.current.apparent_temperature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentbox;
