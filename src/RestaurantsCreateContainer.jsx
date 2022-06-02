import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, changeRestaurantField } from './actions';

import RetaurantForm from './RestaurantForm';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const handleClick = () => {
    dispatch(addRestaurant());
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
  };

  return (
    <RetaurantForm
      onClick={handleClick}
      onChange={handleChange}
      restaurant={restaurant}
    />
  );
}
