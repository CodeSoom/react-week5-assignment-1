import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import List from './List';

function handleClickLocation() {
  // dispatch(setRegions(name));
  console.log('dd');
}

export default function ListContainer() {
  const { regions, categories, restaurants } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <List hasButton="true" itemTypes={regions} onClick={handleClickLocation} />
      <br />
      <List hasButton="true" itemTypes={categories} />
      <br />
      <List itemTypes={restaurants} />
    </>
  );
}
