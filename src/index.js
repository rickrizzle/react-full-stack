import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  const handleLeftClicks = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    };
    setClicks(newClicks);
  };

  const handleRightClicks = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    };
    setClicks(newClicks);
  };
  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClicks}>left</button>
        <button onClick={handleRightClicks}>right</button>
        {clicks.right}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
