import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { intializeSelectButtons } from './actions';

import RegionContainer from './RegionContainer';
import CategoryContainer from './CategoryContainer';
import ListContainer from './ListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }, { id: 3, name: '대구' }, { id: 4, name: '부산' }, { id: 5, name: '광주' }, { id: 6, name: '강원도' }, { id: 7, name: '인천' }];
    const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }, { id: 3, name: '일식' }, { id: 4, name: '양식' }, { id: 5, name: '분식' }, { id: 6, name: '과자' }, { id: 7, name: '치킨' }];

    dispatch(intializeSelectButtons({ regions, categories }));
  }, []);

  return (
    <>
      <RegionContainer />
      <CategoryContainer />
      <ListContainer />
    </>
  );
}
