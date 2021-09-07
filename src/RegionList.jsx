export default function RegionList({ regions, onClick, selectedRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ id, name })}
          >
            {id === selectedRegion.id ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
