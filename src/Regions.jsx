export default function Regions({ currentRegion, restaurantRegions, onClick }) {
  function handleClick(id) {
    onClick(id);
  }

  if (restaurantRegions.length === 0) {
    return null;
  }
  return (
    <ul>
      {restaurantRegions.map((region) => {
        const { id, name } = region;
        if (id === currentRegion) {
          return (
            <li key={id}>
              <button
                type='button'
                onClick={() => handleClick(id)}
              >{`${name} (V)`}</button>
            </li>
          );
        }
        return (
          <li key={id}>
            <button type='button' onClick={() => handleClick(id)}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
