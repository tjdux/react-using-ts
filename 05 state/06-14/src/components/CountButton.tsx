export default function CountButton({
  handleIncrement,
  handleDecrement,
  handleReset,
}: {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleReset: () => void;
}) {
  return (
    <>
      <button onClick={handleDecrement}>➖</button>
      <button onClick={handleIncrement}>➕</button>
      <button onClick={handleReset}>0️⃣</button>
    </>
  );
}
