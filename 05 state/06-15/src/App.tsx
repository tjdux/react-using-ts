import { useReducer } from "react";
import counterReducer from "./reducer/counterReducer";

export default function App() {
  const [count, countDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>
        increment
      </button>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>
        decrement
      </button>
      <button onClick={() => countDispatch({ type: "RESET" })}>reset</button>
    </>
  );
}
