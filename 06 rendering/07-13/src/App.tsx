import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const items = ["apple", "banana", "orange"];
  const [fruits, setFruits] = useState(() =>
    items.map((item) => ({
      id: uuidv4(),
      value: item,
    }))
  );
  const handleAddFruit = () => {
    setFruits([{ id: uuidv4(), value: "grape" }, ...fruits]);
  };
  return (
    <>
      <p>Fruits Lists</p>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      <button onClick={handleAddFruit}>추가</button>
    </>
  );
}
