// Von Lorenz erstellter Code unter zu Hilfenahme der Hints aus dem Handout und KI (ChatGPT)
// Task N0. 2: User can add ColorForm

import ColorInput from "../../ColorInput/ColorInput";
import { useState } from "react";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  const [role, setRole] = useState(initialData.role);
  const [hex, setHex] = useState(initialData.hex);
  const [contrastText, setContrastText] = useState(initialData.contrastText);

  function handleSubmit(event) {
    event.preventDefault();
    const data = { role, hex, contrastText };
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput
          id="hex"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          id="contrastText"
          value={contrastText}
          onChange={(e) => setContrastText(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
