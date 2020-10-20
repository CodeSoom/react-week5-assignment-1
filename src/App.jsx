import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectButtons } from './actions';

import Buttons from './Buttons';
import List from './List';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectButtons());
  }, []);

  const { locationList, foodTypeList, resultList } = useSelector((state) => ({
    localList: state.locationList,
    foodTypeList: state.foodTypeList,
    resultList: state.resultList,
  }));

  return (
    <>
      <Buttons buttonNameList={locationList} />
      <Buttons buttonNameList={foodTypeList} />
      <List itemList={resultList} />
    </>
  );
}
