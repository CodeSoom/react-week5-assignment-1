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
      <RegionsContainer />
      <CategoriesContainer />
      <ul>
        <li>양천주가</li>
        <li>한국식 초밥</li>
        <li>김초밥</li>
      </ul>
    </div>
  );
}
