export default function Card({ item, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(item)}>
      <img src={item.image?.medium} alt="" />
      <h4>{item.name}</h4>
    </div>
  );
}