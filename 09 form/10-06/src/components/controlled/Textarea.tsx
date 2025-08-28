import { useState } from "react";

export default function Textarea() {
  const [formState, setFormState] = useState({
    desc: "",
    introduce: "",
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <textarea
        name="desc"
        value={formState.desc}
        onChange={handleFormStateChange}
      />
      <p>입력된 텍스트: {formState.desc}</p>

      <textarea
        name="introduce"
        value={formState.introduce}
        onChange={handleFormStateChange}
      />
      <p>입력된 텍스트: {formState.introduce}</p>
    </div>
  );
}
