import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <ul>
      {
        categories.map((item) => (
          <li key={item.id}>
            <button type="button">{item.name}</button>
          </li>
        ))
      }
    </ul>
  );
}
