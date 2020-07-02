import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

import { loadRegions, loadCategories } from './action';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    restaurants: state.restaurants,
  }));

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
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
