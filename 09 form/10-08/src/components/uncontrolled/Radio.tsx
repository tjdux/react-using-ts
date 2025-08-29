import { useRef } from "react";

export default function Radio() {
  const formElRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formElRef.current!);
    console.log(formData.get("option"));
  };

  return (
    <form ref={formElRef} onSubmit={handleSubmit}>
      <div>
        <label>
          <input type="radio" name="option" value="option1" />
          옵션 1
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="option" value="option2" defaultChecked />
          옵션 2
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="option" value="option3" />
          옵션 3
        </label>
      </div>

      <button type="submit">제출</button>
    </form>
  );
}
