export default function Region({ region, isSelected, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(region.name)}
      >
        {region.name}
        {isSelected ? '(V)' : ''}
      </button>
    </li>
  );
}
