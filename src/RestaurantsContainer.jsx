import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurantsList } from './actions';
import Restaurants from './Restaurants';

export default function RestaurantContainer() {
  const dispatch = useDispatch();
  const {
    restaurantsList, checkedCategoryId, checkedRegion,
  } = useSelector((state) => ({
    restaurantsList: state.restaurantsList,
    checkedCategoryId: state.checkedCategoryId,
    checkedRegion: state.checkedRegion,

  }));

  useEffect(() => {
    dispatch(loadRestaurantsList(checkedRegion, checkedCategoryId));
  }, [checkedCategoryId, checkedRegion]);

  return (
    <Restaurants
      restaurants={restaurantsList}
    />
  );
}
