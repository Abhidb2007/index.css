import {useState} from "react";
function App(){
  return <div>
    <h1>hi</h1>
    <counter></counter>
  </div>
}
function Counter(){ 
  const[count, setCount]=useState(0);
console.log("counter");

  return <div>
    <h1 id="text">{count}
    </h1>
    <button>click me</button>
  </div>

}
export default App