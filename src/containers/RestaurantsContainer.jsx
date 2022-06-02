import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../actions';

import Restaurants from '../components/Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { restaurants, selectRegionName, selectCategoryId } = useSelector(
    (state) => ({
      restaurants: state.restaurants,
      selectRegionName: state.regionName.name,
      selectCategoryId: state.categoryId.id,
    }),
  );

  useEffect(() => {
    if (selectRegionName && selectCategoryId) {
      dispatch(loadRestaurants(selectRegionName, selectCategoryId));
    }
  }, [selectRegionName, selectCategoryId]);

  return (
    <>
      <Restaurants restaurants={restaurants} />
    </>
  );
}
