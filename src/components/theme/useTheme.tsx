import { useEffect } from "react";
import { useState } from "react";
import {
  ALL_THEME_KEY,
  CURRENT_THEME_KEY,
  getAllThemes,
  getLocalStorage,
  setLocalStorage,
} from "../../utils/localStorage";
import CustomTheme from "./Theme";

const useTheme = () => {
  const themes = getAllThemes();
  const [theme, setTheme] = useState<CustomTheme>(themes.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: CustomTheme) => {
    setLocalStorage(CURRENT_THEME_KEY, mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getLocalStorage(CURRENT_THEME_KEY);
    localTheme ? setTheme(localTheme) : setTheme(themes.light);

    setThemeLoaded(true);
  }, []);

  return {
    theme,
    setTheme,
    themeLoaded,
    setMode,
  };
};

export default useTheme;
