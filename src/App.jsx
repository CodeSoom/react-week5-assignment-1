import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadInitiaData, loadCategories, loadRegions } from './action';

import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';

/**
 * 0. 지역, 분류 목록을 읽기
 * 1. 지역 선택 - Regions <- API
 * 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API
 * 3. 식당 목록 - Restaurants <- API (with region, category)
 */

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      {/* <RestaurntsContainer /> */}
    </>
  );
}
