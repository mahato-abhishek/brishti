import { useTheme } from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/layout/Footer";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-fit w-full ${theme == "dark" ? "dark dark:bg-slate-800 text-white" : "bg-gradient-to-b from-slate-200 to-mist-200  text-black"}`}
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
