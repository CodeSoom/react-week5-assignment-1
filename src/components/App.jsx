import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { categories, restaurants } from '../../fixtures';

import RegionsContaioner from '../containers/RegionsContainer';

import {
  loadRegions,
} from '../actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  });

  return (
    <>
      <RegionsContaioner />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button">{category.name}</button>
          </li>
        ))}
      </ul>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
          </li>
        ))}
      </ul>
    </>
  );
}
