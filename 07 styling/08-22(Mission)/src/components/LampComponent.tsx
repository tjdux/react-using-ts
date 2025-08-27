import { useState } from "react";
import lampOff from "../assets/images/lamp_off.png";
import lampOn from "../assets/images/lamp_on.png";

export default function LampComponent() {
  const [isLampOn, setIsLampOn] = useState(false);

  const handleLamp = () => setIsLampOn((isLampOn) => !isLampOn);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <div
        className="h-[300px] w-[300px] bg-cover"
        style={{ backgroundImage: `url(${isLampOn ? lampOn : lampOff})` }}
        onClick={handleLamp}
      ></div>
    </div>
  );
}
