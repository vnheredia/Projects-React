export default function Home({setPantalla}){
    return(
        <div>
        <h1>Home</h1>
        <button onClick={() => setPantalla("Sum")}>Go to Sum</button>
        <br></br>
        <button onClick={() => setPantalla("Calculator")}>Go to Calculator</button>
        <br></br>
        <button onClick={() => setPantalla("Search")}>Go to Search</button>
        </div>
    );
}