export default function Calculator({setPantalla}){
    return(
        <div>
        <h1>Calculator</h1>
        <button onClick={() => setPantalla("Home")}>Go to Home</button>
        </div>
    );
}