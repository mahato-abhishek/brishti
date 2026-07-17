import { useTheme } from "./context/ThemeContext";
import { RouterProvider } from "react-router";
import { router } from "./router/routes.tsx";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-fit ${theme == "dark" ? "dark dark:bg-slate-800 text-white" : "bg-gradient-to-b from-slate-200 to-mist-200  text-black"}`}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
