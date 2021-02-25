import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContianer from './RegionsContainer';

import {
  setRegions,
} from './actions';

import regions from './fixtures/regions';
import categories from './fixtures/categories';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      <RegionsContianer />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
