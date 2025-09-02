import { lazy, useState } from "react";
const ChildA = lazy(() => import("./components/ChildA"));
const ChildB = lazy(() => import("./components/ChildB"));

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
