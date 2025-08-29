import { useRef } from "react";

export default function Textarea() {
  const descRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(descRef.current?.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea name="desc" ref={descRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
