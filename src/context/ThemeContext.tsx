import { useContext, createContext, useState } from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProvederProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProvederProps) {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme:dark)") ? "dark" : "light",
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context == undefined) {
    throw new Error("useTheme must be set within theme Provider");
  }
  return context;
}
