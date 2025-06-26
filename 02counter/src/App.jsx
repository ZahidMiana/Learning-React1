import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5);

  //let Counter = 5;

  const addValue = () => {
    console.log("Clicked", Counter);
    // Counter = Counter + 1;
    // setCounter(Counter);
    if(Counter >= 20)
    {
      console.log("Not Above Twenty");
    }
    else
    {
      setCounter(Counter + 1);
    }
  }

  const removeValue = () =>{
    // console.log("Clicked", Counter);
    // setCounter(Counter - 1);
    if(Counter <= 0)
    {
      console.log('Not Below then zero');
    }
    else{
      setCounter(Counter - 1);
    }
    
  }


  return (
    <>
      <h1>Chai aur Miana</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
