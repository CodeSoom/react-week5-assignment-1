export default function RegionContainer({ regions }) {
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button">
              {region.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
