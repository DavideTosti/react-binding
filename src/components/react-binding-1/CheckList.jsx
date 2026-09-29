import { useState } from "react";

export default function CheckList() {
  const [duty, setDuty] = useState([]);

  const dutyClicked = "bg-red-800 line-through";
  const dutyUnclicked = "bg-[grey]";

  function handleSubmit(e) {
    e.preventDefault();

    const dutyText = e.target.duty.value.trim();
    if (dutyText !== "") {
      const newItem = {
        id: crypto.randomUUID(),
        text: dutyText,
        completed: false,
      };
      setDuty((prev) => [...prev, newItem]);
      e.target.duty.value = "";
    }
  }

  function toggleDuty(id) {
    setDuty((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  return (
    <div className="flex flex-row-reverse gap-8 justify-end bg-[whitesmoke] p-8">
      <div className="w-[80%] flex flex-col gap-5 items-center">
        <ul className="flex flex-wrap gap-5 bg-black text-[whitesmoke] py-5 px-8 rounded-lg font-semibold text-[20px] h-fit w-full">
          {duty.length === 0 ? (
            <p>Non hai attività per oggi</p>
          ) : (
            duty.map((item) => (
              <li
                key={item.id}
                className={`flex gap-3 py-2 px-5 items-center h-fit rounded-lg w-fit text-[whitesmoke] ${
                  item.completed ? dutyClicked : dutyUnclicked
                }`}
              >
                <p>{item.text}</p>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleDuty(item.id)}
                />
              </li>
            ))
          )}
        </ul>
        <button
          type="button"
          onClick={() => setDuty([])}
          className="bg-red-800 text-[whitesmoke] py-3 px-8 rounded-lg font-semibold cursor-pointer hover:bg-[whitesmoke] hover:text-red-800 border-3 border-red-800"
        >
          Svuota lista
        </button>
      </div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <input
          type="text"
          name="duty"
          placeholder="Inserisci attività..."
          className="border-2 border-black rounded-lg p-3 hover:border-red-800"
        />
        <button
          type="submit"
          className="bg-red-800 text-[whitesmoke] py-3 px-8 rounded-lg font-semibold cursor-pointer hover:bg-[whitesmoke] hover:text-red-800 border-3 border-red-800"
        >
          Aggiungi
        </button>
      </form>
    </div>
  );
}
