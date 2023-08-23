import { useState, useEffect } from "react";

const CounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("updating");
  }, []);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default CounterOne;
