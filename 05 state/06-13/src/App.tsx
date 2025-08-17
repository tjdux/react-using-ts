import { useState } from "react";
import FirstCount from "./components/FirstCount";
import SecondCount from "./components/SecondCount";

export default function App() {
  const [count, setCount] = useState(0);
  // 캡슐화
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <FirstCount count={count} handleIncrement={handleIncrement} />
      <SecondCount count={count} handleIncrement={handleIncrement} />
    </>
  );
}
