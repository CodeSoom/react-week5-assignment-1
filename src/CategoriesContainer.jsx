import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, selectedCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategory,
  }));

  const handleClick = (id) => {
    dispatch(selectedCategory(id));
  };

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      selectedCategory={selectedCategoryId}
    />
  );
}
