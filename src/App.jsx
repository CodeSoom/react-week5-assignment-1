import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import { loadRegions, loadCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <ul>
      <li>
      서울:1
      </li>
      </ul>
    </div>
  );
}
