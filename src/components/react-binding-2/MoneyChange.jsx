//8.

import { useState } from "react";

export default function MoneyChange() {
  const formStyle =
    "bg-[whitesmoke] py-3 px-5 text-black rounded-4xl border-2 border-black";

  let valoreIniziale = 12.99;

  const [currency, setCurrency] = useState("€");
  const [prezzo, setprezzo] = useState(valoreIniziale);

  function handleChange(event) {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);

    if (selectedCurrency === "€") {
      setprezzo(valoreIniziale.toFixed(2));
    }
    if (selectedCurrency === "$") {
      setprezzo((valoreIniziale * 1.13).toFixed(2));
    }
    if (selectedCurrency === "£") {
      setprezzo((valoreIniziale * 0.86).toFixed(2));
    }
  }

  return (
    <div className="p-5 flex items-center gap-5 flex-col bg-sky-700 text-[whitesmoke]">
      <p className="font-semibold text-[32px]">
        {`PREZZO: ${prezzo} ${currency}`}
      </p>

      <select
        name="currency"
        id="currency"
        className={formStyle}
        onChange={handleChange}
      >
        <option value="€">EUR €</option>
        <option value="$">USD $</option>
        <option value="£">GBP £</option>
      </select>
    </div>
  );
}
