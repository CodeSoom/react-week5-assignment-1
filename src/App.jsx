import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegionList,
  loadCategories,
} from './action';

import RegionListContainer from './RegionListcontainer';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegionList());
    dispatch(loadCategories());
  }, []);
  return (
    <div>
      <RegionListContainer />
      <CategoriesContainer />
    </div>
  );
}
