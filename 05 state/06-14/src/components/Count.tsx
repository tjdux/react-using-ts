import { useState } from "react";
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>
        <CountDisplay count={count} />
        <CountButton
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      </h1>
    </>
  );
}
