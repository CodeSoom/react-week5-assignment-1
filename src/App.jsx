import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, updateCategories, getRegions, getCategories, getRestaurants,
} from './actions';

import ButtonList from './ButtonList';
import TextList from './TextList';

export default function App() {
  const dispatch = useDispatch();
  const { regions, categories, restaurants } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  const handleClickRegion = (id) => {
    dispatch(updateRegions(id));
    dispatch(getRestaurants());
  };

  const handleClickCategory = (id) => {
    dispatch(updateCategories(id));
    dispatch(getRestaurants());
  };

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <ButtonList
        elements={regions}
        onClick={handleClickRegion}
      />
      <ButtonList
        elements={categories}
        onClick={handleClickCategory}
      />
      <TextList
        elements={restaurants}
      />
    </>
  );
}
