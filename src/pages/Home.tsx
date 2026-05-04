import Button from "../components/atoms/Button"
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
        <Button label="Go to Sum" onClick={() => setPantalla("sum")} variant="sum" />
        <Button label="Go to Calculator" onClick={() => setPantalla("calculator")} variant="calculator" />
        <Button label="Go to Search" onClick={() => setPantalla("search")} variant="search" />
      </div>
    </div>
  )
}