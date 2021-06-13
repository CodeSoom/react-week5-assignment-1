export default function Region({ regions, onClick, selectedRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name}
            {selectedRegion && id === selectedRegion.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
