import React, { useState, useEffect } from 'react';

function Clicker() {
  const [count, setCount] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Кликер</h1>
      <button onClick={handleClick}>Кликни меня</button>
      <p>Количество кликов: {count}</p>
      <p>Миллисекунды: {milliseconds}</p>
    </div>
  );
}

export default Clicker;