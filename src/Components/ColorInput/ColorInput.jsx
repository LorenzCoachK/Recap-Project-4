// Von Lorenz erstellter Code unter zu Hilfenahme der Hints aus dem Handout und KI (ChatGPT)
// Task N0. 2: User can add ColorForm

import { useState, useEffect } from "react";

export default function ColorInput({ id, value, onChange }) {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  function handleInputValue(event) {
    const { value } = event.target;
    if (/^#[0-9A-Fa-f]{6}$/.test(value) || value === "") {
      // const newValue = Event.target.value;
      // if (newValue.match(/^#([0-9A-F]{3}){1,2}$/i) || newValue === "") {
      //   setInputValue(event.target.value);
      setInputValue(value);
      onChange(event);
    }
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
