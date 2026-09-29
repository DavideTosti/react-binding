import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((actualCount) => actualCount + 1);
  }
  function handleSubtract() {
    setCount((actualCount) =>
      actualCount > 0 ? actualCount - 1 : actualCount,
    );
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div className="flex flex-col items-center gap-5 bg-[gray] py-8 px-3">
      <p className="text-[50px] font-semibold text-green-500 bg-black p-5 border-4 rounded-lg w-[100px] text-center">
        {count}
      </p>
      <div className="flex gap-5">
        <button
          type="button"
          onClick={handleAdd}
          className="text-white py-3 px-8 bg-black border-5 border-sky-500 text-[30px] rounded-lg"
        >
          +1
        </button>
        <button
          type="button"
          onClick={handleSubtract}
          className="text-white py-3 px-8 bg-black border-5 border-yellow-500 text-[30px] rounded-lg"
        >
          -1
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="text-white py-3 px-8 bg-black border-5 border-red-500 text-[30px] rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
