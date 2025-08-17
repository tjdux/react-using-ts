import { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const handleAddFruit = () => {
    //setFruits((fruits) => [...fruits, "melon"]);
    // setFruits((fruits) =>
    //   fruits.map((fruit) => (fruit === "apple" ? "grape" : fruit))
    // );
    setFruits((fruits) => [...fruits.slice(0, 1), "grape", ...fruits.slice(1)]);
  };
  return (
    <>
      <p>{fruits.join(", ")}</p>
      <button onClick={handleAddFruit}>Add Fruit</button>
    </>
  );
}
