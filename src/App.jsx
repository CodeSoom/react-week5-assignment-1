import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lists from './Lists';

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
      <Lists items={regions} />
      <Lists items={categories} />
    </div>
  );
}
