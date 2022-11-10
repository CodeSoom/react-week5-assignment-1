import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <Categories categories={categories} />
  );
}
