export default function Region({
  onClick,
  regions,
  selectedRegion,
  setSelectedRegion,
}) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={regions.id}>
          <button type="button" onClick={onClick(setSelectedRegion, region)}>
            {selectedRegion.id !== region.id ? (`${region.name}`) : (`${region.name}(V)`)}
          </button>
        </li>
      ))}
    </ul>
  );
}
