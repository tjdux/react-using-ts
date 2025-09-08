import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // ms
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((time) => time + 1);
      }, 1);
    }
    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-5xl font-mono font-semibold text-gray-800 dark:text-white">
          {formatTime(time)}
        </div>

        <div className="flex space-x-4">
          {/* 시작중 - "bg-red-500 hover:bg-red-600" */}
          {/* 정지중 - "bg-green-500 hover:bg-green-600" */}
          <button
            className={`p-3 rounded-full transition-colors ${
              isRunning
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
            onClick={() => setIsRunning((isRunning) => !isRunning)}
          >
            {/* 시작버튼 <Play size={24} /> */}
            {/* 정지버튼  <Pause size={24} /> */}
            {isRunning ? <Pause size={24} /> : <Play size={24} />}
          </button>

          <button
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
          >
            <RotateCcw size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
