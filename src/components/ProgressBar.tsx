import React, { useEffect, useState } from "react";

const ProgressBar: React.FC = () => {
  const [progressValue, setProgressValue] = useState<number>(439);
  const decreaseIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const increaseIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      if ((e.key === "e" || e.key === "E") && !decreaseIntervalRef.current) {
        decreaseIntervalRef.current = setInterval(() => {
          setProgressValue((prevValue) => Math.max(prevValue - 5, 0));
        }, 30);
        if (increaseIntervalRef.current) {
          clearInterval(increaseIntervalRef.current);
          increaseIntervalRef.current = null;
        }
      }
    };
    const keyUp = () => {
      if (decreaseIntervalRef.current) {
        clearInterval(decreaseIntervalRef.current);
        decreaseIntervalRef.current = null;
      }
      if (!increaseIntervalRef.current) {
        increaseIntervalRef.current = setInterval(() => {
          setProgressValue((prevValue) => Math.min(prevValue + 5, 439));
        }, 30);
      }
    };
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
      if (decreaseIntervalRef.current) {
        clearInterval(decreaseIntervalRef.current);
      }
      if (increaseIntervalRef.current) {
        clearInterval(increaseIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-[160px] h-[160px] rounded-full border-2 border-white flex flex-center">
      <div className="w-[104px] h-[104px] rounded-full border-2 border-white flex flex-center">
        <p>Press E</p>
      </div>
      <svg className="absolute size-full">
        <circle
          fill="none"
          stroke="red"
          strokeWidth={'25px'}
          strokeDasharray={'440'}
          strokeDashoffset={progressValue}
          cx={'78'} cy={'78'} r={'65'} 
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
