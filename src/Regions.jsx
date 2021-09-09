export default function Regions({ regions, onClickRegion, checkedRegionText }) {
  return (
    <ul>
      {regions
        && regions.map((region) => (<li key={region.id}><button type="button" onClick={onClickRegion}>{checkedRegionText === region.name ? `${region.name}(V)` : region.name}</button></li>))}
    </ul>
  );
}
