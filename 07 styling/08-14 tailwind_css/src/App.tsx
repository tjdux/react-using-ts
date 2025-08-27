import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  const [isRed, setIsRed] = useState(false);

  const handleColorChange = () => setIsRed((isRed) => !isRed);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <button className="button">Click Me!</button>
        <button className="bg-green-500 text-white py-3 px-5 border-none cursor-pointer transition-colors duration-300 hover:bg-green-600 rounded">
          Click Me!
        </button>
        <button
          className={twMerge(
            "bg-green-500 text-white py-3 px-5 border-none cursor-pointer transition-colors duration-300 hover:bg-green-600 rounded",
            isRed && " bg-rose-700"
          )}
        >
          Click Me!
        </button>
        <button className="btns" onClick={handleColorChange}>
          Change Color!
        </button>
      </div>
    </>
  );
}
