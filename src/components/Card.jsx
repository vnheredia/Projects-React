export default function Card({ item, onSelect }) {
  return (
    <div className="card">
      <img
        src={item.image?.medium}
        alt={item.name}
      />

      <div className="card-info">
        <h4>{item.name}</h4>

        <p className="card-genre">
          {item.genres?.length > 0 ? item.genres.join(", ") : "Sin género"}
        </p>

        <p className="card-rating">
          ⭐ {item.rating?.average ?? "N/A"}
        </p>

        <button
          className="card-btn"
          onClick={() => onSelect(item)}
        >
          Ver más info
        </button>
      </div>
    </div>
  )
}