import { Show } from "../types"

interface CardProps {
  item: Show
  onSelect: (item: Show) => void
}

export default function Card({ item, onSelect }: CardProps) {
  return (
    <div className="card">
      <img src={item.image?.medium ?? ""} alt={item.name} />
      <div className="card-info">
        <h4>{item.name}</h4>
        <p className="card-genre">
          {item.genres.length > 0 ? item.genres.join(", ") : "Sin género"}
        </p>
        <p className="card-rating">
          ⭐ {item.rating.average ?? "N/A"}
        </p>
        <button className="card-btn" onClick={() => onSelect(item)}>
          View more info
        </button>
      </div>
    </div>
  )
}