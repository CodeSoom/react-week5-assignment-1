export default function Regions({
  regions,
  checkedRegion,
  onClick,
}) {
  return (
    <ul>
      {regions.map((region) => {
        const checked = checkedRegion === region.name;

        return (
          <li key={region.id}>
            <button
              type="button"
              value={region.name}
              onClick={onClick}
            >
              {region.name}
              {checked && '(V)'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
