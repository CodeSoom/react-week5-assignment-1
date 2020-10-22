import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import CategoriesContainer from './CategoriesContainer';

import { loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
