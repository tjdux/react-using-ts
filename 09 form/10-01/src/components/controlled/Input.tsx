import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form>
        <h1>
          Input: {input} / {formState.email} / {formState.password}
        </h1>
        <input type="text" value={input} onChange={handleInputChange} />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleFormStateChange}
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormStateChange}
        />
      </form>
    </>
  );
}
