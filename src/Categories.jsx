import { useSelector, useDispatch } from 'react-redux';

import { setCurrentCategoryId } from './actions';

import Buttons from './Buttons';

export default function Categories() {
  const dispatch = useDispatch();

  const { categories, currentCategoryId } = useSelector((state) => ({
    categories: state.categories,
    currentCategoryId: state.currentCategoryId,
  }));

  const handleClickCategory = (id) => {
    dispatch(setCurrentCategoryId(id));
  };

  return (
    <Buttons
      items={categories}
      name="currentCategoryId"
      currentId={currentCategoryId}
      onClick={handleClickCategory}
    />
  );
}
