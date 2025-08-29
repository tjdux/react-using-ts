import { useState } from "react";

export default function useInput(
  initialData = "",
  validateFn: (val: string) => boolean
) {
  const [error, setError] = useState(false);
  const [input, setInput] = useState(initialData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(!validateFn(e.target.value));
  };

  return { input, handleInputChange, error };
}
