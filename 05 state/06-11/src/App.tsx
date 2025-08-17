import { useState } from "react";
import FirstCount from "./components/FirstCount";
import SecondCount from "./components/SecondCount";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstCount count={count} setCount={setCount} />
      <SecondCount count={count} setCount={setCount} />
    </>
  );
}
