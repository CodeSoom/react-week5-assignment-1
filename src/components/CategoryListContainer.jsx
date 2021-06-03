import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../redux_module/asyncActions';

import { selectCategory } from '../redux_module/RestaurantSlice';
import ButtonList from './ButtonList';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.restaurant.categories);
  const region = useSelector((state) => state.restaurant.selected.region);

  const names = categories.map((category) => category.name);
  const selectedCategoryName = useSelector((state) => state.restaurant.selected.category.name);

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
