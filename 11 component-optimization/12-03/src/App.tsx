import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>노출 변경</button>
      {isShow && <Count />}
    </>
  );
}
