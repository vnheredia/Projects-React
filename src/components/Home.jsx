export default function Home({setPantalla}){
    return(
        <div>
        <h1>Home</h1>
        <button onClick={() => setPantalla("Sum")}>Go to Sum</button>
        <button onClick={() => setPantalla("Calculator")}>Go to Calculator</button>
        </div>
    );
}