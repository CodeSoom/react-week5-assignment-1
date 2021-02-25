import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemsContainer from './ItemsContainer';

import region from '../fixtures/region';
import category from '../fixtures/category';

import {
  setItems,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(region, category));
  }, []);

  return (
    <div>
      <ItemsContainer />
    </div>
  );
}
