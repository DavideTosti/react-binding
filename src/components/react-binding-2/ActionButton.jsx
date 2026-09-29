// 5.

import { useState } from "react";

export default function ActionButton() {
  const [isChecked, setIsChecked] = useState(false);

  const disabledButton = "bg-[gray] text-[whitesmoke]";
  const enabledButton =
    "bg-sky-500 text-[whitesmoke] hover:bg-[whitesmoke] hover:text-sky-500 hover:border-2 hover:border-sky-500 ";

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div className="p-5 flex gap-3">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p>Accetto i Termini & Condizioni</p>
      </div>
      <button
        disabled={!isChecked}
        className={`py-3 px-5 rounded cursor-pointer border-2 rounded-lg ${!isChecked ? disabledButton : enabledButton}`}
        onClick={() => alert("Termini & Condizioni accettati")}
      >
        Invia
      </button>
    </div>
  );
}
