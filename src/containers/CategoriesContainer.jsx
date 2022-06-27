import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';

import { changeRestaurantField, loadRestaurants } from '../actions';

import { get } from '../utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((get('categories')));
  const restaurant = useSelector((get('restaurant')));

  const handleClick = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
    dispatch(loadRestaurants());
  };

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      restaurant={restaurant}
    />
  );
}
