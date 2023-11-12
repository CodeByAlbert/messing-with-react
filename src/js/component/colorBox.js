import React, { useState } from "react";

function ColorBox() {
  const [boxColor, setBoxColor] = useState("white");

  const changeColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    return setBoxColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      id="colorBox"
      className="d-flex flex-column justify-content-between"
      style={{
        height: "300px",
        width: "45%",
        margin: "0 auto",
        backgroundColor: boxColor,
        position: "relative",
        border: "2px solid black", // Adjust the border style here
      }}
    >
      <div
        className="text-end mt-3 mx-3"
        style={{
          width: "45%",
          position: "absolute",
          top: 0,
          right: 0,
          padding: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white
          borderRadius: "5px", // Optional, for rounded corners
        }}
      >
        <p>CSS for BG Color "background-color: {boxColor};"</p>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flex: 1 }}
      >
        <button className="btn btn-primary" onClick={changeColor}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ColorBox;
