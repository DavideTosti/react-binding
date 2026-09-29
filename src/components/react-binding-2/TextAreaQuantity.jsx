//10.

import { useState } from "react";

export default function TextAreaQuantity() {
  const [text, setText] = useState("");
  const messaggi = {
    nullo: "scrivi qualcosa",
    corto: "testo troppo corto",
    ottimale: "lunghezza testo ottimale",
    lungo: "testo troppo lungo",
  };

  const lunghezza = text.length;

  let messaggio = messaggi.nullo;
  let styleMessaggio = "text-black";

  if (lunghezza === 0) {
    messaggio = messaggi.nullo;
    styleMessaggio = "text-black";
  } else if (lunghezza > 0 && lunghezza <= 20) {
    messaggio = messaggi.corto;
    styleMessaggio = "text-yellow-500";
  } else if (lunghezza > 20 && lunghezza <= 40) {
    messaggio = messaggi.ottimale;
    styleMessaggio = "text-green-500";
  } else if (lunghezza > 40 && lunghezza <= 60) {
    messaggio = messaggi.lungo;
    styleMessaggio = "text-red-500";
  }

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="p-5 bg-sky-200 flex flex-col items-center gap-5">
      <textarea
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
        maxLength={60}
        className="p-5 bg-sky-800 border-2 border-[goldenrod] w-[80%] text-[whitesmoke]"
      ></textarea>
      <div className="flex justify-end w-[80%]">
        <p className={`${styleMessaggio} font-semibold`}>{messaggio}</p>
      </div>
    </div>
  );
}
