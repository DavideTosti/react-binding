//1.

import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  function handleTextInput(event) {
    setText(event.target.value);
  }

  return (
    <div className="p-5 bg-[goldenrod] flex gap-5 items-center ">
      <input
        type="text"
        onChange={handleTextInput}
        className="border-2 border-black rounded px-5 py-2 my-3 bg-[whitesmoke] w-[80%]"
      />
      <p className="text-[24px] text-center font-semibold">
        Caratteri: {text.length}
      </p>
    </div>
  );
}
