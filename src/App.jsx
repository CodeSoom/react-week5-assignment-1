import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadCategories,
  loadRegionList,
} from './action';

import RegionListContainer from './RegionListcontainer';
import Categories from "./Categories";

function loadCategories({ dispatch }) {
  const categories = [];
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
