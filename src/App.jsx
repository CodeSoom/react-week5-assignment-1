import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadCategories,
  loadRegions,
  loadRestaurantsList,
} from './actions';
import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';
import RestaurantContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  const {
    checkedCategoryId, checkedRegion,
  } = useSelector((state) => ({
    checkedCategoryId: state.checkedCategoryId,
    checkedRegion: state.checkedRegion,
  }));

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
    dispatch(loadRestaurantsList(checkedRegion, checkedCategoryId));
  }, [checkedCategoryId, checkedRegion]);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </>
  );
}
