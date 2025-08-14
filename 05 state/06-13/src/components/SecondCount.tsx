import { Dispatch, SetStateAction } from "react";

export default function SecondCount({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) {
  console.log("SecondCount Component");
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}
