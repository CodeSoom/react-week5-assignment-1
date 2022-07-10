import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInitialData } from './action';

import CategoryContainer from './CategoryContainer';
import RegionContainer from './RegionContainer';
import RestaurantContainer from './RestaurantContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <>
      <RegionContainer />
      <CategoryContainer />
      <RestaurantContainer />
    </>
  );
}
