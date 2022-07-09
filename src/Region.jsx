export default function Region({
  onClick,
  regions,
  selectedRegion,
}) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={() => onClick(region.id)}>
            {selectedRegion?.id !== region.id ? (`${region.name}`) : (`${region.name}(V)`)}
          </button>
        </li>
      ))}
    </ul>
  );
}
