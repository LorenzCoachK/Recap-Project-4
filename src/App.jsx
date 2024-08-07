// Import der neu erstellten Dateien

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

// dieser Code stand oberhalb des return und hat leider nicht die Buttons in die color-card gebaut, sondern darunter. Zudem hat der Button nicht deleted.
// return (
//   <>
//     <h1>Theme Creator</h1>
//     <ColorForm onSubmitColor={handleAddColor} />
//     {colors.length === 0 && (
//       <p className="no-colors">No colors anymore ... start by adding one!</p>
//     )}
//     {colors.map((color) => (
//       <div
//         key={color.id}
//         className="color-card"
//         style={{ background: color.hex }}>
//         <div className="color-info">
//           <Color color={color} />
//           <div className="button-container">
//             {deletingColorId === color.id ? (
//               <>
//                 <p className="color-card-highlight">
//                   Really delete this color theme?
//                 </p>
//                 <button
//                   className="confirmation-button"
//                   onClick={confirmDeleteColor}>
//                   DELETE
//                 </button>
//                 <button className="cancel-button" onClick={cancelDeleteColor}>
//                   CANCEL
//                 </button>
//               </>
//             ) : (
//               <button
//                 className="delete-button"
//                 onClick={() => handleDeleteColor(color.id)}>
//                 DELETE
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     ))}
//   </>
// );
// }
