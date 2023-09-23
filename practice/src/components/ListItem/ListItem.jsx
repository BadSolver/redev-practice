import React, { useState } from "react";
import "./style.css";
import { useTheme } from "context/ThemeContext";

export const ListItem = ({ data }) => {
  const [text, setText] = useState(data.name);
  const { isDarkMode } = useTheme();
  const handleText = () => {
    setText(data.name + "!!!");
  };

  return (
    <li className="listItem">
      <span className={isDarkMode ? "theme-light" : "theme-dark"}>{text}</span>
      <button onClick={handleText} className="btn-item">
        !!!
      </button>
    </li>
  );
};
