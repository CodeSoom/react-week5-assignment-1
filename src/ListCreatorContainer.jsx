// Container Components:
// 추가되는 레스토랑 목록을 가져오는 액션을 ListCreator컴포넌트에 넘겨줌
import { useDispatch, useSelector } from 'react-redux';

import ListCreator from './ListCreator';

import {
  addRestaurant,
} from './action';

export default function ListCreatorContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <ListCreator
      restaurant={restaurant}
      onClick={handleClick}
    />
  );
}
