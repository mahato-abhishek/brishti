import { Area, AreaChart, Tooltip, XAxis } from "recharts";
import { useWeather } from "../../../context/WeatherContext";

const AreaChartContainer = ({ isAnimationActive = true }) => {
  const { weather } = useWeather();
  const data = [
    {
      name: "Morning",
      temp: weather?.hourly.temperature_2m[5],
    },
    {
      name: "Noon",
      temp: weather?.hourly.temperature_2m[11],
    },
    {
      name: "Evening",
      temp: weather?.hourly.temperature_2m[17],
    },
    {
      name: "Night",
      temp: weather?.hourly.temperature_2m[23],
    },
  ];

  function getIntroOfPage(label: string): string {
    if (label === "Morning") {
      return `${weather?.hourly.temperature_2m[5]} ℃`;
    }
    if (label === "Noon") {
      return `${weather?.hourly.temperature_2m[11]} ℃`;
    }
    if (label === "Evening") {
      return `${weather?.hourly.temperature_2m[17]} ℃`;
    }
    if (label === "Night") {
      return `${weather?.hourly.temperature_2m[23]}  ℃`;
    }

    return "";
  }

  function CustomTooltip({ payload, label, active }: any) {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip  px-4 py-2 rounded-xl dark:bg-gray-800 bg-white ">
          <p className="label m-0 font-semibold">{`${label}`}</p>
          <p className="intro m-0">{getIntroOfPage(label)}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <AreaChart
      className="w-full max-w-4xl h-50  max-h-200 aspect-ratio-auto p-2"
      responsive
      data={data}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#2d64a8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#446fa6" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <Tooltip content={CustomTooltip} active />
      <Area
        type="monotone"
        dataKey="temp"
        stroke="#175b8f"
        fillOpacity={1}
        fill="url(#colorUv)"
        isAnimationActive={isAnimationActive}
        animationBegin={300}
        animationDuration={1000}
        className="stroke-blue-500 "
      />
    </AreaChart>
  );
};

export default AreaChartContainer;
