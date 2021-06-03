import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../redux_module/selectedSlice';
import ButtonList from './ButtonList';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.groups.categories);

  const names = categories.map((category) => category.name);
  const selected = useSelector((state) => state.selected.category.name);

  const handleClick = (name) => {
    const category = categories.find((element) => element.name === name);
    dispatch(selectCategory(category));
  };

  return (
    <ButtonList
      names={names}
      onClick={handleClick}
      selected={selected}
    />
  );
}
