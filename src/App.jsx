import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';
import Categories from './Categories';

import {
  loadRegions,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { regions, categories } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <Regions items={regions} />
      <Categories items={categories} />
    </div>
  );
}
