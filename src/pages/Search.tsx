import { useState } from "react"
import Card from "../components/Card"         
import { searchShows } from "../services/tvmaze" 
import { Screen, Show, SearchResult } from "../types"

interface SearchProps {
  setPantalla: (screen: Screen) => void
  onSelect: (item: Show) => void
}

export default function Search({ onSelect, setPantalla }: SearchProps) {
  const [query, setQuery] = useState<string>("")
  const [data, setData] = useState<SearchResult[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (): Promise<void> => {
    try {
      setError(null)
      const results = await searchShows(query)  
      setData(results)
    } catch (e) {
      setError("Error al buscar. Intenta de nuevo.")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Search Series</h1>
      <div className="search-bar">
        <input
          placeholder="Search series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn search" onClick={handleSearch}>Search</button>
        <button className="btn home" onClick={() => setPantalla("home")}>Go to Home</button>
      </div>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {data.length === 0 ? (
        <p className="empty">Search for a series to begin</p>
      ) : (
        <div className="grid">
          {data.map((item, i) => (
            <Card key={i} item={item.show} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}