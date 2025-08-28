import useInput from "./hooks/useInput";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "./utils/validation";

export default function App() {
  const { value: email, handleValueChange: handleEmailChange } = useInput("");
  const { value: password, handleValueChange: handlePasswordChange } =
    useInput("");
  const { value: name, handleValueChange: handleNameChange } = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 이메일 검증
    const emailError = validateEmail(email);
    if (emailError) {
      alert(emailError);
      return;
    }

    // 비밀번호 검증
    const passwordError = validatePassword(password);
    if (passwordError) {
      alert(passwordError);
      return;
    }

    // 이름 검증
    const nameError = validateName(name);
    if (nameError) {
      alert(nameError);
      return;
    }
    console.log({ email, password, name });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
