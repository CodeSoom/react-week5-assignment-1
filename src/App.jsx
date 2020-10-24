import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from './container/RegionsContainer';
import CategoriesContainer from './container/CategoriesContainer';
import {
  loadRegions,
  loadCategories,
} from './modules/actions';

export default function App() {
  // TODO: 지역과 음식분류가 모두 클릭 된 뒤 다른 클릭 이벤트가 1초동안 없으면
  //       `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${category}`
  //       에서 음식점 리스트를 가져온다.
  // TODO: 음식점 리스트를 그린다.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />

      <ul>
        <li>양천주가</li>
        <li>한국식 초밥</li>
      </ul>
    </div>
  );
}
