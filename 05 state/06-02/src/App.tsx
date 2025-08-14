import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number>(0);
  const handleSetToTen = () => {
    setState(10);
  };

  return (
    <>
      <h1>state: {state}</h1>
      <button onClick={handleSetToTen}>set to 10</button>
    </>
  );
}
