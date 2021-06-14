import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  loadRestaurants,
  loadCategories,
} from './actions';

// 목표
// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택
// 2. 분류 선택
// 3. 식당 목록
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadCategories());
  }, []);

  return (
    <div />
  );
}
