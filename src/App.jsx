import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <div>
      <Regions />
      <CategoriesContainer />
    </div>
  );
}
