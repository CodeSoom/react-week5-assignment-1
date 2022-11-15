import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories, loadRegions } from './actions';

import RegionContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
