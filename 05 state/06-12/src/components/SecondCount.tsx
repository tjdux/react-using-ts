import { useState } from "react";

export default function SecondCount() {
  console.log("SecondCount Component");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}
