export default function Regions({
  regions,
  checkedRegion,
  onClick,
}) {
  return (
    <ul>
      {regions.map((region) => {
        const name = checkedRegion === region.name ? `${region.name}(V)` : region.name;

        return (
          <li key={region.id}>
            <button
              type="button"
              value={region.name}
              onClick={onClick}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
