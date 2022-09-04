import { useDispatch, useSelector } from 'react-redux';

import { selectCategory, loadRestaurants } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategory, selectedRegion } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
    selectedRegion: state.selectedRegion,
  }));

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    if (selectedRegion.name !== undefined) {
      dispatch(loadRestaurants(selectedRegion, category));
    }
  };

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryClick={handleCategoryClick}
    />
  );
}
