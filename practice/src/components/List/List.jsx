import React, { useState } from "react";

export const List = ({ data }) => {
  const [text, setText] = useState(data.name);
  const handleText = () => {
    setText(data.name + "!!!");
  };

  return (
    <>
      <li key={data.id}>
        {text} {data.age}
      </li>
      <button onClick={handleText}>!!!</button>
    </>
  );
};
