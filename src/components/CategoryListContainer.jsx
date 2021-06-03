import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../redux_module/asyncActions';

import { selectCategory } from '../redux_module/selectedSlice';
import ButtonList from './ButtonList';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.groups.categories);
  const region = useSelector((state) => state.selected.region);

  const names = categories.map((category) => category.name);
  const selectedCategoryName = useSelector((state) => state.selected.category.name);

  const handleClick = (name) => {
    const newCategory = categories.find((element) => element.name === name);

    dispatch(selectCategory(newCategory));
    dispatch(loadRestaurants(region, newCategory.id));
  };

  return (
    <ButtonList
      names={names}
      onClick={handleClick}
      selected={selectedCategoryName}
    />
  );
}
