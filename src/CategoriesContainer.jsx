import { useDispatch, useSelector } from 'react-redux';

import { chooseCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, clickedCategory } = useSelector((state) => ({
    categories: state.categories,
    clickedCategory: state.clickedCategory,
  }));

  function handleClick(e) {
    dispatch(chooseCategory(e.target.textContent));
  }

  return (
    <Categories
      categories={categories}
      clickedCategory={clickedCategory}
      onClick={handleClick}
    />
  );
}
