export default function Regions({ currentRegion, restaurantRegions, onClick }) {
  function handleClick(e) {
    onClick(e.target.currentRegion);
  }

  return (
    <ul>
      {restaurantRegions.map((region) => {
        if (region.id === currentRegion) {
          return (
            <li key={region.id}>
              <button type='button' onClick={handleClick}>
                {`${region.name} (V)`}
              </button>
            </li>
          );
        }
        return (
          <li key={region.id}>
            <button type='button' onClick={handleClick}>
              {region.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
