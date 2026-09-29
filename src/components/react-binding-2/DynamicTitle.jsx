//3.

import { useState } from "react";

export default function DynamicTitle() {
  const [title, setTitle] = useState("Titolo di default");

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  return (
    <div className="p-5 flex flex-col gap-5 items-center justify-center bg-[grey]">
      <h1 className="font-bold text-[30px]">{title}</h1>
      <input
        type="text"
        onChange={handleTitle}
        placeholder="inserisci il titolo"
        className="border-2 border-black rounded px-5 py-2 bg-[whitesmoke]"
      />
    </div>
  );
}
