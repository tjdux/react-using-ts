import { useCounterAction } from "../context/counter/useCounter";

export default function CountButton() {
  console.log("CountButton");
  const countDispatch = useCounterAction();
  return (
    <>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}
