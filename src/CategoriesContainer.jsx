import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';

function selector(state) {
  return {
    categories: state.categories,
  };
}

export default function CategoriesContainer() {
  const { categories } = useSelector(selector);

  return (
    <Categories categories={categories} />
  );
}
