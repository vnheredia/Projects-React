import { Screen } from "../types"

interface HomeProps {
  setPantalla: (screen: Screen) => void
}

export default function Home({ setPantalla }: HomeProps) {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Home</h1>
      <p>Projects with React</p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
        <button className="btn sum" onClick={() => setPantalla("sum")}>
          Go to Sum
        </button>
        <button className="btn calculator" onClick={() => setPantalla("calculator")}>
          Go to Calculator
        </button>
        <button className="btn search" onClick={() => setPantalla("search")}>
          Go to Search
        </button>
      </div>
    </div>
  )
}