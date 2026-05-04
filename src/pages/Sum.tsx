import { useState } from "react"
import { Screen } from "../types"

interface SumProps {
  setPantalla: (screen: Screen) => void
}

export default function Sum({ setPantalla }: SumProps) {
  const [num1, setNum1] = useState<string>("")
  const [num2, setNum2] = useState<string>("")
  const [resultado, setResultado] = useState<number | null>(null)

  const sumar = (): void => {
    const res = parseFloat(num1) + parseFloat(num2)
    setResultado(res)  // mostramos en pantalla, no alert()
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
      <h1>Sum</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <button className="btn sum" onClick={sumar}>Sum</button>

      {resultado !== null && <h3>Result: {resultado}</h3>}

      <button className="btn home" onClick={() => setPantalla("home")}>
        Go to Home
      </button>
    </div>
  )
}