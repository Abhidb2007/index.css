import {useState} from "react";
function app(){
  return <div>
    <h1>hi</h1>
    <counter></counter>
  </div>
}
function Counter(){ 
  const[count, setCount]=useState(0);
function increaseCount(){
    setCount(count+1);
}  
function decreaseCount(){
  setCount(count-1);
}
  return <div>
    <h1 id="text">{count}
    </h1>
    <button>click me</button>
  </div>

}
export default App