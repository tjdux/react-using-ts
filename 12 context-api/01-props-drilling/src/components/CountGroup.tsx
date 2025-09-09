import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function CountGroup({
  count,
  increment,
  decrement,
  reset,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
  return (
    <>
      <CountDisplay count={count} />
      <CountButton increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}
