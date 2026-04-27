import {useState} from 'react'
export default function Calculator({setPantalla}){

    const [display, setDisplay] = useState("0");
    const [operacion, setOperacion] = useState(null);
    const [primNum, setPrimNum] = useState(null);
    const [esperandoNum, setEsperandoNum] = useState(false);

    const apretarNumero = (num) => {
        if (esperandoNum) {
            setDisplay(String(num));
            setEsperandoNum(false);
        } else {
            setDisplay(display === "0" ? String(num) : display + num);
        }
    };

    const apretarOperacion = (op) => {
            setPrimNum(parseFloat(display))
            setOperacion(op)
            setEsperandoNum(true)
    };

    const calcular = () => {    
       if (operacion === null || primNum === null) return
            const segNum = parseFloat(display);
            let resultado = 0

            if (operacion === "+") resultado = primNum + segNum;
            if (operacion === "-") resultado = primNum - segNum;
            if (operacion === "*") resultado = primNum * segNum;
            if (operacion === "/") resultado = segNum !== 0 ? primNum / segNum   : "Error"
        
            setDisplay(String(resultado))
            setOperacion(null)
            setPrimNum(null)
            setEsperandoNum(false)
        }

        const borrarUltimo =() => {
            if (display.length === 1) {
                setDisplay("0")
            }else{
                setDisplay(display.slice(0,-1))
            }
        }

        const borrarTodo = () => {
            setDisplay("0")
            setOperacion(null)
            setPrimNum(null)
            setEsperandoNum(false)
        }

    return(
        <>
        <div style={{
            background: "#222",
            color: "white",
            fontSize: "2rem",
            padding: "10px 20px",
            width: "200px",
            margin: "0 auto 10px",
            textAlign: "right",
            borderRadius: "5px"
            }}>
            {display}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "15px", justifyContent: "center" }}>
        <button onClick={borrarTodo} style={{ gridColumn: "span 2", background: "#ff4444", color: "white" }}>AC</button>
        <button onClick={borrarUltimo} style={{ background: "#ff9900", color: "white" }}>⌫</button>
        <button onClick={() => apretarOperacion("/")} style={{ background: "#ff9900", color: "white" }}>/</button>

        <button onClick={() => apretarNumero("7")}>7</button>
        <button onClick = {() => apretarNumero("8")}>8</button>
        <button onClick = {() => apretarNumero("9")}>9</button>
        <button onClick={() => apretarOperacion("*")} style={{ background: "#ff9900", color: "white" }}>*</button>

        <button onClick ={() => apretarNumero("4")}>4</button>
        <button onClick ={() => apretarNumero("5")}>5</button>
        <button onClick ={() => apretarNumero("6")}>6</button>
        <button onClick={() => apretarOperacion("-")} style={{ background: "#ff9900", color: "white" }}>-</button>

        <button onClick ={() => apretarNumero("1")}>1</button>
        <button onClick ={() => apretarNumero("2")}>2</button>
        <button onClick ={() => apretarNumero("3")}>3</button>
        <button onClick={() => apretarOperacion("+")} style={{ background: "#ff9900", color: "white" }}>+</button>

        <button onClick ={() => apretarNumero("0")}>0</button>
        <button onClick ={() => apretarNumero(".")}>.</button>
        <button onClick={calcular} style={{ gridColumn: "span 2", background: "#00cc00", color: "white" }}>=</button>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px"}}>
        <button className="btn home" onClick={() => setPantalla("Home")}>Go to Home</button>
        </div>
        </div>
        </>
    )
}