import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantSelectorButtons from './RestaurantSelectorButtons';

import {
  selectCategory,
  loadCategories,
  loadRestaurants,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, category } = useSelector((state) => ({
    categories: state.categories,
    category: state.category,
  }));

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleCategoryClick(categoryName) {
    dispatch(selectCategory(categoryName));
    dispatch(loadRestaurants());
  }

  return (
    <RestaurantSelectorButtons
      list={categories}
      selectedItemName={category.name}
      onClick={handleCategoryClick}
    />
  );
}
