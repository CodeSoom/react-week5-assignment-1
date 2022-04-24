import { useDispatch, useSelector } from 'react-redux';

import List from '../components/List';

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
    <List
      value="id"
      buttonList={categories}
      currentButtonInfo={categoryId}
      emptyMessage="카테고리가 없어요!"
      onButtonClick={handleCategoryClick}
    />
  );
}
