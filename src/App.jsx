import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRegions, setCategories } from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';

export default function App() {
  const dispatch = useDispatch();
  const { regions, categories } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
  }));

  const check = ({ id, name }, checkedId) => {
    const element = { id, name: name.replace('(v)', '') };
    if (element.id === checkedId) {
      element.name += '(v)';
    }
    return element;
  };

  const handleClickRegion = (checkedId) => {
    const checkedRegions = regions.map((region) => check(region, checkedId));
    dispatch(setRegions(checkedRegions));
  };

  const handleClickCategory = (checkedId) => {
    const checkedCategories = categories.map((category) => check(category, checkedId));
    dispatch(setCategories(checkedCategories));
  };

  useEffect(() => {
    dispatch(setRegions(regionsFixture));
    dispatch(setCategories(categoriesFixture));
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
              key={id}
              type="button"
              onClick={() => handleClickCategory(id)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
