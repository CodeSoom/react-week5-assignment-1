import { useSelector } from 'react-redux';
import ButtonList from './ButtonList';

export default function CategoryListContainer() {
  const names = useSelector((state) => state.groups.categories);
  const selected = useSelector((state) => state.selected.category);

  return (
    <ButtonList
      names={names}
      onClick={null}
      selected={selected}
    />
  );
}
