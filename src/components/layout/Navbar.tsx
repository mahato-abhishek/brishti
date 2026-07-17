import { Link, NavLink } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import SearchBar from "../search/SearchBar";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems: string[] = ["Current", "Hourly", "Daily"];
  return (
    <nav className="fixed h-20 w-full flex items-center justify-center">
      <div className="max-w-6xl w-95/100 m-auto  flex items-center justify-between rounded-xl  md:px-5 py-2 bg-white dark:bg-slate-950 ">
        <div>
          <h1 className="font-bold text-xl md:text-3xl px-3 lg:px-5">
            <Link to="/">Brishti</Link>
          </h1>
        </div>
        <SearchBar />
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex items-center justify-center gap-5">
            {navItems.map((item) => (
              <li
                key={item}
                className="text-gray-500 text-sm hover:text-black dark:hover:text-white "
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
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
