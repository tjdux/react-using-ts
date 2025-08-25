import { useState } from "react";

export default function FruitList() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  const handleItems = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setItems((items) => [...items, "포도"]);
    (e.target as HTMLButtonElement).setAttribute("disabled", "");
  };

  return (
    <>
      <h1>FruitList Component</h1>
      <ul>
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
      <button onClick={(e) => handleItems(e)}>과일 추가</button>
    </>
  );
}
