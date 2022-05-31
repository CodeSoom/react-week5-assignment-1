export default function Restaurants({ restaurants, currentRegionId, currentCategoryId }) {
  return (
    <>
      {(currentCategoryId >= 0 && currentRegionId >= 0) && (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
