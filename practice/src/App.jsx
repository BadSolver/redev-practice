import React from "react";
import "./App.css";
import { List } from "./components/List/List";

function App() {
  const data = [
    { name: "Alex", age: 20, isMan: true, id: 1 },
    { name: "Alin", age: 20, isMan: false, id: 2 },
    { name: "Den", age: 22, isMan: true, id: 3 },
    { name: "Flex", age: 11, isMan: true, id: 4 },
    { name: "Pavel", age: 25, isMan: true, id: 5 },
  ];

  return (
    <div className="App">
      <h1>
        <ul>
          {data.map((data) => {
            return <List data={data} />;
          })}
        </ul>
      </h1>
    </div>
  );
}

export default App;
