import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from './action';

export default function RestaurantsContainer() {
  const { restaurantData } = useSelector((state) => state);
  const { selectedRegion, selectedCategory } = useSelector((state) => state.selectedData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant({ selectedRegion, selectedCategory }));
  }, [selectedRegion, selectedCategory]);

  return (
    <ul>
      {restaurantData.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)}
    </ul>
  );
}
