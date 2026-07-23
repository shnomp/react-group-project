import './App.css';
import { useState } from 'react';
import { calculate } from "./logic"

export default function App() {
  const [trait1, setTrait1] = useState("")
  const [trait2, setTrait2] = useState("")
  const [output, setOutput] = useState("")

  let handleClick = (trait) => {
    if (trait1 === "") {
      setTrait1(trait)
    }
    else if (trait2 === "") {
      setTrait2(trait)
    }
    else {
      setTrait1("")
      setTrait2("")
      setOutput("")
    }
  }

  let calculateHandle = () => {
    let result = calculate(trait1, trait2);
    setOutput(result);
  }

  return (
    <>
    <div className='title'>
      <h1>the meme calculator</h1>
      <h2 style={{fontSize: "16px"}}>click two different traits to combine them to output a meme</h2>
      <p style={{fontSize: "12px"}}>(use at your own risk)</p>
      </div>

      <div className = 'calculator-base'> 
      <div className = 'display-bar'>
        <span className = 'display-value'> {output} </span>
        </div>

      <div className='traits-grid'>
        <button onClick={() => {handleClick("absurd")}}>absurd</button>
        <button onClick={() => {handleClick("strange")}}>strange</button>
        <button onClick={() => {handleClick("classic")}}>classic</button>
        <button onClick={() => {handleClick("modern")}}>modern</button>
      </div>
      <div>
        <button onClick = {calculateHandle}> calculate</button>
      </div>
      <div>
        <h2>{trait1 + "+" + trait2}</h2>
        <h2>{output}</h2>
      </div>
    </div>
    </>
  );
}
