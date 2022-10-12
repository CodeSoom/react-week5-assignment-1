export default function Regions({ regions, selectRegionId, handleClick }) {
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {
                region.id === selectRegionId
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
