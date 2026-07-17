import { Search, Navigation } from "lucide-react";
import { useState } from "react";
import SearchSuggestion from "./SearchSuggestion";
const SearchBar = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [query, setInput] = useState<string>("");

  return (
    <div
      className={`${isActive ? "dark:bg-gray-800 bg-gray-100" : ""}dark:bg-gray-900 rounded-full dark:text-white dark:border-gray-700 text-black relative  h-fit drop-shadow-xs bg-gray-200 border-gray-300 w-fit sm:w-100`}
    >
      <div className={` p-2 flex items-center justify-center gap-4 w-full `}>
        <Search strokeWidth="1px" />
        <input
          type="text"
          value={query}
          placeholder="Search your location"
          className="w-full focus:outline-0 dark:text-white text-gray-950 text-sm"
          onFocus={() => setActive(true)}
          onBlur={() =>
            setTimeout(() => {
              setActive(false);
            }, 200)
          }
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {isActive && (
        <ul className="absolute border z-50 dark:border-gray-700 border-gray-300 h-10 w-full h-fit max-h-84 overflow-scroll dark:bg-slate-800 bg-gray-100 rounded-xl mt-2">
          <p className="hover:text-blue-500 px-4 py-2 cursor-pointer flex gap-2 items-center justify-left hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg m-1">
            <Navigation size="16" />
            Use Current Location
          </p>
          <SearchSuggestion input={query} />
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
