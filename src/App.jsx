import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, updateCategories, getRegions, getCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { regions, categories, restaurants } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  const handleClickRegion = (id) => {
    dispatch(updateRegions(id));
  };

  const handleClickCategory = (id) => {
    dispatch(updateCategories(id));
  };

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClickRegion(id)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClickCategory(id)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {restaurants.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
