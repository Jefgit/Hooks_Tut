import { useState, useEffect } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <h1>{count}</h1>;
};

export default IntervalCounter;
