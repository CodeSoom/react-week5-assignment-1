import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
