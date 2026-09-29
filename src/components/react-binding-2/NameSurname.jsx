//4.

import { useState } from "react";

export default function NameSurname() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  function handleSurname(event) {
    setSurname(event.target.value);
  }
  return (
    <div className="p-5 bg-[black] gap-3 text-white flex flex-col items-center">
      <h1 className="font-bold text-[30px]">
        {name} {surname}
      </h1>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="inserisci il nome"
          onChange={handleName}
          className="border-2 border-[goldenrod] rounded px-5 py-2 bg-[whitesmoke] text-black"
        />
        <input
          type="text"
          placeholder="inserisci il cognome"
          onChange={handleSurname}
          className="border-2 border-[goldenrod] rounded px-5 py-2 bg-[whitesmoke] text-black"
        />
      </div>
    </div>
  );
}
