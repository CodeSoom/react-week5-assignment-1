import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { setRestaurants, loadRegions, loadCategories } from './actions';

import { fetchRestaurants } from './services/api';

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
    if (selectedRegion && selectedCategory) {
      loadRestaurants({ dispatch, selectedRegion, selectedCategory });
    }
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
