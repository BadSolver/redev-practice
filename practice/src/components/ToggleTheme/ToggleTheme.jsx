import { useTheme } from "context/ThemeContext";
import React from "react";
import "./style.css";

export const ToggleTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      переключить тему ({isDarkMode ? "Темная  " : "Светлая "})
    </button>
  );
};
