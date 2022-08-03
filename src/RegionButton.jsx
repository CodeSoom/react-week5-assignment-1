export default function RegionButton({ name, selected, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
      >
        {name}
        {selected && '(V)'}
      </button>
    </div>
  );
}
