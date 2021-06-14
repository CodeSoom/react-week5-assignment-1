import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {

} from './actions';

// 목표
// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택
// 2. 분류 선택
// 3. 식당 목록

function RegionsContainer() {
  return null;
}

function CategoriesContainer() {
  return null;
}

function RestaurantsContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
