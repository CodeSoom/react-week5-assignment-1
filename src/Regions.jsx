export default function Regions({ regions, clickedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}><button type="button" onClick={onClick}>{clickedRegion === region.name ? `${region.name}(V)` : region.name}</button></li>
        ))
      }
    </ul>
  );
}
