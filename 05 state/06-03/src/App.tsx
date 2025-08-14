import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number | string>(0);
  const [isShow, setIsShow] = useState<boolean>(true);
  const handleSetToTen = () => {
    setState("10");
    setIsShow(false);
  };
  return (
    <>
      <h1>state: {state}</h1>
      <h1>show: {isShow.toString()}</h1>
      <button onClick={handleSetToTen}>Set To 10</button>
    </>
  );
}
