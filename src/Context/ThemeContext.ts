import { Dispatch, createContext } from "react";

type ThemeContextType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});
export default ThemeContext;
