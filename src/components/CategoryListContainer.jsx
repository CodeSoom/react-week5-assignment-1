import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import ButtonList from './ButtonList';
import { loadRestaurants } from '../redux_module/asyncActions';
import { selectCategory } from '../redux_module/RestaurantSlice';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const {
    categories,

    selected: {
      region,
      category,
    },
  } = useSelector((state) => state.restaurant);

  const names = R.map(R.prop('name'), categories);

  const handleClick = (newCategoryName) => {
    const newCategory = R.find(R.propEq('name', newCategoryName), categories);

    dispatch(selectCategory(newCategory));
    dispatch(loadRestaurants(region, newCategory.id));
  };

  return (
    <ButtonList
      names={names}
      onClick={handleClick}
      selected={category.name}
    />
  );
}
