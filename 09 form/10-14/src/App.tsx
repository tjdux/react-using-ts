import useInput from "./hooks/useInput";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "./utils/validation";

export default function App() {
  const { value: email, handleValueChange: handleEmailChange } = useInput("");
  const { value: password, handleValueChange: handlePasswordChange } =
    useInput("");
  const { value: name, handleValueChange: handleNameChange } = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const pwError = validatePassword(password);
    const nameError = validateName(name);

    if (emailError) {
      alert(emailError);
      return;
    }
    if (pwError) {
      alert(pwError);
      return;
    }
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
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          minLength={4}
          maxLength={6}
          required
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
