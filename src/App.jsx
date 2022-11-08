import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const clear = () => {
    setCount((count) => count - count);
  };

  return (
    <div className="App">
      <div className="w-full h-screen flex justify-center items-center flex-col gap-y-5 ">
        <h1 className="font-bold text-2xl">Counter App</h1>
        <h2 className="text-xl">{count}</h2>
        <div className="flex flex-row gap-x-5 ">
          <Button
            onClick={increment}
            text="Increment"
            style="font-bold text-center bg-blue-200 border-solid border-2 border-black py-2 px-3 rounded-lg"
          />
          <Button
            onClick={decrement}
            text="Decrement"
            style="font-bold text-center bg-red-200 border-solid border-2 border-black py-2 px-3 rounded-lg"
          />
          <Button
            onClick={clear}
            text="Clear"
            style="font-bold text-center bg-yellow-200 border-solid border-2 border-black py-2 px-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
