import React, { useState } from "react";
import ReactDOM from "react-dom";

const History = props => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing buttons</div>;
  }

  return <div>button press history: {props.allClicks.join("")}</div>;
}; //Conditional rendering: powerful stuff here.

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  //When the buttons are clicked, the respective letter(s) are stored in the array allClicks
  //Push method would also work to add to array BUT don't do this: state of Reach components must NOT be mutated directly. Can lead to problems even if it
  //doesn't seem to be an issue.

  const handleLeftClick = () => {
    setAll(allClicks.concat("Poo"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("POO"));
    setRight(right + 1);
  };

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
    //"join" method joins all the items into a single string; separated by the string passed as a function paramter, in our case an empty space.
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
