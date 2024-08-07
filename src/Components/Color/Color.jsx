import { useState } from "react";
import "./Color.css";

// Task No. 4 EDIT existing color Themes

export default function Color({ color, onDelete, onUdpdateColor }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRole, setUpdatedRole] = useState(color.role);
  const [updatedHex, setUpdatedHex] = useState(color.hex);
  const [updatedContrastText, setUpdatedContrastText] = useState(
    color.contrastText
  );

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete(color.id);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    onUdpdateColor(color.id, updatedRole, updatedHex, updatedContrastText);
    setIsEditing(false);
  };

  const handleCancelEditClick = () => {
    setIsEditing(false);
  };

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}>
      {isEditing ? (
        <form className="color-form" onSubmit={handleUpdateClick}>
          <label htmlFor={`role-${color.id}`}>
            Role
            <br />
            <input
              type="text"
              id={`role-${color.id}`}
              value={updatedRole}
              onChange={(e) => setUpdatedRole(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={`hex-${color.id}`}>
            Background Hex-Code
            <br />
            <input
              type="text"
              id={`hex-${color.id}`}
              value={updatedHex}
              onChange={(e) => setUpdatedHex(e.target.value)}
            />
            <input
              type="color"
              value={updatedHex}
              onChange={(e) => setUpdatedHex(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={`contrastText-${color.id}`}>
            Contast Hex Code
            <br />
            <input
              type="text"
              id={`contrastText-${color.id}`}
              value={updatedContrastText}
              onChange={(e) => setUpdatedContrastText(e.target.value)}
            />
            <input
              type="color"
              value={updatedContrastText}
              onChange={(e) => setUpdatedContrastText(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Update Color</button>
          <button type="button" onClick={handleCancelEditClick}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <div className="button-container">
            {showConfirmation ? (
              <>
                <p className="color-card-highlight">
                  Really delete this color theme?
                </p>
                <button className="confirmation-button" onClick={confirmDelete}>
                  DELETE
                </button>
                <button className="cancel-button" onClick={cancelDelete}>
                  CANCEL
                </button>
              </>
            ) : (
              <>
                <button className="delete-button" onClick={handleDeleteClick}>
                  DELETE
                </button>
                <button className="edit-button" onClick={handleEditClick}>
                  EDIT
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Dieses war der alte Code, in dem eine neue class edit-form geschaffen wurden
// return (
//   <div
//     className="color-card"
//     style={{ backgroundColor: color.hex, color: color.contrastText }}>
//     {isEditing ? (
//       <div className="edit-form">
//         <input
//           type="text"
//           value={updatedRole}
//           onChange={(e) => setUpdatedRole(e.target.value)}
//           placeholder="Role"
//           className="input-field"
//         />
//         <input
//           type="color"
//           value={updatedHex}
//           onChange={(e) => setUpdatedHex(e.target.value)}
//           placeholder="Hex"
//           className="input-field"
//         />
//         <input
//           type="color"
//           value={updatedContrastText}
//           onChange={(e) => setUpdatedContrasText(e.target.value)}
//           placeholder="Contrast Text"
//           className=""
//         />
//         <button onClick={handleUpdateClick}>Update Color</button>
//         <button onClick={handleCancelEditClick}>Cancel</button>
//       </div>
//     ) : (
//       <>
//         <h3 className="color.card-headline">{color.hex}</h3>
//         <h4>{color.role}</h4>
//         <p>contrast: {color.contrastText}</p>
//         <div className="button-container">
//           {showConfirmation ? (
//             <>
//               <p className="color-card-highlight">
//                 Really delete this color theme?
//               </p>
//               <button className="confirmation-button" onClick={confirmDelete}>
//                 DELETE
//               </button>
//               <button className="cancel-button" onClick={cancelDelete}>
//                 CANCEL
//               </button>
//             </>
//           ) : (
//             <>
//               <button className="delete-button" onClick={handleDeleteClick}>
//                 DELETE
//               </button>
//               <button className="edit-button" onClick={handleEditClick}>
//                 EDIT
//               </button>
//             </>
//           )}
//         </div>
//       </>
//     )}
//   </div>
// );
// }
