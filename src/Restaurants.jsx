import { useSelector } from 'react-redux';

export default function Restaurants() {
  const { restaurants, currentRegionId, currentCategoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    currentRegionId: state.currentRegionId,
    currentCategoryId: state.currentCategoryId,
  }));

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
