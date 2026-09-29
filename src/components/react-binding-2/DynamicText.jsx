//7.

import { useState } from "react";

export default function DynamicText() {
  const radioStyle = "flex gap-2 items-center bg-[beige] p-3 rounded-xl";

  const [textSize, setTextSize] = useState("medium");

  function handleChange(event) {
    setTextSize(event.target.id);
  }

  const sizeClasses = {
    small: "text-sm",
    medium: "text-xl font-medium",
    large: "text-4xl font-bold",
  };

  return (
    <div className="p-5 flex flex-col gap-5 items-center">
      <p className={`transition-all ${sizeClasses[textSize]}`}>
        Questo testo cambia dimensione
      </p>
      <div className="flex gap-5">
        <div className={radioStyle}>
          <input
            type="radio"
            name="textSize"
            id="small"
            checked={textSize === "small"}
            onChange={handleChange}
          />
          <label htmlFor="small">Piccolo</label>
        </div>

        <div className={radioStyle}>
          <input
            type="radio"
            name="textSize"
            id="medium"
            checked={textSize === "medium"}
            onChange={handleChange}
          />
          <label htmlFor="medium">Medio</label>
        </div>

        <div className={radioStyle}>
          <input
            type="radio"
            name="textSize"
            id="large"
            checked={textSize === "large"}
            onChange={handleChange}
          />
          <label htmlFor="large">Grande</label>
        </div>
      </div>
    </div>
  );
}
