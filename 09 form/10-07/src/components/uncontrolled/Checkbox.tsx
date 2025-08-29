import { useRef } from "react";

export default function Checkbox() {
  const privacyRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fruitRef = useRef<HTMLInputElement[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedFruit = fruitRef.current
      .filter((fruit) => fruit.checked)
      .map((fruit) => fruit.value);

    console.log(selectedFruit);

    if (!privacyRef.current?.checked) {
      alert("개인정보에 동의해주세요");
      return;
    }
    if (!termsRef.current?.checked) {
      alert("약관에 동의해주세요.");
      return;
    }

    console.log(privacyRef.current?.checked);
    console.log(termsRef.current?.checked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="checkbox" ref={privacyRef} />
          <label>개인정보 동의</label>
        </div>
        <div>
          <input type="checkbox" ref={termsRef} />
          <label>약관 동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"사과"}
            ref={(el) => {
              fruitRef.current[0] = el!;
            }}
          />
          <label>사과</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"바나나"}
            ref={(el) => {
              fruitRef.current[1] = el!;
            }}
          />
          <label>바나나</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"오렌지"}
            ref={(el) => {
              fruitRef.current[2] = el!;
            }}
          />
          <label>오렌지</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
