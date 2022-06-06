import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, selectCategoryId } from '../redux/actions';
import { get } from '../utils';
import Categories from './Categories';

export default function CategoriesContainer() {
  const selectedCategoryId = useSelector(get('selectedCategoryId'));
  const categories = useSelector(get('categories'));
  const errorMessage = useSelector(get('errorMessage'));

  const dispatch = useDispatch();

  const handleClick = (categoryId) => {
    dispatch(selectCategoryId(categoryId));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Categories
      categories={categories}
      errorMessage={errorMessage.categories}
      selectedId={selectedCategoryId}
      onClick={handleClick}
    />
  );
}
