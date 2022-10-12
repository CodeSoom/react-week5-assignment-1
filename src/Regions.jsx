export default function Regions({ regions, regionName, handleClick }) {
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => handleClick(region.name)}
            >
              {
                region.name === regionName
                  ? `${region.name}(V)`
                  : region.name
              }
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
