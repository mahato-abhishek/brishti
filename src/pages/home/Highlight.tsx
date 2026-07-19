import { Wind, Droplet, WindArrowDown, CloudFog } from "lucide-react";
import Sunrise from "@meteocons/svg/fill/sunrise.svg";
import Moonrise from "@meteocons/svg/fill/moonrise.svg";
import { useWeather } from "../../context/WeatherContext";
import { formatAMPM } from "../../services/foramtAMPM";

type Prop = {
  icon: React.ReactNode;
  name: string;
  value: string | number;
};
const HightlightBox = (props: Prop) => {
  return (
    <div className="col-span-1  rounded-xl bg-white dark:bg-slate-950 flex flex-col align-center justify-center gap-2  p-4 md:p-0">
      <p className=" flex align-center justify-center text-xs sm:text-sm font-semibold gap-2">
        {props.icon} <span> {props.name}</span>
      </p>
      <p className="text-center font-bold text-sm sm:text-md">{props.value}</p>
    </div>
  );
};

type sunProp = {
  icon: string;
  name: string;
  value: string | number;
};
const Sun = (prop: sunProp) => {
  return (
    <div className="col-span-2 rounded-xl bg-white dark:bg-slate-950 flex align-center justify-between px-4 py-2 gap-2">
      <img src={prop.icon} alt="sunrise" height="80 " width="80" />
      <div className="flex  flex-col justify-center gap-2">
        <p>{prop.name}</p>
        <p className="font-semibold text-xl">{prop.value}</p>
      </div>
    </div>
  );
};
const Highlight = () => {
  const { weather } = useWeather();

  const riseTime = weather?.daily.sunrise[0];
  const setTime = weather?.daily.sunset[0];
  const sunRise = riseTime ? formatAMPM(riseTime) : "";
  const sunSet = setTime ? formatAMPM(setTime) : "";

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 rounded-xl h-full">
      <p className="p-4 font-bold text-blue-500">Today's Highlight</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2  p-2 h-fit">
        <div className="grid grid-cols-2 gap-2 ">
          <HightlightBox
            icon=<Wind size="16" />
            name="Wind Status"
            value={`${weather?.current.wind_speed_10m} km/hr`}
          />
          <HightlightBox
            icon=<Droplet size="16" />
            name="Humidity"
            value={`${weather?.current.relative_humidity_2m}%`}
          />
          <HightlightBox
            icon=<WindArrowDown size="16" />
            name="Pressure"
            value={`${weather?.current.pressure_msl} hPa`}
          />
          <HightlightBox
            icon=<CloudFog size="16" />
            name="Cloud Cover"
            value={`${weather?.current.cloud_cover}%`}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 ">
          <Sun icon={Sunrise} name="Sunrise" value={sunRise} />

          <Sun icon={Moonrise} name="Sunset" value={sunSet} />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
