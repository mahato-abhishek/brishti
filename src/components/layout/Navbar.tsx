import { useTheme } from "../../context/ThemeContext";
import SearchBar from "../search/SearchBar";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed h-20 w-full flex items-center justify-center ">
      <div className="max-w-6xl w-95/100 mx-auto  flex items-center justify-between rounded-xl px-2  md:px-5 py-2 bg-white dark:bg-slate-950 ">
        <div>
          <h1 className="font-bold text-xl md:text-3xl px-3 lg:px-5">
            Brishti
          </h1>
        </div>
        <SearchBar />
        <div className="flex items-center justify-center">
          <button
            onClick={() => toggleTheme()}
            className=" px-3 sm:px-5 cursor-pointer"
          >
            {theme == "light" ? <Sun size="16" /> : <Moon size="16" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
