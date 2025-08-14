import { useState } from "react";
import "./App.css";

// Button component
function Button(props) {
  return <button onClick={props.onClickHandler}>Counter {props.count}</button>;
}

export default function App() {
  const [count, setCount] = useState(0); // use camelCase for convention

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Running on: <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a></h2>
      {/* Pass count and click handler as props */}
      <Button onClickHandler={onClickHandler} count={count} />
    </div>
  );
}
