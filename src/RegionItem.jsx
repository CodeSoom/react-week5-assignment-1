export default function RegionItem({ region, onClick, isSelected }) {
  const { id, name } = region;

  return (
    <li>
      <button
        type="button"
        onClick={() => onClick({
          field: 'selectedRegion',
          value: { id, name },
        })}
      >
        {isSelected ? `${name}(V)` : name}
      </button>
    </li>
  );
}
