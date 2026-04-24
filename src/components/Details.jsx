export default function Details({ item, onBack}) {
  return (
    <div className="detail-container">
      <button onClick={() => setPantalla("Search")}>Go to Search</button>

      <div className="detail-card">
        <img
          className="detail-img"
          src={item.image?.original}
          alt=""
        />

        <div className="detail-text">
          <h1>{item.name}</h1>

          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: item.summary }}
          />
        </div>
      </div>
    </div>
  );
}