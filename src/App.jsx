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
          <Button onClick={increment} text="Increment" />
          <Button onClick={decrement} text="Decrement" />
          <Button onClick={clear} text="Clear" />
        </div>
      </div>
    </div>
  );
};

export default App;
