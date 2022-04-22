import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';
import { selectCategory } from './action';

function selector(state) {
  return {
    categories: state.categories,
  };
}

export default function CategoriesContainer() {
  const { categories } = useSelector(selector);

  const dispatch = useDispatch();

  function handleClickCategory({ id }) {
    dispatch(selectCategory({ id }));
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClickCategory}
    />
  );
}
