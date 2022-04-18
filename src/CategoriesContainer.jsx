import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  function handleClick({ id }) {
    dispatch(selectCategory({ id }));
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
    />
  );
}
