import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants, setCategoryId } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, regionName, categoryId } = useSelector((state) => ({
    categories: state.categories,
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  const handleClick = (clickedCategoryId) => {
    dispatch(setCategoryId(clickedCategoryId));
    dispatch(loadRestaurants(regionName, clickedCategoryId));
  };

  return (
    <Categories
      categories={categories}
      handleClick={handleClick}
      categoryId={categoryId}
    />
  );
}
