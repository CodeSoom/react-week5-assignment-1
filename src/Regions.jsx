export default function Regions({ regions, selectedRegion }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            <button type="button">
              {region.name}
              {region.name === selectedRegion ? '(V)' : ''}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
