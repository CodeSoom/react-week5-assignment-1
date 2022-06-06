/**
 * 0. 지역, 분류 목록을 읽기
 * 1. 지역 선택 - Regions <- API
 * 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API
 * 3. 식당 목록 - Restaurants <- API (with region, category)
 */

import { useEffect } from 'react';

import { loadInitiaData } from './action';

function RegionsContainer() {
  return null;
}
function CategoriesContainer() {
  return null;
}
function RestaurntsContainer() {
  return null;
}

export default function App() {
  useEffect(() => {
    dispatch(loadInitiaData());
  });
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurntsContainer />
    </>
  );
}
