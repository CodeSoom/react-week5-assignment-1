import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((selector) => ({
    categories: selector.categories,
    selectedCategoryId: selector.selectedCategoryId,
  }));

  function onSelect(id) {
    dispatch(selectCategory({ selectCategoryId: id }));
  }

  return (
    <Categories
      categories={categories}
      onSelect={onSelect}
      selectedCategoryId={selectedCategoryId}
    />
  );
}
