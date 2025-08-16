import{useState, useCount, useEffect} from "react";
export default function App(){
  const[count, setCount]=useState(0);
  const[count2, setCount2]=useState(0);
}
  function increase(){
    setCount(count=count+1);
  }
  function decrease(){
    setCount(count=count+2);
  }
  return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={increase}>home</button>
    <button onClick={decrease}>afsd</button>
  </div>
  function Counter(props){

  
  useEffect (function(){
    console.log("mount");
    return function(){
      console.log("unmount");
    }

  },[]);
  useEffect(function () {
    console.log("count has changed")
    return function (){
      console.log("cleanup inside the second effect")
    }
  },[props.count]);
  return <div>
    counter1{count1}<br/>
    counter2{count2}<br/>
  </div>  
}