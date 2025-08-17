export default function FirstCount({
  count,
  handleIncrement,
}: {
  count: number;
  handleIncrement: () => void;
}) {
  return (
    <>
      <h1>FirstCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
