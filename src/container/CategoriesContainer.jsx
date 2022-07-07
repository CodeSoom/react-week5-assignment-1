import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../store/async-actions';

import Categories from '../components/Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Categories
      categories={categories}
    />
  );
}
