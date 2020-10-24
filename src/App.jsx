import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { setRegions, setCategories, setRestaurants } from './actions';

import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();

  dispatch(setRegions({ regions }));
}

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();

  dispatch(setCategories({ categories }));
}

async function loadRestaurants({ dispatch, regionName, categoryId }) {
  const restaurants = await fetchRestaurants({ regionName, categoryId });

  dispatch(setRestaurants({ restaurants }));
}

export default function App() {
  const dispatch = useDispatch();

  const { filter: { regionName, categoryId } } = useSelector((state) => ({
    filter: state.filter,
  }));

  useEffect(() => {
    loadRegions({ dispatch });
    loadCategories({ dispatch });
    loadRestaurants({ dispatch, regionName, categoryId });
  }, [regionName, categoryId]);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
