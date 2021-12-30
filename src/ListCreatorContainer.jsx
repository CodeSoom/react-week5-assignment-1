// Container Components:
// 추가되는 레스토랑 목록을 가져오는 액션을 ListCreator컴포넌트에 넘겨줌
import { useDispatch, useSelector } from 'react-redux';

import ListCreator from './ListCreator';

import {
  addRestaurant,
  putRestaurantField,
} from './action';

export default function ListCreatorContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(putRestaurantField({ name, value }));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <ListCreator
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
