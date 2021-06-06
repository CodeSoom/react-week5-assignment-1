import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  loadDate,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDate());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
