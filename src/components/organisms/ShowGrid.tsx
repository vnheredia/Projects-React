import ShowCard from "../molecules/ShowCard"
import { Show, SearchResult } from "../../types"

interface ShowGridProps {
  data: SearchResult[]
  onSelect: (item: Show) => void
}

export default function ShowGrid({ data, onSelect }: ShowGridProps) {
  if (data.length === 0) {
    return <p className="empty">Search for a series to begin</p>
  }

  return (
    <div className="grid">
      {data.map((item) => (
        <ShowCard
          key={item.show.id}
          item={item.show}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}