import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegions,
  loadCategories,
} from './store/async-actions';

import RegionsContainer from './containers/RegionsContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
