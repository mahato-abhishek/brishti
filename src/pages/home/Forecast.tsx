import { wmoCode } from "../../assets/wmo";
import { useWeather } from "../../context/WeatherContext";

function Content({
  day,
  temp,
  WMOcode,
}: {
  day: string;
  temp: number | undefined;
  WMOcode: number | undefined;
}) {
  const icon = wmoCode.map((val) => {
    if (val.code.some((v) => v == WMOcode)) {
      return val.dayIcon;
    }
  });
  return (
    <div className="flex flex-col items-center justify-evenly rounded-xl bg-white dark:bg-gray-950 w-24 py-4 justify-evenly ">
      <p className="font-semibold text-sm text-blue-400">{day}</p>
      <div className="h-full w-full p-2">{icon}</div>

      <p className="text-sm font-bold ">{temp + " ℃"}</p>
    </div>
  );
}

const Forecast = () => {
  const { weather } = useWeather();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const arr: { day: string; code?: number; temp?: number }[] = [];
  const today = new Date();

  for (let i = 1; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    arr.push({
      day: days[date.getDay()],
      code: weather?.daily.weather_code[i],
      temp: weather?.daily.apparent_temperature_max[i],
    });
  }

  return (
    <div className="flex flex-col h-full p-4 gap-4 bg-gray-100 rounded-xl dark:bg-gray-900 ">
      <p className=" p-2 font-semibold text-blue-400">Forecast</p>
      <div className="w-full  overflow-scroll">
        <div className="flex gap-2 w-fit ">
          {arr.map((val, idx) => (
            <Content
              key={idx}
              day={val.day}
              temp={val.temp}
              WMOcode={val.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
