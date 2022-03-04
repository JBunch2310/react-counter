import { useState, useEffect } from "react";
import Coffees from "./Coffees";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(500);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <div className="button-container">
          <button onClick={() => setCounter(0)}> RESET</button>
          <button onClick={() => setCounter(counter - 1)}> - </button>
          <button onClick={() => setCounter(counter + 1)}> + </button>
        </div>
        <Coffees />
      </header>
    </div>
  );
}

export default App;