import React from "react";
import ReactDOM from "react-dom/client";

const ColorPallete = () => {
  const colorList = [];
  for (let i = 0; i < 5; i++) {
    const characters = "1234567890ABCDEF";
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    colorList.push(color);
  }
  return colorList.map((color) => (
    <div
      style={{
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        padding: 'auto',
        margin: 10,
        color: "#fff",
        fontFamily: "Montserrat",
        fontWeight: "bold",
      }}
      key={color}
    >
      {color}
    </div>
  ));
};

const App = () => {
  return (
    <>
      <ColorPallete />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
