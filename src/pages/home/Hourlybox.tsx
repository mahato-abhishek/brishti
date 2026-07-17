import { Droplet } from "lucide-react";
import { wmoCode } from "../../assets/wmo";
import { useWeather } from "../../context/WeatherContext";
import { formatAMPM } from "../../services/foramtAMPM";

function Content({
  time,
  wmo,
  probability,
}: {
  time: number | string | undefined;
  wmo: number | undefined;
  probability: number | undefined;
}) {
  const icon = wmoCode.map((val) => {
    if (val.code.some((v) => v == wmo)) {
      return val.dayIcon;
    }
    return;
  });

  return (
    <div className="h-full w-24 rounded-xl bg-white dark:bg-gray-950 flex flex-col   items-center justify-center p-2">
      <p className="font-bold text-blue-400 text-sm">
        {time ?? "-"}
        {}
      </p>
      <div className="w-full h-full">{icon}</div>
      <p className="font-semibold flex items-center justify-center gap-1">
        {" "}
        <Droplet size={14} className=" fill-gray-800" />
        {probability ?? "-"} %
      </p>
    </div>
  );
}

const Hourlybox = () => {
  const { weather } = useWeather();
  const arr: {
    time: number | string | undefined;
    wmo: number | undefined;
    probability: number | undefined;
  }[] = [];

  for (let i = 0; i < 24; i++) {
    arr.push({
      time: formatAMPM(weather?.hourly.time[i] ?? ""),
      wmo: weather?.hourly.weather_code[i],
      probability: weather?.hourly.precipitation_probability[i],
    });
  }

  return (
    <div className="h-fit w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-4 flex flex-col gap-2">
      <p className="text-blue-400 font-semibold"> Hourly</p>
      <div className="w-full overflow-scroll h-fit ">
        <div className="h-fit w-fit flex gap-2 overflow-scroll ">
          {arr.map((val, index) => (
            <Content
              key={index}
              time={val.time}
              wmo={val.wmo}
              probability={val.probability}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hourlybox;
