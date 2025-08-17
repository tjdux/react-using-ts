import { useReducer } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";
import counterReducer from "../reducer/counterReducer";

export default function Count() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <CountDisplay count={count} />
      <CountButton countDispatch={countDispatch} />
    </>
  );
}
