// 6.

import { useState } from "react";

export default function DynamicStyle() {
  const checkStyle =
    "p-3 border-2 border-black rounded-lg flex gap-3 bg-[whitesmoke]";
  const [style, setStyle] = useState({
    grassetto: false,
    rosso: false,
    corsivo: false,
    sottolineato: false,
  });
  const activeStyles = [
    style.grassetto ? "font-bold" : "",
    style.rosso ? "text-red-500" : "",
    style.corsivo ? "italic" : "",
    style.sottolineato ? "underline" : "",
  ].join(" ");

  function handleCheck(event) {
    const { name, checked } = event.target;
    setStyle((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  return (
    <div className="p-5 flex flex-col gap-5 items-center bg-[beige]">
      <p className={activeStyles}>Questo testo verrà modificato</p>
      <div className="flex gap-5">
        <div className={checkStyle}>
          <input
            type="checkbox"
            name="grassetto"
            id="grassetto"
            checked={style.grassetto}
            onChange={handleCheck}
          />
          <label htmlFor="grassetto">Grassetto</label>
        </div>
        <div className={checkStyle}>
          <input
            type="checkbox"
            name="rosso"
            id="rosso"
            checked={style.rosso}
            onChange={handleCheck}
          />
          <label htmlFor="rosso">Rosso</label>
        </div>
        <div className={checkStyle}>
          <input
            type="checkbox"
            name="corsivo"
            id="corsivo"
            checked={style.corsivo}
            onChange={handleCheck}
          />
          <label htmlFor="corsivo">Corsivo</label>
        </div>
        <div className={checkStyle}>
          <input
            type="checkbox"
            name="sottolineato"
            id="sottolineato"
            checked={style.sottolineato}
            onChange={handleCheck}
          />
          <label htmlFor="sottolineato">Sottolineato</label>
        </div>
      </div>
    </div>
  );
}
