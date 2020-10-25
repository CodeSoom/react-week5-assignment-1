import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Restaurants from './Restaurants';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  getCategories,
  getRegions,
} from './modules/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <Restaurants />
    </div>
  );
}
