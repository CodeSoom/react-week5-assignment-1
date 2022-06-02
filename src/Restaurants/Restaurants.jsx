import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from '../app/actions';

export default function Restaurants() {
  const dispatch = useDispatch();
  const { restaurants, currentRegionId, currentCategoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    currentRegionId: state.currentRegionId,
    currentCategoryId: state.currentCategoryId,
  }));

  useEffect(() => {
    if (currentRegionId && currentCategoryId) {
      dispatch(loadRestaurants());
    }
  }, [currentRegionId, currentCategoryId]);

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
