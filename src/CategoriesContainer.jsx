import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import { selectCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId,
  }));

  function handleClickCheck(category) {
    dispatch(selectCategory(category));
  }

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClick={handleClickCheck}
    />
  );
}
