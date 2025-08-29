import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea name="desc" value={text} onChange={handleTextChange} />
      <p>입력된 텍스트: {text}</p>
    </div>
  );
}
