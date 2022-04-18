import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectCategoryId } = useSelector((selector) => ({
    categories: selector.categories,
    selectCategoryId: selector.selectCategoryId,
  }));

  function onSelect(id) {
    dispatch(selectCategory({ selectCategoryId: id }));
  }

  return (
    <Categories
      categories={categories}
      onSelect={onSelect}
      selectCategoryId={selectCategoryId}
    />
  );
}
