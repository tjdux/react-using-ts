import { useState } from "react";
import Notification from "./components/Notification";

export default function App() {
  const [showNotification, setShowNotification] = useState(false);
  const handleNotification = () => setShowNotification(!showNotification);

  return (
    <>
      <Notification
        showNotification={showNotification}
        onButtonClick={handleNotification}
      />
    </>
  );
}
