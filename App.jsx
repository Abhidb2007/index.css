import { useState } from "react";
import "./App.css";
function Button(props){
  return <button onClick={props.onClickHandler}>Counter {count}</button>;
}

export default function App() {
  const [count, setcount] = useState(0);
  function onClickHandler() {
    setcount(count + 1);
  }
  return (
    <div>
      <h2>Running on:  localhost</h2>
      <Button onClickHandler={onClickHandler} count={count} />
    </div>
  );
}

