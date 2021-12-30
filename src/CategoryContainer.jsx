import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import {
  setCategory,
} from './action';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { category, categories } = useSelector((state) => ({
    category: state.category,
    categories: state.categories,
  }));

  function handleClickCategory(clickedCategory) {
    dispatch(setCategory(clickedCategory));
  }

  return (
    <Buttons
      stateValue={category}
      valueList={categories}
      onClick={handleClickCategory}
    />
  );
}
