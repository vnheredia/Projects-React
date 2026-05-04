import { useState } from "react"
import SearchBar from "../components/molecules/SearchBar"
import ShowGrid from "../components/organisms/ShowGrid"
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
    if (query.trim() === "") return
    try {
      setError(null)
      const results = await searchShows(query)
      setData(results)
    } catch {
      setError("Error searching. Please try again.")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Search Series</h1>

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
        setPantalla={setPantalla}
      />

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <ShowGrid data={data} onSelect={onSelect} />
    </div>
  )
}