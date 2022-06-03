export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}><button type="button" onClick={() => onClick(region)}>{selectedRegion.id === region.id ? `${region.name}(V)` : region.name}</button></li>
        ))
      }
    </ul>
  );
}
