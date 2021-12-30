import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import {
  setCategory,
} from './action';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { Category, Categories } = useSelector((state) => ({
    Category: state.Category,
    Categorys: state.Categories,
  }));

  function handleClickCategory(clickedCategory) {
    dispatch(setCategory(clickedCategory));
  }

  return (
    <Buttons
      Category={Category}
      Categorys={Categories}
      onClick={handleClickCategory}
    />
  );
}
