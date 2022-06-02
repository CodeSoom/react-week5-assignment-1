import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentCategoryId, loadCategories } from './actions';

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

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Buttons
      items={categories}
      name="currentCategoryId"
      currentId={currentCategoryId}
      onClick={handleClickCategory}
    />
  );
}
