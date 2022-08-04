import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import {
  setCategories,
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, category } = useSelector((state) => ({
    categories: state.categories,
    category: state.category,
  }));

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);

  function handleCategoryClick(categoryName) {
    dispatch(selectCategory(categoryName));
  }

  return (
    <Categories
      categories={categories}
      selectedCategoryName={category.name}
      onClick={handleCategoryClick}
    />
  );
}
