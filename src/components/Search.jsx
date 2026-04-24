import { useState } from "react";
import Card from "./Card";

export default function Search({ onSelect, setPantalla }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const json = await res.json();
    setData(json);
  };

  return (
  <div className="container">
    <h1 className="title">Explora Series</h1>

    <div className="search-bar">
      <input
        placeholder="Buscar series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>               
      <button onClick={() => setPantalla("Home")}>Go to Home</button>
    </div>

    {data.length === 0 ? (
      <p className="empty">Busca una serie para comenzar</p>
    ) : (
      <div className="grid">
        {data.map((item, i) => (
          <Card key={i} item={item.show} onSelect={onSelect} />
        ))}
      </div>
    )}
  </div>
);
}