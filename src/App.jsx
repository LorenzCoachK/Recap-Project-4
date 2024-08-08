//  08. August: Task No. 5: Store Themes in users´ local storage

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [deletingColorId, setDeletingColorId] = useState(null); // Track, which color is being confirmed for deletion

  function handleAddColor(newColor) {
    // console.log("New Color submittet:", newColor);
    setColors([{ ...newColor, id: uuidv4() }, ...colors]); // add new color to the top of list by usind newColor first
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleUpdateColor(id, newRole, newHex, newContrastText) {
    setColors(
      colors.map((color) =>
        color.id === id
          ? {
              ...color,
              role: newRole,
              hex: newHex,
              contrastText: newContrastText,
            }
          : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length === 0 && (
        <p className="no-colors">
          No colors anymore 🙀 ... start by adding one!
        </p>
      )}
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onDelete={handleDeleteColor}
          onUdpdateColor={handleUpdateColor}
        />
      ))}
    </>
  );
}

export default App;
