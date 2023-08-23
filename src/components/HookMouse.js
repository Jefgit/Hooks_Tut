import { useState, useEffect } from "react";

const HookMouse = () => {
  const [posMouse, setPosMouse] = useState({
    x: 0,
    y: 0
  });

  const logMousePosition = (e) => {
    setPosMouse({ ...posMouse, x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("useffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <p>{`X-${posMouse.x} Y-${posMouse.y}`}</p>
    </div>
  );
};

export default HookMouse;
