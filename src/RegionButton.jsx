export default function RegionButton({ name, selected, onClick }) {
  return (
    <div>
      <button
        type="button"
        name={name}
        onClick={(e) => onClick(e.target.name)}
      >
        {name}
        {selected && '(V)'}
      </button>
    </div>
  );
}
