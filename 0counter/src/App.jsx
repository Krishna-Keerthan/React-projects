import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter , setCounter] = useState(5);

let addValue = () => {
  if (counter < 20){

    setCounter(counter + 1);
  }


}

let subValue =() =>{
  if (counter >0){

    setCounter(counter - 1);
  }

  
}

  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue} >Add {counter}</button>
      <br />
      <button onClick={subValue} >Sub {counter}</button>
    </>
  )
}

export default App
