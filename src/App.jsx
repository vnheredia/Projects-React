import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Sum from './components/Sum';
import Calculator from './components/Calculator';
import Search from './components/Search';
import Details from './components/Details';

export default function App() {
  const [pantalla, setPantalla] = useState("Home");
  const [itemSeleccionado, setItemSeleccionado] = useState(null)

  const handleSelect = (item) => {
    setItemSeleccionado(item)
    setPantalla("Details")
  }

  return (
    <div>
      {pantalla === "Home" && (<Home setPantalla={setPantalla}/>)}
      {pantalla === "Sum" && (<Sum setPantalla={setPantalla}/>)}
      {pantalla === "Calculator" && (<Calculator setPantalla={setPantalla}/>)}
      {pantalla === "Search" && (<Search setPantalla={setPantalla} onSelect={handleSelect}/>)}
      {pantalla === "Details" && (<Details item={itemSeleccionado} onBack={()=> setPantalla("Search")}/>)}
    </div>
  );
}