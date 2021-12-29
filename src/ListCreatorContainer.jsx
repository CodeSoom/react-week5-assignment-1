// Container Components:
// 추가되는 레스토랑 목록을 가져오는 액션을 ListCreator컴포넌트에 넘겨줌
import { useDispatch } from 'react-redux';

import ListCreator from './ListCreator';

import {
  addRestaurants,
} from './action';

export default function ListCreatorContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurants());
  }

  return (
    <ListCreator
      onClick={handleClick}
    />
  );
}
