import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home';
import Sum from './components/Sum';
import Calculator from './components/Calculator';

export default function App() {
  const [pantalla, setPantalla] = useState("Home");

  return (
    <div>
      {pantalla === "Home" && (<Home setPantalla={setPantalla}/>)}
      {pantalla === "Sum" && (<Sum setPantalla={setPantalla}/>)}
      {pantalla === "Calculator" && (<Calculator setPantalla={setPantalla}/>)}
    </div>
  );
}