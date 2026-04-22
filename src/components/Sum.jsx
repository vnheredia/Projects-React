export default function Sum({setPantalla}){
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    return(
        <div>
        <h1>Sum</h1>
        <button onClick={() => setPantalla("Home")}>Go to Home</button>
        </div>
    );
}