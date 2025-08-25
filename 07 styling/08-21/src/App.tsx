import { twMerge } from "tailwind-merge";
export default function App() {
  const isRed = false;
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <button
          className={twMerge(
            `bg-green-500 text-white py-3 px-5 rounded border-none cursor-pointer transition-colors duration-300  hover:bg-green-600`,
            isRed && "bg-rose-500"
          )}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
