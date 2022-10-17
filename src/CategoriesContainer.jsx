import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';
import { setId } from './actions';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({ categories: state.categories }));
  const { selectedId } = useSelector((state) => ({ selectedId: state.selectedId }));
  const dispatch = useDispatch();
  const onHandleClick = (id) => {
    dispatch(setId(id));
  };
  return (
    <Categories categories={categories} onClick={onHandleClick} selectedId={selectedId} />
  );
}
