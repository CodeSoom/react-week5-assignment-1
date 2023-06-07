import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from './action';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => state);
  const { selectedRegion, selectedCategory } = useSelector((state) => state.selectedData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRestaurants({ selectedRegion, selectedCategory }));
  }, [selectedRegion, selectedCategory]);

  return (
    <ul>
      <Restaurants restaurants={restaurants} />
    </ul>
  );
}
