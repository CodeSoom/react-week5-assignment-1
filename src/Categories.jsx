export default function Categories({
  currentCategory,
  restaurantCategories,
  onClick,
}) {
  if (restaurantCategories.length === 0) {
    return <p>없어요</p>;
  }
  return (
    <ul>
      {restaurantCategories.map((region) => {
        const { id, name } = region;
        if (id === currentCategory) {
          return (
            <li key={id}>
              <button type='button' onClick={() => onClick(id)}>
                {`${name} (V)`}
              </button>
            </li>
          );
        }
        return (
          <li key={id}>
            <button type='button' onClick={() => onClick(id)}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
