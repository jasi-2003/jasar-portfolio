import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello Welcome />";

  useEffect(() => {
    let index = 1; // start at 1 so first char shows immediately
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // wait 1 second after text finishes, then complete
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-red-400 flex flex-col items-center justify-center">
      {/* Typing Text */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40px] h-full bg-red-400 shadow-[0_0_15px_#f87171] animate-loading-bar"></div>
      </div>
    </div>
  );
};
