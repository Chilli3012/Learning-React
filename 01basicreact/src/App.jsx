import { useState } from "react";


function App() {

  // let counter=5;

  let [counter,setCounter]=useState(15);

  function addValue() {
    if(counter+1<=20){ 
      counter++;
      setCounter(counter);
      console.log("value added: ", Math.random());
    }
  }

  function decValue() {
    if(counter-1>=0){
      counter--;
      setCounter(counter);
      console.log("value dec: ", Math.random()); 
    }
  }


  return (
    <>
      <h1>Hello Anurag</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue} >Add Value</button>
      <br/>
      <button onClick={decValue} >Decrease Value</button>
    </>
  )
}

export default App
