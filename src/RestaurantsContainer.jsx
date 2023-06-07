import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from './action';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants, selectedRegion, selectedCategory } = useSelector((state) => ({
    restaurants: state.restaurants,
    selectedRegion: state.selectedRegionAndCategory.selectedRegion,
    selectedCategory: state.selectedRegionAndCategory.selectedCategory,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const isEmptyObject = (object) => Object.keys(object || {}).length === 0;

    if (isEmptyObject(selectedRegion) || isEmptyObject(selectedCategory)) {
      return;
    }
    dispatch(loadRestaurants(selectedRegion, selectedCategory));
  }, [selectedRegion, selectedCategory]);

  return (
    <ul>
      <Restaurants restaurants={restaurants} />
    </ul>
  );
}
