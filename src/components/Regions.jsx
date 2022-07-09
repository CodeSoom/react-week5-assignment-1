export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            <button type="button" onClick={() => onClick(region.name)}>
              {region.name}
              {selectedRegion === region.name && '(V)'}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
