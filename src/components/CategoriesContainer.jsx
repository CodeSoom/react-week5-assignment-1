import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from '../redux/actions';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Categories categories={categories} />
  );
}
