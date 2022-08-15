import { createTheme } from "@nextui-org/react";
import { useState } from "react";

const lightTheme = createTheme({ type: "light" });
const darkTheme = createTheme({ type: "dark" });

export const useTheme = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  const isDark = theme === "dark";
  const currentTheme = isDark ? darkTheme : lightTheme;

  const toggleColorScheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return [{ themeStr: theme, theme: currentTheme }, { toggleColorScheme }];
};
