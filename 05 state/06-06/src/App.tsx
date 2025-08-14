import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1); // 0 + 1
    setCount((count) => count + 1); // 0 + 1
    setCount((count) => count + 1); // 0 + 1
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
