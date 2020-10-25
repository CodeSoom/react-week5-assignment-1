import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import FoodsContainer from './FoodsContainer';

import {
  loadRegions,
  setFoods,
} from './actions';

function loadFoods({ dispatch }){
  const foods = [];
  dispatch(setFoods(foods));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    loadFoods(dispatch);
  }, []);
  
  return (
    <div>
      <RegionsContainer />
      <div />
      <FoodsContainer />
    </div>
  );
}
