export default function Restaurants({ restaurants, currentRegionId, currentCategoryId }) {
  return (
    <>
      {(currentCategoryId && currentRegionId) && (
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
