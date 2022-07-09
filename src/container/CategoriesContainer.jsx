import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../store/async-actions';

import { selectCategory } from '../store/actions';

import Categories from '../components/Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  const handleClickCategory = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClickCategory}
    />
  );
}
