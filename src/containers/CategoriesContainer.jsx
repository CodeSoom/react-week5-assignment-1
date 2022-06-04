import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import { changeRestaurantField } from '../actions';

export default function CategoriesContainer({ restaurant }) {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const handleClick = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
  };

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      restaurant={restaurant}
    />
  );
}
