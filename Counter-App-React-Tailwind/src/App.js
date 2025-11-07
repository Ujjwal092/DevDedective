import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  //to render count value in UI we use useState hook

  // Decrement Handler called by button
  function decHandler() {
    setCount(count - 1);
  }

  function incHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-5 bg-slate-600">
      <div className="text-blue-500 text-2xl"> Increment & Decrement </div>

      <div className="flex flex-row bg-white gap-12 py-3 px-4 rounded-lg text-[25px] justify-cente ">
        <button
          onClick={decHandler}
          className="border-r-2 text-center w-20 border-gray-500 border-dashed font-bold text-2xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-3xl text-blue-500">{count}</div>
        <button
          onClick={incHandler}
          className="border-l-2 text-center w-20 text border-gray-500 border-dashed font-bold text-2xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
