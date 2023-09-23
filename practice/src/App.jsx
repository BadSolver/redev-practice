import React, { useRef, useState } from "react";
import "./App.css";
import { useTheme } from "context/ThemeContext";
import { ListItem, ToggleTheme } from "components";

function App() {
  const dataWithName = [
    { name: "Alex", id: 1 },
    { name: "Alin", id: 2 },
    { name: "Den", id: 3 },
    { name: "Flex", id: 4 },
    { name: "Pavel", id: 5 },
  ];
  const [data, setData] = useState(dataWithName);
  const { isDarkMode } = useTheme();

  const refInput = useRef(null);

  const validRef = () => {
    refInput.current.focus();
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && refInput.current.value.trim() !== "") {
      const newData = [
        ...data,
        { name: refInput.current.value, id: data.length + 1 },
      ];
      setData(newData);
      refInput.current.value = "";
    }
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <input
        type="text"
        ref={refInput}
        placeholder="Добавьте Имя"
        onKeyDown={handleEnterKey}
      />
      <button onClick={validRef}>Нажми для фокуса на поле ввода</button>
      <h1>
        <ul className="list">
          {data.map((data) => {
            return <ListItem data={data} key={data.id} />;
          })}
        </ul>
      </h1>
      <ToggleTheme />
    </div>
  );
}

export default App;
