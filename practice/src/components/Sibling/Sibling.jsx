import React, { useEffect, useState } from "react";
import "./style.css";

export const Sibling = () => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (text) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text]);

  const handleHideMagick = () => {
    if (text) {
      setText("");
    }
  };

  const handleClickForMagick = () => {
    if (!text) {
      setText("REDEV");
    }
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClickForMagick}>click me for magick</button>
      <button onClick={handleHideMagick} disabled={isDisabled}>
        hide the magick
      </button>
    </div>
  );
};
