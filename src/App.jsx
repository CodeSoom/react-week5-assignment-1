import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './container-component/RegionContainer';

import {
  loadRegions,
  loadCategories,
} from './actions';
import CategoryContainer from './container-component/CategoryContainer';
import RestaurantContainer from './container-component/RestaurantContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoryContainer />
      <RestaurantContainer />
    </div>
  );
}
