import React, { useState } from "react";
import "./style.css";
import { Child, Sibling } from "../../components";

export const Parent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const randomNumber = () => {
    const random = Math.round(Math.random() * 10);
    if (random >= 1 && random <= 10) {
      setCount(random);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => setCount(0);
  return (
    <div>
      <h1>count: {count}</h1>
      <div className="btn-container">
        <button onClick={increaseCount} className="increase-btn">
          +
        </button>
        <button onClick={resetCount}>reset</button>
        <button onClick={randomNumber}>random number</button>
        <button onClick={decreaseCount} className="decrease-btn">
          -
        </button>
      </div>

      <div>
        <Child name={"Alex"} count={count} />
      </div>
      <Sibling />
    </div>
  );
};
