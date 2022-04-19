export default function Regions({ regions, regionName, onRegionClick }) {
  if (!regions || regions.length === 0) {
    return <>지역이 없어요!</>;
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={() => onRegionClick({ value: region.name })}>
            {region.name}
            {regionName === region.name ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
