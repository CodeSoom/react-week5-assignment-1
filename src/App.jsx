import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setCategories } from './actions';

function loadCategories(dispatch) {
  const categories = [];

  dispatch(setCategories(categories));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories(dispatch);
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
