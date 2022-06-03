import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from '../redux/actions';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, errorMessage } = useSelector((state) => ({
    selectedCategoryId: state.selectedCategoryId,
    categories: state.categories,
    errorMessage: state.errorMessage,
  }));

  const dispatch = useDispatch();

  const handleClick = (categoryId) => {
    dispatch(categoryId);
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Categories
      categories={categories}
      errorMessage={errorMessage}
      selectedId={0}
      onClick={handleClick}
    />
  );
}
