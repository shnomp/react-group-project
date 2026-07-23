import './App.css';
import { useState } from 'react';
import { calculate } from "./logic"

import garfield from './assets/garfield.jpg';
import rickroll from './assets/rickroll-roll.gif';
import sixSeven from './assets/six-seven.gif';
import brainrot from './assets/Tralalero_Tralala.webp';
import johnCena from './assets/john-cena.gif';
import chungus from './assets/Big_Chungus.png';

export default function App() {
  const [trait1, setTrait1] = useState("")
  const [trait2, setTrait2] = useState("")
  const [output, setOutput] = useState(NaN)

  let handleClick = (trait) => {
    if (trait1 === "") {
      setTrait1(trait)
    }
    else if (trait2 === "") {
      if (trait === trait1){
        return;
      }
      setTrait2(trait)
    }
    else {
      setTrait1("")
      setTrait2("")
      setOutput(NaN)
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
        <img src={output} alt="meme goes here" />
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
      </div>
    </div>
    </>
  );
}
