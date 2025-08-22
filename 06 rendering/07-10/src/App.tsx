export default function App() {
  const fruits = ["apple", "banana", "orange"];
  const items = [];
  for (let i = 0; i < fruits.length; i++) {
    items.push(<li key={i}>{fruits[i]}</li>);
  }
  return (
    <>
      <p>Fruits Lists</p>
      <ul>{items}</ul>
    </>
  );
}
