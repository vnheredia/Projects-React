import Badge from "../atoms/Badge"
import Button from "../atoms/Button"
import { Show } from "../../types"

interface ShowCardProps {
  item: Show
  onSelect: (item: Show) => void
}

export default function ShowCard({ item, onSelect }: ShowCardProps) {
  return (
    <div className="card">
      <img
        src={item.image?.medium ?? ""}
        alt={item.name}
      />
      <div className="card-info">
        <h4>{item.name}</h4>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", margin: "4px 0" }}>
          {item.genres.length > 0
            ? item.genres.map((genre) => (
                <Badge key={genre} text={genre} type="genre" />
              ))
            : <Badge text="No genre" type="genre" />
          }
        </div>

        <Badge text={`⭐ ${item.rating.average ?? "N/A"}`} type="rating" />

        <Button
          label="View Details"
          onClick={() => onSelect(item)}
          variant="search"
          fullWidth
        />
      </div>
    </div>
  )
}