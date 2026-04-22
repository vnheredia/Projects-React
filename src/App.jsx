import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const sumar = () => {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert("The result is: " + resultado);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sumar dos números</h2>

      <p>Number 1</p>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />
      <p>Number 2</p>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <button onClick={sumar}>Result</button>
    </div>
  );
}