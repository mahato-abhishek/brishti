import AreaChartContainer from "./chart/AreaChart";
import Currentbox from "./Currentbox";
import Forecast from "./Forecast";
import Highlight from "./Highlight";
import Hourlybox from "./Hourlybox";

const Home = () => {
  return (
    <div className="pt-20 h-fit  w-95/100 max-w-6xl m-auto space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2  h-fit w-full gap-2">
        <Currentbox />
        <Highlight />
      </div>
      <div className=" h-fit grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        <div className=" col-span-1 h-fit rounded-xl dark:bg-gray-950 bg-white p">
          <p className="font-semibold p-4 text-blue-400">
            How is the temperature today
          </p>
          <AreaChartContainer />
        </div>
        <Forecast />
      </div>
      <Hourlybox />
    </div>
  );
};

export default Home;
