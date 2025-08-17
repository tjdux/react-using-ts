export default function SecondCount({
  count,
  handleIncrement,
}: {
  count: number;
  handleIncrement: () => void;
}) {
  console.log("SecondCount Component");
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
