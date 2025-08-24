import { useState } from "react";
import LoginStatus from "./components/LoginStatus";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleStatus = function () {
    setIsLoggedIn(!isLoggedIn);
  };

  return <LoginStatus isLoggedIn={isLoggedIn} onButtonClick={handleStatus} />;
}
