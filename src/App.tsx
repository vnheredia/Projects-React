import { useState } from "react"
import Home from "./pages/Home"
import Sum from "./pages/Sum"
import Calculator from "./pages/Calculator"
import Search from "./pages/Search"
import Details from "./pages/Details"
import { Screen, Show } from "./types"


function App() {

  const [pantalla, setPantalla] = useState<Screen>("home")
  const [itemSeleccionado, setItemSeleccionado] = useState<Show | null>(null)

  const handleSelect = (item: Show): void => {
    setItemSeleccionado(item)
    setPantalla("details")
  }

  return (
    <div>
      {pantalla === "home" && <Home setPantalla={setPantalla} />}
      {pantalla === "sum" && <Sum setPantalla={setPantalla} />}
      {pantalla === "calculator" && <Calculator setPantalla={setPantalla} />}
      {pantalla === "search" && (
        <Search setPantalla={setPantalla} onSelect={handleSelect} />
      )}
      {pantalla === "details" && itemSeleccionado && (
        <Details item={itemSeleccionado} onBack={() => setPantalla("search")} />
      )}
    </div>
  )
}

export default App