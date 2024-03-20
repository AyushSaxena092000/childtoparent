import React, { useState } from "react";
import Callback from "./callback";
import "./App.css";

//Parent

export default function App() {
  const [UIcolor, setUIColor] = useState("");

  // our callback function

  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <div
        className="App_color_container"
        style={{ backgroundColor: UIcolor }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}
