import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

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
    <Categories
      categories={categories}
      categoryId={categoryId}
      onClick={handleClick}
    />
  );
}
