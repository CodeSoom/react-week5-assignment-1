import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <div>
      {
        categories.map((category) => (
          <button type="button" key={category.id}>
            { category.name }
          </button>
        ))
      }
    </div>
  );
}
