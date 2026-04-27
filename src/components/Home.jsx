import '../Button.css'
export default function Home({setPantalla}){
    return(
    <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Home</h1>
        <p>Projects with React</p>
        
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>

            <button className="btn sum" onClick={() => setPantalla("Sum")}>Go to Sum</button>
            <br></br>
            <button className="btn calculator" onClick={() => setPantalla("Calculator")}>Go to Calculator</button>
            <br></br>
            <button className="btn search" onClick={() => setPantalla("Search")}>Go to Search</button>
            
        </div>

    </div>
    );
}