import { Area, AreaChart, Tooltip, XAxis } from "recharts";
import { useWeather } from "../../../context/WeatherContext";

// #region Sample data

// #endregion
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
  return (
    <AreaChart
      className="w-full max-w-4xl h-50  max-h-200 aspect-ratio-auto p-2"
      responsive
      data={data}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6ca18c" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#78a18b" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="temp"
        stroke="#343f3c"
        fillOpacity={1}
        fill="url(#colorUv)"
        isAnimationActive={isAnimationActive}
        animationBegin={200}
        animationDuration={1000}
        className="stroke-cyan-800"
      />
    </AreaChart>
  );
};

export default AreaChartContainer;
