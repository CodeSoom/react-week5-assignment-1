import { useDispatch, useSelector } from 'react-redux';

import Buttons from '../components/Buttons';

import { updateCategoryId } from '../redux/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  function handleCategoryClick({ value }) {
    dispatch(updateCategoryId({ categoryId: value }));
  }

  return (
    <Buttons
      value="id"
      buttonList={categories}
      currentButtonInfo={categoryId}
      emptyMessage="카테고리가 없어요!"
      onButtonClick={handleCategoryClick}
    />
  );
}
