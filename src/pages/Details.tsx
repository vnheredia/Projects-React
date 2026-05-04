import { Show } from "../types"

interface DetailsProps {
  item: Show
  onBack: () => void
}

export default function Details({ item, onBack }: DetailsProps) {
  return (
    <div className="detail-container">
      <button className="btn search" onClick={onBack}>Go to Search</button>
      <div className="detail-card">
        <img
          className="detail-img"
          src={item.image?.original ?? item.image?.medium ?? ""}
          alt={item.name}
        />
        <div className="detail-text">
          <h1>{item.name}</h1>
          <p><strong>Genres:</strong> {item.genres.join(", ") || "N/A"}</p>
          <p><strong>Rating:</strong> ⭐ {item.rating.average ?? "N/A"}</p>
          <p><strong>State:</strong> {item.status}</p>
          <p><strong>Language:</strong> {item.language}</p>

          {item.summary ? (
            <div className="summary" dangerouslySetInnerHTML={{ __html: item.summary }} />
          ) : (
            <p>No description available.</p>
          )}
        </div>
      </div>
    </div>
  )
}