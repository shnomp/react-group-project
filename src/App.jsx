import './App.css';
import { useState } from 'react';

export default function App() {
  function handleClick() {
    alert("You clicked the button!");
  }

  return (
    <div className='comic-sans-font'>
      <h1>the meme calculator</h1>
      <h2 style={{fontSize: "16px"}}>click two different traits to combine them to output a meme</h2>
      <p>(use at your own risk)</p>
      <div className='traits-grid'>
        <button>absurd</button>
        <button>confusing</button>
        <button>classic</button>
        <button>modern</button>
      </div>
    </div>
  );
}
