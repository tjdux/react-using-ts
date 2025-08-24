import { useState } from "react";
import TrafficLight from "./components/TrafficLight";

export default function App() {
  const [light, setLight] = useState("red");

  const handleLight = function () {
    switch (light) {
      case "red":
        return setLight("yellow");
      case "yellow":
        return setLight("green");
      case "green":
      default:
        return setLight("red");
    }
  };

  return (
    <>
      <TrafficLight light={light} onButtonClick={handleLight} />
    </>
  );
}
