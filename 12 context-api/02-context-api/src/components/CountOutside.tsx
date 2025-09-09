import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountOutside() {
  const { count } = useContext(CounterContext)!;

  return (
    <>
      <h1>CountOutside: {count}</h1>
    </>
  );
}
