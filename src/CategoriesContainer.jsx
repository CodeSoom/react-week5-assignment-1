import { useDispatch, useSelector } from 'react-redux';

import { chooseCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, clickedCategory } = useSelector((state) => ({
    categories: state.categories,
    clickedCategory: state.clickedCategory,
  }));

  function handleClick(category) {
    dispatch(chooseCategory(category));
  }

  return (
    <Categories
      categories={categories}
      clickedCategory={clickedCategory}
      onClick={handleClick}
    />
  );
}
