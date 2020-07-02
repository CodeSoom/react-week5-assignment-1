import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRegions, loadCategories } from './actions';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <div>
      <ul>
        {
          regions.map((region) => (
            <li key={region.id}>
              <button type="button">
                { region.name }
              </button>
            </li>
          ))
        }
      </ul>
      <CategoriesContainer />
    </div>
  );
}
