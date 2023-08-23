import { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        {display ? "hide" : "show"}
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
