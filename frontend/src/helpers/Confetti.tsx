import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';

function Confetti() {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      particleWidth: 30,
      particleHeight: 30,
    };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const id = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(intervalId);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  return null;
}

export default Confetti;
