import React, { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete(color.id);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}>
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
          <button className="delete-button" onClick={handleDeleteClick}>
            DELETE
          </button>
        )}
      </div>
    </div>
  );
}
