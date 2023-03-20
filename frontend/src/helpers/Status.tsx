import router from 'next/router';
import React, { useEffect, useState } from 'react';

function Status() {
  const messages = [
    'Reading from database',
    'Assigning Ticket ID to users',
    'Connecting to Quantum Computer',
    'Performing true quantum randomizer using IBM Qiskit Aer',
    'Generating Results',
  ];
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Show modal after last message
  useEffect(() => {
    if (index === messages.length - 1) {
      console.log('DONEE');
      setIsFinished(true);
      router.push('/winner');
    }
  }, [index]);

  return (
    <div className="mt-64 flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Processing</h1>
        <div className="inline-flex">
          <div className="mr-2 h-4 w-4 animate-bounce rounded-full bg-white"></div>
          <div className="animate-bounce200 mr-2 h-4 w-4 rounded-full bg-white"></div>
          <div className="animate-bounce400 h-4 w-4 rounded-full bg-white"></div>
        </div>
        <p className="mt-4 text-2xl text-white">{messages[index]}</p>
      </div>

      {isFinished}
    </div>
  );
}

export default Status;
