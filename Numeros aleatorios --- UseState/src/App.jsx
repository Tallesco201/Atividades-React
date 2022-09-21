import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  function numberRandom() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <button onClick={numberRandom}>Gerar Numero</button>
      </header>
    </div>
  );
}

export default App;
