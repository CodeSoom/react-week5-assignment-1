import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories, loadRestaurants, loadRegions } from './actions';

import RegionContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RegionContainer />
      <CategoriesContainer />
    </>
  );
}
