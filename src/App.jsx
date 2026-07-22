import './App.css';
import { useState } from 'react';

export default function App() {
  function handleClick() {
    alert("You clicked the button!");
  }

  return (
    <div className='comic-sans-font'>
      <h1>the meme calculator</h1>
      <p>use at your own risk</p>
      <div>
        <button>absurd</button>
        <button>confusing</button>
      </div>
    </div>
  );
}
