import React, { useState } from "react";

// child
const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value); // Call parent function with new color
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
    />
  );
};

export default Callback;
