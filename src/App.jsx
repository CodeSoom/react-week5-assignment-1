import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import Regions from './Regions';

import {
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  useEffect(() => {
    dispatch(loadCategories());
  });
  return (
    <div>
      <CategoriesContainer />
      <Regions regions={regions} />
    </div>
  );
}
