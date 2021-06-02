import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../redux_module/selectedSlice';
import ButtonList from './ButtonList';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const names = useSelector((state) => state.groups.categories);
  const selected = useSelector((state) => state.selected.category);
  const handleClick = (value) => dispatch(selectCategory(value));

  return (
    <ButtonList
      names={names}
      onClick={handleClick}
      selected={selected}
    />
  );
}
