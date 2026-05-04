import { useState } from "react"
import { Screen } from "../types"

interface CalculatorProps {
  setPantalla: (screen: Screen) => void
}

export default function Calculator({ setPantalla }: CalculatorProps) {
  const [display, setDisplay] = useState<string>("0")
  const [operacion, setOperacion] = useState<string | null>(null)
  const [primNum, setPrimNum] = useState<number | null>(null)
  const [esperandoNum, setEsperandoNum] = useState<boolean>(false)

  const apretarNumero = (num: string): void => {
    if (esperandoNum) {
      setDisplay(num)
      setEsperandoNum(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const apretarOperacion = (op: string): void => {
    setPrimNum(parseFloat(display))
    setOperacion(op)
    setEsperandoNum(true)
  }

  const calcular = (): void => {
    if (operacion === null || primNum === null) return
    const segNum = parseFloat(display)
    let resultado: number | string = 0

    if (operacion === "+") resultado = primNum + segNum
    if (operacion === "-") resultado = primNum - segNum
    if (operacion === "*") resultado = primNum * segNum
    if (operacion === "/") resultado = segNum !== 0 ? primNum / segNum : "Error"

    setDisplay(String(resultado))
    setOperacion(null)
    setPrimNum(null)
    setEsperandoNum(false)
  }

  const borrarUltimo = (): void => {
    if (display.length === 1) {
      setDisplay("0")
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  const borrarTodo = (): void => {
    setDisplay("0")
    setOperacion(null)
    setPrimNum(null)
    setEsperandoNum(false)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      {/* Pantalla */}
      <div style={{
        background: "#222", color: "white", fontSize: "2rem",
        padding: "10px 20px", width: "200px", margin: "0 auto 10px",
        textAlign: "right", borderRadius: "5px"
      }}>
        {display}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "15px", justifyContent: "center" }}>
        <button onClick={borrarTodo} style={{ gridColumn: "span 2", background: "#ff4444", color: "white" }}>AC</button>
        <button onClick={borrarUltimo} style={{ background: "#ff9900", color: "white" }}>⌫</button>
        <button onClick={() => apretarOperacion("/")} style={{ background: "#ff9900", color: "white" }}>/</button>

        <button onClick={() => apretarNumero("7")}>7</button>
        <button onClick={() => apretarNumero("8")}>8</button>
        <button onClick={() => apretarNumero("9")}>9</button>
        <button onClick={() => apretarOperacion("*")} style={{ background: "#ff9900", color: "white" }}>*</button>

        <button onClick={() => apretarNumero("4")}>4</button>
        <button onClick={() => apretarNumero("5")}>5</button>
        <button onClick={() => apretarNumero("6")}>6</button>
        <button onClick={() => apretarOperacion("-")} style={{ background: "#ff9900", color: "white" }}>-</button>

        <button onClick={() => apretarNumero("1")}>1</button>
        <button onClick={() => apretarNumero("2")}>2</button>
        <button onClick={() => apretarNumero("3")}>3</button>
        <button onClick={() => apretarOperacion("+")} style={{ background: "#ff9900", color: "white" }}>+</button>

        <button onClick={() => apretarNumero("0")}>0</button>
        <button onClick={() => apretarNumero(".")}>.</button>
        <button onClick={calcular} style={{ gridColumn: "span 2", background: "#00cc00", color: "white" }}>=</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button className="btn home" onClick={() => setPantalla("home")}>
          Go to Home
        </button>
      </div>
    </div>
  )
}