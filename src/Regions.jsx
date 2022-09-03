export default function Regions({ regions, onClick, filter }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => onClick({
              field: 'region',
              content: region.name,
            })}
          >
            {region.name}
            {region.name === filter ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
