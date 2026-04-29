import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  themeToggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  themeToggle: () => {},
});

export default ThemeContext;
