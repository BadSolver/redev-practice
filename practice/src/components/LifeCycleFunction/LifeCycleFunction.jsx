import React, { useCallback, useEffect, useState } from "react";

export const LifeCycleFunction = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log(count);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = "https://jsonplaceholder.typicode.com/todos/?_limit=10";
        const data = await fetch(url);
        const dataResponse = await data.json();
        setTodos(todos.concat(dataResponse));
      } catch (error) {
        throw new Error(error.message);
      }
    }
    fetchData();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
      <h1>{count % 2 === 0 ? count : count - 1}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};
