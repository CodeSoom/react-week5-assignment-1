export default function Categories({
  currentCategory,
  restaurantCategories,
  onClick,
}) {
  function handleClick(id) {
    onClick(id);
  }

  if (restaurantCategories.length === 0) {
    return null;
  }
  return (
    <ul>
      {restaurantCategories.map((region) => {
        const { id, name } = region;
        if (id === currentCategory) {
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleClick(id)}
              >
                {`${name} (V)`}
              </button>
            </li>
          );
        }
        return (
          <li key={id}>
            <button type="button" onClick={() => handleClick(id)}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
