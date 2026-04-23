import {useState} from "react" 
export default function Sum({setPantalla}){
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const sumar=()=>{
        const resultado=parseFloat(num1)+parseFloat(num2);
        alert("The result is: "+resultado);
    };
    return(
        <div>
        <h1>Sum</h1>
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} placeholder="Number 1"/>
        <br></br>
        <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} placeholder="Number 2"/>
        <br></br>
        <button onClick={sumar}>Sum</button>
        <br></br>                    
        <button onClick={() => setPantalla("Home")}>Go to Home</button>
        </div>
    );
}