import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("pw");

    setIsLoading(true);
    //api
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log(email, password);
  };

  return (
    <>
      <form action={handleForm}>
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" />
        <button type="submit" disabled={isLoading}>
          로그인
        </button>
      </form>
    </>
  );
}
