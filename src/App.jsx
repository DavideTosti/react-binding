import AlternateButton from "./components/AlternateButton.jsx";
import AlternateText from "./components/AlternateText.jsx";
import CheckList from "./components/CheckList.jsx";
import Counter from "./components/Counter.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
    <>
      <h1 className="text-[30px] text-center font-semibold border-b-3 border-red-500 p-5">
        React Binding
      </h1>
      <Counter />
      <AlternateButton />
      <AlternateText />
      <Welcome />
      <CheckList />
    </>
  );
}

export default App;
