import { useActionState } from "react";

export default function App() {
  const [state, formAction, isPending] = useActionState(
    async (count: number, formData: FormData) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const amount = Number(formData.get("amount"));
      return count + amount;
    },
    0
  );

  return (
    <>
      <form action={formAction}>
        <h1>Count: {state}</h1>
        <input type="number" name="amount" />
        <button disabled={isPending}>증가</button>
        {isPending && <p>제출중...</p>}
      </form>
    </>
  );
}
