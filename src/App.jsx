import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './containers/CategoriesContainer';

import RegionContainer from './containers/RegionsContainer';

import RestaurantsContainer from './containers/RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
