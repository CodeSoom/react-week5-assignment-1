import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadButtonData,
  applyFilter,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadButtonData('regions'));
    dispatch(loadButtonData('categories'));
  }, []);

  function handleClick({ field, content }) {
    dispatch(applyFilter({ field, content }));
  }

  return (
    <>
      <RegionsContainer onClick={handleClick} />
      <CategoriesContainer onClick={handleClick} />
      <RestaurantsContainer />
    </>
  );
}
