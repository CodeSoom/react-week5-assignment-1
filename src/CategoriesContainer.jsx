import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryID } = useSelector((selector) => ({
    categories: selector.categories,
    selectedCategoryID: selector.selectedCategoryID,
  }));

  function handleClickCategory(id) {
    dispatch(selectCategory(id));
  }

  return (
    <Categories
      selectedCategoryID={selectedCategoryID}
      categories={categories}
      onClick={handleClickCategory}
    />
  );
}
