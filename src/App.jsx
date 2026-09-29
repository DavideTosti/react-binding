import BindingOne from "./components/BindingOne";
import BindingTwo from "./components/BindingTwo";

function App() {
  return (
    <>
      <h1 className="text-[30px] text-center font-semibold border-b-3 border-red-500 p-5">
        React Binding
      </h1>
      <BindingOne />

      <BindingTwo />
    </>
  );
}

export default App;
