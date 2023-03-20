import React, { useEffect, useState } from 'react';

interface Props {}

export default function NameShuffler({}: Props) {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleClick = () => {
    setShowStopwatch(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showStopwatch) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showStopwatch]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="m-10 flex flex-col items-center">
        <button
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={handleClick}
        >
          Start
        </button>
        {showStopwatch && (
          <div className="mt-4 rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-2 text-lg font-bold">Stopwatch</h2>
            <p className="text-gray-700">{formatTime(elapsedTime)}</p>
          </div>
        )}
      </div>
    </>
  );
}
