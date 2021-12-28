import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  changeNameValue,
  changeCategoryValue,
  changePlaceValue,
  clickAdd,
} from './action';

function selector(state) {
  return {
    nameValue: state.nameValue,
    categoryValue: state.categoryValue,
    placeValue: state.placeValue,
  };
}

export default function App() {
  const dispatch = useDispatch();

  const {
    nameValue, categoryValue, placeValue,
  } = useSelector(selector);

  function handleChangeValue(event) {
    dispatch(changeNameValue(event.target.value));
    dispatch(changeCategoryValue(event.target.value));
    dispatch(changePlaceValue(event.target.value));
  }

  function handleClickAdd() {
    dispatch(clickAdd());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        nameValue={nameValue}
        categoryValue={categoryValue}
        placeValue={placeValue}
        onChange={handleChangeValue}
        onClick={handleClickAdd}
      />
    </div>
  );
}
