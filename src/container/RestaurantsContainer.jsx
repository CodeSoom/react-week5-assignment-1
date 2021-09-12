import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../actions';

import Restaurants from '../presentational/Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants, checkedRegion, checkedCategory } = useSelector((state) => ({
    restaurants: state.restaurants,
    checkedRegion: state.checkedRegion,
    checkedCategory: state.checkedCategory,
  }));

  useEffect(() => {
    if (!checkedCategory || !checkedRegion) {
      return;
    }
    dispatch(loadRestaurants());
  }, [checkedRegion, checkedCategory]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
