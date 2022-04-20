import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import { selectCategory } from './actions';

export default function CategoriesContainer() {
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  function handleClick({ id }) {
    dispatch(selectCategory({ id }));
  }

  return (
    <List
      items={categories}
      selectedItemId={categoryId || ''}
      onClick={handleClick}
    />
  );
}
