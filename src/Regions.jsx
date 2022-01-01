export default function Regions({ currentRegion, restaurantRegions, onClick }) {
  function handleClick(name) {
    onClick(name);
  }

  if (restaurantRegions.length === 0) {
    return null;
  }
  return (
    <ul>
      {restaurantRegions.map(({ id, name }) => {
        if (name === currentRegion) {
          return (
            <li key={id}>
              <button type='button'>{`${name} (V)`}</button>
            </li>
          );
        }
        return (
          <li key={id}>
            <button type='button' onClick={() => handleClick(name)}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
