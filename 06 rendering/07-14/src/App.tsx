import { useState } from "react";

export default function App() {
  // 초기 데이터를 설정합니다.
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Tomato", category: "Vegetable" },
  ]);

  const handleDelete = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      <h3>Items List</h3>
      <ul>
        {items
          //.filter((item) => item.category === "Vegetable")
          .map((item) => (
            <li key={item.id}>
              {item.name} - {item.category}
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
