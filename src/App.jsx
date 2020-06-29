import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';

import { setRegions, setCategories, setRestaurants } from './actions';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
}

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
}

async function loadRestaurants({ dispatch, selectedRegion, selectedCategory }) {
  const restaurants = await fetchRestaurants(selectedRegion, selectedCategory);
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();
  const { selectedRegion, selectedCategory } = useSelector((state) => state);
  useEffect(() => {
    loadRegions({ dispatch });
    loadCategories({ dispatch });
  }, []);

  useEffect(() => {
    loadRestaurants({ dispatch, selectedRegion, selectedCategory });
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <RegionContainer />
      <CategoriesContainer />

      <div>홍콩반점</div>
    </>
  );
}
