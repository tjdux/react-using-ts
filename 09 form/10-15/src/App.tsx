import useInput from "./hooks/useInput";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "./utils/validation";

export default function App() {
  const {
    value: email,
    error: emailErr,
    handleValueChange: handleEmailChange,
  } = useInput("", validateEmail);
  const {
    value: password,
    error: passwordErr,
    handleValueChange: handlePasswordChange,
  } = useInput("", validatePassword);
  const {
    value: name,
    error: nameErr,
    handleValueChange: handleNameChange,
  } = useInput("", validateName);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, name });

    if (emailErr) {
      alert(emailErr);
      return;
    }

    if (passwordErr) {
      alert(passwordErr);
      return;
    }

    if (nameErr) {
      alert(nameErr);
      return;
    }
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
        {emailErr && <p>{emailErr}</p>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordErr && <p>{passwordErr}</p>}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        {nameErr && <p>{nameErr}</p>}
        <button type="submit">제출</button>
      </form>
    </>
  );
}
