import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { loadRestaurants, selectCategory } from './actions';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  /*  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  })); */

  /* 위 방법대신 아래 방법 사용시에는 아래 코드가 있는  util파일과 함께 사용
   function get(key) {
    return (obj) => obj[key];
  } */

  const categories = useSelector(get('categories'));

  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Categories categories={categories} onClick={handleClick} selectedCategory={selectedCategory} />
  );
}
