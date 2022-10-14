import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';
import { setIdx } from './actions';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({ categories: state.categories }));
  const dispatch = useDispatch();
  const onClick = (idx) => {
    dispatch(setIdx(idx));
  };
  return (
    <Categories categories={categories} onClick={onClick} />
  );
}
