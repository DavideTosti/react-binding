import { useState } from "react";

export default function AlternateButton() {
  const primary = "bg-green-400";
  const secondary = "bg-red-400";

  const primaryText = "principale";
  const secondaryText = "secondario";

  const [isPrimary, setIsPrimary] = useState(true);
  function handleClick() {
    setIsPrimary((prev) => !prev);
  }

  return (
    <div className={`text-center py-5 ${isPrimary ? secondary : primary}`}>
      <button
        type="button"
        className={`text-white py-3 px-8 rounded-xl font-semibold text-[20px] ${isPrimary ? primary : secondary}`}
        onClick={handleClick}
      >
        {isPrimary ? primaryText : secondaryText}
      </button>
    </div>
  );
}
