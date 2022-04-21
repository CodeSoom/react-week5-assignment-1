import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegionList,
  setCategories,
} from './action';

import { fetchCategories } from './services/api';

import RegionListContainer from './RegionListcontainer';
import CategoriesContainer from './CategoriesContainer';

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
}

export default function App() {
  // TODO : 실제 데이터 받아오기
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegionList());
    loadCategories({ dispatch });
  }, []);
  return (
    <div>
      <RegionListContainer />
      <CategoriesContainer />
    </div>
  );
}
