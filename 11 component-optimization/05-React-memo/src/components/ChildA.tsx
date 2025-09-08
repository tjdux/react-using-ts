import ChildB from "./ChildB";
import React, { useState } from "react";

export default React.memo(function ChildA(increment: {
  increment: () => void;
}) {
  console.log("ChildA");
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ChildA Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <ChildB />
    </>
  );
});
