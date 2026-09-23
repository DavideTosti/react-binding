import { useState } from "react";

export default function Welcome() {
  const [language, setLanguage] = useState("ENG");
  function printHello() {
    if (language === "ENG") {
      return "Welcome";
    } else if (language === "ITA") {
      return "Benvenuto";
    } else if (language === "GER") {
      return "Willkommen";
    }
  }
  const styleButton =
    "font-[20px] font-semibold border-3 rounded-xl text-white py-3 px-8";
  return (
    <div className="flex flex-col items-center bg-gray-600 gap-10 p-5">
      <div className="flex justify-evenly gap-5 w-full">
        <button
          type="button"
          onClick={() => setLanguage("ENG")}
          className={`${styleButton} bg-blue-500 border-red-500`}
        >
          ENG
        </button>
        <button
          type="button"
          onClick={() => setLanguage("ITA")}
          className={`${styleButton} bg-green-500 border-red-500`}
        >
          ITA
        </button>
        <button
          type="button"
          onClick={() => setLanguage("GER")}
          className={`${styleButton} bg-black border-yellow-500`}
        >
          GER
        </button>
      </div>
      <p className="text-white text-[30px] font-semibold">{printHello()}</p>
    </div>
  );
}
