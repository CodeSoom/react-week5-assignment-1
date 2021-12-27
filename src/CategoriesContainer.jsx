import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCategories,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setCategories());
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <button key={category.id} type="button">
          {category.name}
        </button>
      ))}
    </ul>
  );
}
