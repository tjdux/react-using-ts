export default function App() {
  const fruits = ["apple", "banana", "orange"];
  return (
    <>
      <p>Fruits Lists</p>
      <ul>
        {fruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
