import { useState } from "react";
import LoginPanel from "./components/LoginPanel";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleStatus = () => setIsLoggedIn(!isLoggedIn);

  return (
    <>
      <LoginPanel isLoggedIn={isLoggedIn} onButtonClick={handleStatus} />
    </>
  );
}
