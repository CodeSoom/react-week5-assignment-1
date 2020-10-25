import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Categories from './Categories';
import Restaurants from './Restaurants';
import RegionsContainer from './RegionsContainer';

import {
  getRegions,
} from './modules/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <Categories />
      <Restaurants />
    </div>
  );
}
