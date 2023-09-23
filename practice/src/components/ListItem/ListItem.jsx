import React, { useState } from "react";
import './style.css'

export const ListItem = ({ data }) => {
  const [text, setText] = useState(data.name);
  const handleText = () => {
    setText(data.name + "!!!");
  };

  return (
    <li className="listItem">
      <span>{text}</span>
      <button onClick={handleText} className="btn-item">!!!</button>
    </li>
  );
};
