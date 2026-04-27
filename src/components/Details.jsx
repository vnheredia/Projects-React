export default function Details({ item, onBack}) {
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

          <p><strong>Genres:</strong> {item.genres?.join(", ") || "N/A"}</p>
          <p><strong>Rating:</strong> ⭐{item.rating?.average ?? "N/A"}</p>
          <p><strong>State:</strong> {item.status ?? "N/A"}</p>
          <p><strong>Language:</strong> {item.language ?? "N/A"}</p>

          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: item.summary }}
          />
        </div>
      </div>
    </div>
  );
}