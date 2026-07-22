import './App.css';

export default function App() {
  function handleClick() {
    alert("You clicked the button!");
  }

  return (
    <div className='comic-sans-font'>
      <h1>the meme calculator</h1>
      <p>use at your own risk</p>
      <div style={{ padding: '1em' }}>
        <button style={{ fontFamily: "fantasy" }} onClick={handleClick}>
          Click Me
        </button>
      </div>
    </div>
  );
}
