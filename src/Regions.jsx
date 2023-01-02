const Regions = ({ regions, onUpdateCheckedRegion }) => (
  <ul>
    {regions.map((region) => (
      <li key={region.id}>
        <button type="button" onClick={() => onUpdateCheckedRegion(region.id)}>
          {region.name}
          {region.checked ? '(V)' : null }
        </button>
      </li>
    ))}
  </ul>
);
export default Regions;
