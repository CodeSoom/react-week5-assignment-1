export default function Region({ region, onClick, isSelected }) {
  return (
    <button
      type="button"
      onClick={() => onClick(region)}
    >
      { region.name }
      { isSelected ? '(V)' : '' }
    </button>
  );
}
