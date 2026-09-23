import { useState } from "react";

export default function AlternateText() {
  const [alignment, setAlignment] = useState("justify-start");

  const buttonStyle = "py-3 px-5 rounded-xl text-white font-semibold";

  return (
    <div className="py-8 bg-[whitesmoke]">
      <div className="flex gap-5 justify-around mb-5">
        <button
          type="button"
          onClick={() => setAlignment("justify-start")}
          className={`${buttonStyle} bg-yellow-500`}
        >
          sinistra
        </button>
        <button
          type="button"
          onClick={() => setAlignment("justify-center")}
          className={`${buttonStyle} bg-green-500`}
        >
          centro
        </button>
        <button
          type="button"
          onClick={() => setAlignment("justify-end")}
          className={`${buttonStyle} bg-blue-500`}
        >
          destra
        </button>
      </div>
      <div className={`flex ${alignment}`}>
        <p className="font-semibold w-[250px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          ratione ad! Et, magnam, maxime aut cupiditate optio sit error
          praesentium nesciunt quis, veritatis quidem beatae eius facere vel
          temporibus velit?
        </p>
      </div>
    </div>
  );
}
