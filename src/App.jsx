import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemsContainer from './ItemsContainer';

import region from '../fixtures/region';

import {
  setItems,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(region));
  }, []);

  return (
    <div>
      <ItemsContainer />
    </div>
  );
}
