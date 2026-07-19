export default function App() {
  function handleClick() {
    alert("You clicked the button!");
  }

  return (
    <>
      <h1 style={{ color: "green", fontFamily: "helvetica", fontSize: "50px", textAlign: "center" }}>This is a heading.</h1>
      <p style={{ color: "purple" }}>web dev</p>
      <div style={{ padding: '1em' }}>
        <button style={{ fontFamily: "fantasy" }} onClick={handleClick}>
          Click Me
        </button>
      </div>
    </>
  );
}
