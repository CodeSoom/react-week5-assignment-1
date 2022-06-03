import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentCategoryId } from '../app/actions';
import { loadCategories } from '../app/asyncActions';

import Buttons from '../Buttons/Buttons';

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
      targetName="currentCategoryId"
      currentId={currentCategoryId}
      onClick={handleClickCategory}
    />
  );
}
