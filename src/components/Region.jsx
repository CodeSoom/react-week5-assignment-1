export default function Region({ region, onClick, selected }) {
  return (
    <button
      type="button"
      onClick={() => onClick(region.id)}
    >
      { region.name }
      { selected ? '(V)' : '' }
    </button>
  );
}
