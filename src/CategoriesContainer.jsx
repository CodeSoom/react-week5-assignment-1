import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategories } from './actions';

import { fetchCategories } from './services/api';

import Categories from './Categories';

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();
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
    <Categories categories={categories} />
  );
}
