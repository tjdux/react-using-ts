import { useState } from "react";

export default function Checkbox() {
  const [formState, setFormState] = useState({
    chk1: false,
    chk2: false,
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="item1"
          name="chk1"
          checked={formState.chk1}
          onChange={handleFormStateChange}
        />
        <label htmlFor="item1">
          아이템 1({formState.chk1 ? "선택됨" : "선택되지 않음"})
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="item2"
          name="chk2"
          checked={formState.chk2}
          onChange={handleFormStateChange}
        />
        <label htmlFor="item2">
          아이템 2({formState.chk2 ? "선택됨" : "선택되지 않음"})
        </label>
      </div>
    </div>
  );
}
