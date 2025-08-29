import { useState } from "react";

export default function useInput(
  initialValue = "",
  validateFn: (value: string) => string | void
) {
  const [error, setError] = useState("");
  const [value, setValue] = useState(initialValue);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(validateFn(e.target.value) || "");
  };

  return {
    value,
    error,
    handleValueChange,
  };
}
