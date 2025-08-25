import { initialButtons } from "./data/initialData";
import ButtonGroup from "./components/ButtonGroup";
import { useState } from "react";

export default function App() {
  const buttonsData = initialButtons;
  const [isActive, setIsActive] = useState(
    new Array(buttonsData.length).fill(false)
  );

  const handleActive = (id: number, isDisabled: boolean) => {
    if (isDisabled) return;
    setIsActive(isActive.map((val, idx) => (idx === id - 1 ? !val : val)));
  };

  const handleReset = () => {
    setIsActive(new Array(buttonsData.length).fill(false));
  };

  return (
    <>
      <h1>Active Count: {isActive.filter((val) => val).length}</h1>
      <ButtonGroup
        buttonsData={buttonsData}
        onClickButton={handleActive}
        isActive={isActive}
      />
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
