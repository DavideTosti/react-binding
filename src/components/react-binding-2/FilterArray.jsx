//2.

import { useState } from "react";

export default function FilterArray() {
  const [names, setNames] = useState(["Alice", "Bob", "Charlie", "David"]);
  const [digit, setDigit] = useState("");

  function handleFilterInput(event) {
    setDigit(event.target.value);
  }

  return (
    <div className="p-5 flex gap-5">
      <input
        type="text"
        placeholder="Digita per filtrare"
        onChange={handleFilterInput}
        className="border-2 border-black rounded px-5 py-2 my-3 bg-[whitesmoke]"
      />
      <ul className="text-[24px] text-center font-semibold">
        {names
          .filter((name) => name.includes(digit))
          .map((name) => (
            <li key={name}>{name}</li>
          ))}
      </ul>
    </div>
  );
}
