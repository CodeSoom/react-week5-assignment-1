import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './containers/CategoriesContainer';

import RegionContainer from './containers/RegionsContainer';

import { loadCategories, loadRestaurants, loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
    </div>
  );
}
