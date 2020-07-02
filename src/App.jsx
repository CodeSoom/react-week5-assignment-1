import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { setRegions, setCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO 지역, 카테고리 불러오기
    const regions = [
      {
        id: 1,
        name: '서울',
      },
      {
        id: 2,
        name: '대전',
      },
    ];

    dispatch(setRegions(regions));
    dispatch(setCategories(regions));
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
    </>
  );
}
