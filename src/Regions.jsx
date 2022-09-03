export default function Regions({ regions, onClick }) {
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
          </button>
        </li>
      ))}
    </ul>
  );
}
