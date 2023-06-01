import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from './action';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurantData } = useSelector((state) => state);
  const { selectedRegion, selectedCategory } = useSelector((state) => state.selectedData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant({ selectedRegion, selectedCategory }));
  }, [selectedRegion, selectedCategory]);

  return (
    <ul>
      <Restaurants restaurantData={restaurantData} />
    </ul>
  );
}
