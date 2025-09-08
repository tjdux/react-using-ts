import React, { useState } from "react";
// import ChildA from "./components/ChildA";
// import ChildB from "./components/ChildB";
const ChildA = React.lazy(() => import("./components/ChildA"));
const ChildB = React.lazy(() => import("./components/ChildB"));

export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && (
        <>
          <ChildA />
          <ChildB />
        </>
      )}
    </>
  );
}
