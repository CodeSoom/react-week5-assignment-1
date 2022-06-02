export default function Regions({ regions, clickedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}><button type="button" onClick={() => onClick(region)}>{clickedRegion.id === region.id ? `${region.name}(V)` : region.name}</button></li>
        ))
      }
    </ul>
  );
}
