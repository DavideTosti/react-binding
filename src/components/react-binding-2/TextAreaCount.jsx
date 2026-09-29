//9.

import { useState } from "react";

export default function TextAreaCount() {
  let maxCharacters = 20;
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="p-5 bg-black flex flex-col items-center gap-5">
      <textarea
        name="text"
        id="text"
        className="p-5 bg-[whitesmoke] border-2 border-[goldenrod] w-[80%] "
        maxLength={maxCharacters}
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-end w-[80%]">
        <p
          className={`font-semibold ${maxCharacters - text.length > 0 ? "text-[whitesmoke]" : "text-red-500"}`}
        >{`caratteri disponibili: ${maxCharacters - text.length}`}</p>
      </div>
    </div>
  );
}
