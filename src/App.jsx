import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import FoodsContainer from './FoodsContainer';

import {
  loadRegions,
  loadFoods,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadFoods());
  }, []);
  
  return (
    <div>
      <RegionsContainer />
      <div />
      <FoodsContainer />
      <div />
      
    </div>
  );
}
