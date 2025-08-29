import { useState } from "react";

export default function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    handleValueChange,
  };
}
