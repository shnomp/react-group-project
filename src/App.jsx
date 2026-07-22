import './App.css';
import { useState } from 'react';

export default function App() {
  const [trait1, setTrait1] = useState("")
  const [trait2, setTrait2] = useState("")

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
    }
  }

  return (
    <div className='comic-sans-font'>
      <h1>the meme calculator</h1>
      <h2 style={{fontSize: "16px"}}>click two different traits to combine them to output a meme</h2>
      <p style={{fontSize: "12px"}}>(use at your own risk)</p>
      <div className='traits-grid'>
        <button onClick={() => {handleClick("absurd")}}>absurd</button>
        <button onClick={() => {handleClick("confusing")}}>confusing</button>
        <button onClick={() => {handleClick("classic")}}>classic</button>
        <button onClick={() => {handleClick("modern")}}>modern</button>
      </div>
      <div>
        <button>calculate</button>
      </div>
      <div>
        <h2>{trait1 + "+" + trait2}</h2>
      </div>
    </div>
  );
}
