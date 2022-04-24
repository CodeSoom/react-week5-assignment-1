import { useDispatch, useSelector } from 'react-redux';

import List from './List';

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
    <List
      list={categories}
      onSelect={onSelect}
      selectedId={selectCategoryId}
    />
  );
}
