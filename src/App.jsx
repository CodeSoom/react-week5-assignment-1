import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadButtonData,
  loadFilteredRestaurants,
  applyFilter,
} from './actions';

export default function App() {
  const { filter } = useSelector((state) => ({
    filter: state.filter,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadButtonData('regions'));
    dispatch(loadButtonData('categories'));
  }, []);

  useEffect(() => {
    if (!(filter.regionName && filter.categoryId)) return;

    dispatch(loadFilteredRestaurants({
      regionName: filter.regionName,
      categoryId: filter.categoryId,
    }));
  }, [filter]);

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
