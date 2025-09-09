import CountGroup from "./CountGroup";

export default function Count({
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
      <CountGroup
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </>
  );
}
