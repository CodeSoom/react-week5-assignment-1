import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategories } from './actions';

function loadCategories({ dispatch }) {
  const categories = [];
  dispatch(setCategories(categories));
}

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
  }, []);

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
