import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { intializeSelectButtons, setSelectInfo } from './actions';

import Buttons from './Buttons';
import List from './List';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(intializeSelectButtons());
  }, []);

  const { locations, foodTypes, results } = useSelector((state) => ({
    locations: state.locations,
    foodTypes: state.foodTypes,
    results: state.results,
  }));

  return (
    <>
      <Buttons buttonNames={locations} />
      <Buttons buttonNames={foodTypes} />
      <List items={results} />
    </>
  );
}
