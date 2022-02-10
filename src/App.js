import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button
        onClick={ () => setCounter(counter +1)}> + </button>
        &nbsp;
        <button> RESET </button>
        &nbsp;
        <button
        onClick={() => setCounter(0)}
        > RESET</button>
        &nbsp;
        <button
        onClick={() => setCounter(counter -1)}
        > - </button>
      </header>
    </div>
  );
}

export default App;
