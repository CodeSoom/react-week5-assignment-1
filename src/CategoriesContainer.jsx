import { useDispatch, useSelector } from 'react-redux';

import { setSelectCategoryId } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectCategoryId: state.selectCategoryId,
  }));

  const dispatch = useDispatch();

  const handleClick = (categoryId) => {
    dispatch(setSelectCategoryId(categoryId));
  };

  return (
    <Categories
      categories={categories}
      handleClick={handleClick}
      selectCategoryId={selectCategoryId}
    />
  );
}
