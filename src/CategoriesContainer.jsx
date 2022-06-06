import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from './action';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.categoryId,
  }));

  const updateSelectedCategory = (categoryId) => {
    dispatch(setCategory(categoryId));
  };

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      updateSelectedCategory={updateSelectedCategory}
    />
  );
}
