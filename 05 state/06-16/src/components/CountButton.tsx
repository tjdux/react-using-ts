import { ActionDispatch } from "react";

export default function CountButton({
  countDispatch,
}: {
  countDispatch: ActionDispatch<[action: { type: string }]>;
}) {
  return (
    <>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
