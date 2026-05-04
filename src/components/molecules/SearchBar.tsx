import Button from "../atoms/Button"
import { Screen } from "../../types"

interface SearchBarProps {
  query: string
  onQueryChange: (value: string) => void
  onSearch: () => void
  setPantalla: (screen: Screen) => void
}

export default function SearchBar({ query, onQueryChange, onSearch, setPantalla }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") onSearch()
  }

  return (
    <div className="search-bar">
      <input
        placeholder="Search series..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button label="Search" onClick={onSearch} variant="search" />
      <Button label="Go to Home" onClick={() => setPantalla("home")} variant="home" />
    </div>
  )
}