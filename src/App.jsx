// Import der neu erstellten Dateien

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
// import { initialColors } from "./lib/colors";
// import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    console.log("New Color submittet:", newColor);
    setColors([{ ...newColor, id: uuidv4() }, ...colors]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
      {/* 
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })} */}
    </>
  );
}

export default App;
