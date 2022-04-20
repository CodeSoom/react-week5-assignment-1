import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { selectCategoryId, selectRegionId, reginos } = useSelector((selector) => ({
    selectCategoryId: selector.selectCategoryId,
    selectRegionId: selector.selectRegionId,
    reginos: selector.regions,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [selectCategoryId, selectRegionId, reginos]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
