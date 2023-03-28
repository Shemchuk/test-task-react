import React, { useState } from 'react';
import './StartButton.css';

const StartButton = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  const handleClick = () => {
    setTimeLeft(5);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setTimeLeft(0);
    }, 5000);

  };

  return (
    <button
      className={'start-button'}
      onClick={handleClick}
      disabled={timeLeft > 0}
    >
      {timeLeft > 0 ? `${ timeLeft }s` : 'START'}
    </button>
  );
};

export default StartButton;
