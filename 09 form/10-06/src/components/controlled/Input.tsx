import { useState } from "react";

export default function Input() {
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
          Input: {formState.email} / {formState.password}
        </h1>
        <input
          type="text"
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
